# All-Purpose Rap Playlist Manager

This is a manager for the playlist "All-Purpose Rap" on Spotify owned by Aneesh Deshpande. The intention was to curate it to only have well-liked songs but making it collaborative meant that anyone could add to it. This allows anyone to request a song for addition or removal, and a majority of the admins have to agree to the proposal.

Visit: http://ec2-34-226-193-24.compute-1.amazonaws.com:3000/

## Contributing
### What you will need
* This is a Node.js app, so you will need node and npm installed.
* MongoDB installed and running. See: https://docs.mongodb.com/manual/installation/
* Spotify Client credentials. Create an app at: https://developer.spotify.com/my-applications/#!/applications
* Fork the repository and clone it onto your machine.
* A config file. Copy the following into a file called _config.js_ and place it in the top level folder. Fill in the two Spotify credentials in the place indicated.

	```
	module.exports = {
		ADITYA_PASSWORD: 'password1',
		REVANTH_PASSWORD: 'password2',
		VINEETH_PASSWORD: 'password3',
		SHASHANK_PASSWORD: 'password4',
		JAIDEV_PASSWORD: 'password5',
		SUPER_PASSWORD: 'password6',
		SECRET_KEY: 'secretkey',
		SPOTIFY: {
			CLIENT_ID: 'FILL THIS IN',
			CLIENT_SECRET: 'FILL THIS IN'
		},
		MONGO_URL: 'mongodb://localhost/rap-manager'
	}
	```
Once that is in place, navigate to the directory and run `npm start`. The admin passwords are the passwords as shown in the file above.