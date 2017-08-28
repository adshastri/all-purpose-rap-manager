import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';

import { AuthService } from './auth.service';
import { SongsService } from './songs.service';
import { TokenManagerService } from './token-manager.service';
import { ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

	constructor(public dialog: MdDialog, private songsService : SongsService, private tokenManagerService : TokenManagerService, private ref: ChangeDetectorRef) {}

	admin : Boolean;
	songs : any[];
	rems : any[];
	approves : any[];
	who : String;
	token : String;
	dels: any[];

	ngOnInit() : void {
		this.admin = false;
		this.songsService.getApprovalQueue().then(data => {this.songs = data}).catch(err => console.log(err));
		this.songsService.getRemovalQueue().then(data => {this.rems = data}).catch(err => console.log(err));
		this.songsService.getApprovedSongs().then(data => {this.approves = data}).catch(err => console.log(err));
		this.songsService.getRemovedSongs().then(data => {this.dels = data}).catch(err => console.log(err));
		this.refreshState();
	}

	private refreshState() {
		this.token = this.tokenManagerService.retrieveToken();
		if (!(this.token=='' || this.token==null)) {
			this.admin = true;
		} else {
			this.admin = false;
		}
		this.who = this.tokenManagerService.retrieveMe();
	}

	openDialog() {
	    let dialogRef = this.dialog.open(PasswordDialog);
	    dialogRef.afterClosed().subscribe(result => {
	    	this.tokenManagerService.store(result.token, result.loggedIn)
	    	if (!(result.token == '' || result.token == null)) {
	    		this.admin = true;
	    		this.who = result.loggedIn;		
	    	}
 	    });
	}

	searchDialog() {
		let dialogRef = this.dialog.open(AddDialog);
	    dialogRef.afterClosed().subscribe(result => {
	    	this.songsService.getApprovalQueue().then(data => this.songs = data).catch(err => console.log(err));
 	    });
	}

	searchPlaylistDialog() {
		let dialogRef = this.dialog.open(RemoveDialog);
	    dialogRef.afterClosed().subscribe(result => {
	    	this.songsService.getRemovalQueue().then(data => this.rems = data).catch(err => console.log(err));
 	    });
	}

	approve(song : any) {
		this.refreshState();
		this.songsService.approve(song.spotifyid, this.who, this.token);
		this.songsService.getApprovalQueue().then(data => this.songs = data).catch(err => console.log(err));
		this.refreshState();
		this.ref.detectChanges();
	}

	nonApprove(song : any) {
		this.refreshState();
		this.songsService.nonApprove(song.spotifyid, this.who, this.token);
		this.songsService.getApprovalQueue().then(data => this.songs = data).catch(err => console.log(err));
		this.refreshState();
		this.ref.detectChanges();
	}

	disapprove(song : any) {
		this.refreshState();
		this.songsService.disapprove(song.spotifyid, this.who, this.token);
		this.songsService.getRemovalQueue().then(data => this.rems = data).catch(err => console.log(err));
		this.refreshState();
		this.ref.detectChanges();
	}

	nonDisapprove(song : any) {
		this.refreshState();
		this.songsService.nonDisapprove(song.spotifyid, this.who, this.token);
		this.songsService.getRemovalQueue().then(data => this.rems = data).catch(err => console.log(err));
		this.refreshState();
		this.ref.detectChanges();
	}

	add(song: any) {
		this.refreshState();
		this.songsService.add(song.spotifyid, this.token);
		this.songsService.getApprovedSongs().then(data => {this.approves = data}).catch(err => console.log(err));
		this.refreshState();
	}

	remove(song: any) {
		this.refreshState();
		this.songsService.remove(song.spotifyid, this.token);
		this.songsService.getRemovedSongs().then(data => {this.dels = data}).catch(err => console.log(err));
		this.refreshState();
	}

	isOwner() {
		return this.admin && this.who=="Aneesh";
	}
}

@Component({
  selector: 'password-dialog',
  templateUrl: 'password-dialog.html',
})
export class PasswordDialog {
	password : String;
	incorrectPassword : Boolean = false;

	checkPassword() : void {
		this.authService.login(this.password).
		then(data => {
			if (data.loggedIn == "Aditya" || data.loggedIn == 'Jaidev' || data.loggedIn == "Vineeth" || data.loggedIn == "Aneesh" || data.loggedIn == "Shashank" || data.loggedIn == "Revanth") {
				this.dialogRef.close({token: data.token, loggedIn: data.loggedIn});
			} else {
				this.incorrectPassword = true;
			}
		})
		.catch(err => console.log(err));
	}

    constructor(public dialogRef: MdDialogRef<PasswordDialog>, public authService : AuthService) {}
}

@Component({
  selector: 'add-dialog',
  templateUrl: 'add-dialog.html'
})
export class AddDialog implements OnInit {
	constructor(public dialogRef: MdDialogRef<AddDialog>, private songsService : SongsService) { }

	title : String;
	songs : Observable<any[]>;

	searchTerms = new Subject<string>();

	ngOnInit() : void {
		this.songs = this.searchTerms
			.debounceTime(200)
			.distinctUntilChanged()
			.switchMap(term => term ? this.songsService.search(term) : Observable.of<any[]>([]))
			.catch(error => {
				console.log(error);
				return Observable.of<any[]>([]);
			});
	}

	search(title) : void {
		this.searchTerms.next(title);
	}

	addToApproval(song : any) {
		this.songsService.addToApproval(song.spotifyid);
		this.dialogRef.close();
	}
}

@Component({
  selector: 'remove-dialog',
  templateUrl: 'remove-dialog.html'
})
export class RemoveDialog implements OnInit {
	constructor(public dialogRef: MdDialogRef<RemoveDialog>, private songsService : SongsService) { }

	title : String;
	playlist : any[];

	searchTerms = new Subject<string>();

	ngOnInit() : void {
		this.songsService.getPlaylist().then(data => {this.playlist = data}).catch(err => console.log(err));
	}

	addToRemoval(song : any) {
		this.songsService.addToRemoval(song.spotifyid);
		this.dialogRef.close();
	}
}