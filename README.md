# All-Purpose Rap Playlist Manager

This is a manager for the playlist "All-Purpose Rap" on Spotify owned by Aneesh Deshpande. The intention was to curate it to only have well-liked songs, but making it collaborative meant that anyone could add to it. This allows anyone to request a song for addition or removal, and a majority of the admins have to agree to the proposal.

Visit: https://all-purpose-rap-manager.herokuapp.com

## Contributing
### What you will need
* Node and npm.
* MongoDB installed and running. See: https://docs.mongodb.com/manual/installation/
* Spotify Client credentials. Create an app at: https://developer.spotify.com/my-applications/#!/applications
* Fork the repository and clone it onto your machine.
* A config file. Copy the following into a file called _config.js_ and place it in the top level folder. Fill in the two Spotify credentials in the place indicated.

	```
	module.exports = {
		ADMINS:[
			{
				PASSWORD: 'password1',
				NAME: 'name1'
			},
			{
				PASSWORD: 'password2',
				NAME: 'name2'
			},
			{
				PASSWORD: 'password3',
				NAME: 'name3'
			},
			{
				PASSWORD: 'password4',
				NAME: 'name4'
			},
			{
				PASSWORD: 'password5',
				NAME: 'name5'
			}
		],
		SUPER_ADMIN: {
			PASSWORD: 'password_super',
			NAME: 'name_super'
		},
		SECRET_KEY: 'secretkey',
		SPOTIFY: {
			CLIENT_ID: 'FILL THIS IN',
			CLIENT_SECRET: 'FILL THIS IN'
		},
		MONGO_URL: 'mongodb://localhost/rap-manager'
	}

	```
Once that is in place, navigate to the directory and run `npm start`. The admin/superadmin passwords are the passwords as shown in the file above. If you wish to develop on the Angular UI, you will need to install the Angular CLI.
