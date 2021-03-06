mongoose = require('mongoose')
if (process.env.CONFIG) {
	var config = JSON.parse(process.env.CONFIG);
} else {
	var config = require('../config.js');
}

console.log(config.ADMINS.length + 1)

const songSchema = mongoose.Schema({
	spotifyid: String,
	approvals: [String],
	nonapprovals: [String],
	disapprovals: [String],
	nondisapprovals: [String],
	artists: [String],
	title: String,
	status: String,
	url: String
});

songSchema.statics.addForApproval = function(id, name, artists, preview_url, cb) {
	var S = this;
	this.find({spotifyid: id}, function(err, result) {
		if (result.length != 0) {
			cb(400);
		} else {
			var newSong = new S({spotifyid: id, url: preview_url, title: name, artists: artists, status: "1", approvals: [], nonapprovals:[], disapprovals:[], nondisapprovals:[]});
			newSong.save();
			cb(200);
		}
	})
}

songSchema.statics.approve = function(id, who) {
	var S = this;
	this.find({spotifyid: id}, function(err, result) {
		if (result[0].nonapprovals.indexOf(who) == -1) {
			S.update({spotifyid: id}, {$addToSet: {approvals: who}}, function(err, result) {
				S.checkForTotal(id, 'plus');
			});
		}
	})
}

songSchema.statics.nonapprove = function(id, who) {
	var S = this;
	this.find({spotifyid: id}, function(err, result) {
		if (result[0].approvals.indexOf(who) == -1) {
			S.update({spotifyid: id}, {$addToSet: {nonapprovals: who}}, function(err, result) {
				S.checkForTotal(id, 'plus');
			});
		}
	})
}

songSchema.statics.add = function(id) {
	this.update({spotifyid: id}, {$set: {status: "3"}}).exec();
}

songSchema.statics.addForDisapproval = function(id) {
	this.update({spotifyid: id}, {$set: {status: "4"}}).exec();
}

songSchema.statics.disapprove = function(id, who) {
	var S = this;
	this.find({spotifyid: id}, function(err, result) {
		if (result[0].nondisapprovals.indexOf(who) == -1) {
			S.update({spotifyid: id}, {$addToSet: {disapprovals: who}}, function(err, result) {
				S.checkForTotal(id, 'minus');
			});
		}
	})
	
}

songSchema.statics.nondisapprove = function(id, who) {
	console.log(id);
	var S = this;
	this.find({spotifyid: id}, function(err, result) {
		if (result[0].disapprovals.indexOf(who) == -1) {
			S.update({spotifyid: id}, {$addToSet: {nondisapprovals: who}}, function(err, result) {
				S.checkForTotal(id, 'minus');
			});
		}
	})
}

songSchema.statics.delete = function(id) {
	this.update({spotifyid: id}, {$set: {status: "6"}}).exec();
}

songSchema.statics.getByStatus = function(status, cb) {
	this.find({status: status}, function(err, result) {
		cb(result);
	});
}

songSchema.statics.checkForTotal = function(id, way) {
	var S = this;
	this.find({spotifyid: id}, function(err, result) {
		if (way == "plus") {
			var tot = result[0].approvals.length + result[0].nonapprovals.length;
			if (result[0].approvals.length >= (config.ADMINS.length+1)/2) {
				S.update({spotifyid: id}, {$set: {status: "2", approvals: [], nonapprovals: []}}).exec();
			} else if (result[0].nonapprovals.length >= ((config.ADMINS.length+1)/2)+1 || tot == config.ADMINS.length+1) {
				S.remove({spotifyid: id}, function(err, result) {});
			} 
		} else {
			var tot = result[0].disapprovals.length + result[0].nondisapprovals.length;
			if (result[0].disapprovals.length >= (config.ADMINS.length+1)/2) {
				S.update({spotifyid: id}, {$set: {status: "5", approvals: [], nonapprovals: []}}).exec();
			} else if (result[0].nondisapprovals.length >= ((config.ADMINS.length+1)/2)+1 || tot == (config.ADMINS.length+1)) {
				S.update({spotifyid: id}, {$set: {status: "3", approvals: [], nonapprovals: []}}).exec();
			}
		}
	})
}

const Song = mongoose.model('Song', songSchema)

module.exports = Song
