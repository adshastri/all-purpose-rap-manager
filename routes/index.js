var express = require('express');
var router = express.Router();

var Song = require('../models/song');

var jwt = require('jsonwebtoken');
var request = require('request');

var config = require('../config');

var ACCESS_TOKEN = '';
var PLAYLIST;

getAccessToken = () => {
	var b64 = new Buffer(config.SPOTIFY.CLIENT_ID+':'+config.SPOTIFY.CLIENT_SECRET).toString('base64');
	var options = {
		url: 'https://accounts.spotify.com/api/token',
		headers: {
			'Authorization': 'Basic ' + b64
		},
		method: 'POST',
		json: true,
		form: {
			grant_type: "client_credentials"
		}
	}

	request(options, (err, respose, data) => {
		ACCESS_TOKEN = data.access_token;
		//getPlaylist();
		setTimeout(() => {
			getAccessToken()
		}, (data.expires_in*1000)-7000)
	});
}

getPlaylist = () => {
	var original_url = 'https://api.spotify.com/v1/users/122973263/playlists/0zk7p7xXWoqx9IhU7p9b00/tracks'
	var options = {
		url: original_url,
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + ACCESS_TOKEN
		},
		json: true
	}
	var array = [];
	request(options, (err, response, data) => {
		var items = data.items;
		array = array.concat(items);
		options.url = original_url + '?offset=100';
		request(options, (err, response, data) => {
			var items = data.items;
			array = array.concat(items);
			options.url = original_url + '?offset=200';
			request(options, (err, response, data) => {
				var items = data.items;
				array = array.concat(items);
				options.url = original_url + '?offset=300';
				request(options, (err, response, data) => {
					var items = data.items;
					array = array.concat(items);
					options.url = original_url + '?offset=400';
					request(options, (err, response, data) => {
						var items = data.items;
						array = array.concat(items);
						options.url = original_url + '?offset=500';
						PLAYLIST = array.map((song) => {
							var artists = song.track.artists.map((artist) => { return artist.name; });
							var title = song.track.name;
							var id = song.track.id;
							var preview_url = song.track.preview_url;
							return {artists: artists, url: preview_url, title: title, spotifyid: id, status: "3", approvals: [], nonapprovals:[], disapprovals:[], nondisapprovals:[]}
						});
						Song.collection.insert(PLAYLIST);
					});
				});
			});
		});
	});
}

getAccessToken();

router.post('/login', (req, res, next) => {
    var pwd = req.body.pwd;
    
    if (pwd == config.SUPER_ADMIN.PASSWORD) {
    	 var token = jwt.sign({admin: "2"}, config.SECRET_KEY, {expiresIn: "1h"});
    	 res.json({loggedIn: config.SUPER_ADMIN.NAME, token: token, status: "2"});
    } else {
    	var found = false;
    	for (var i = 0; i < config.ADMINS.length; i++) {
    		if (config.ADMINS[i].PASSWORD == pwd) {
    			found = true;
    			var token = jwt.sign({admin: "1"}, config.SECRET_KEY, {expiresIn: "1h"});
    			res.json({loggedIn: config.ADMINS[i].NAME, token: token, status: "1"});
    			break;
    		}
    	}
    	if (!found) {
    		res.json({loggedIn: "0", token: '', status: "0"});
    	}
    }
});

router.get('/songs', (req, res, next) => {
	var status = req.query.status;

	if (!status) {
		res.status(400).send('No status.');
	} else {

		Song.getByStatus(status, (list) => {
			res.json(list);
		});
	}
});

router.get('/search', (req, res, next) => {
	var string = req.query.string;

	var q = "?q=" + string + "&type=track&limit=5"

	var options = {
		url: 'https://api.spotify.com/v1/search' + q,
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + ACCESS_TOKEN
		},
		json: true
	}
	request(options, (err, response, data) => {
		var items = data.tracks.items;
		items = items.map((song) => {
			var artists = song.artists.map((artist) => { return artist.name; });
			var title = song.name;
			var id = song.id;
			return {artists: artists, title: title, spotifyid: id}
		});
		res.json(items);
	});
});

router.post('/songs/action', (req, res, next) => {
	var id = req.body.id;
	var action = req.body.action;
	var who = req.body.who;
	var token = req.get('Authorization');
	if (!token) {
		var status = "0";
		var allowed = checkAllowed(action, status);
		if (allowed) {
			act(action, id, who, (finished) => {
				if (finished == 200) {
					res.send('Done.');
				} else {
					res.status(400).send("Bad action.");
				}
			});
		} else {
			res.status(401).send("You dont have the proper authorization.");
		}
	} else {
		token = token.substring(7);
		jwt.verify(token,config.SECRET_KEY, (err, decoded) => {
			if (err) {
				var status = "0";
			} else {
				var status = decoded.admin;
			}
			var allowed = checkAllowed(action, status);
			if (allowed) {
				act(action, id, who, (finished) => {
					if (finished == 200) {
						res.send('Done.');
					} else {
						res.status(400).send("Bad action.");
					}
				});
			} else {
				res.status(401).send("You dont have the proper authorization.");
			}
		});
	}
	
});

var checkAllowed = (action, status) => {
	var perms = {
		addForApproval: ["0", "1", "2"],
		approve: ["1", "2"],
		nonApprove: ["1", "2"],
		add: ["2"],
		addForDisapproval: ["0", "1", "2"],
		disapprove: ["1", "2"],
		nonDisapprove: ["1", "2"],
		remove: ["2"]
	}
	return (perms[action].indexOf(status) > -1)
}

var act = (action, id, who, cb) => {
	if (action == "addForApproval") {
		var options = {
			url: 'https://api.spotify.com/v1/tracks/' + id,
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + ACCESS_TOKEN
			},
			json: true
		}
		request(options, (err, response, data) => {
			var artists = data.artists.map((artist) => { return artist.name });
			var name = data.name;
			var preview_url = data.preview_url;
			Song.addForApproval(id, name, artists, preview_url, (finished) => {
				cb(finished)
			});
		});
	} else if (action == "approve") {
		Song.approve(id, who);
		cb(200);
	} else if (action == "nonApprove") {
		Song.nonapprove(id, who);
		cb(200);
	} else if (action == "add") {
		Song.add(id);
		cb(200);
	} else if (action == "addForDisapproval") {
		Song.addForDisapproval(id);
		cb(200);
	} else if (action == "disapprove") {
		Song.disapprove(id, who);
		cb(200);
	} else if (action == "nonDisapprove") {
		Song.nondisapprove(id, who);
		cb(200);
	} else if (action == "remove") {
		Song.delete(id);
		cb(200);
	} else {
		cb(400);
	}
}

module.exports = router;