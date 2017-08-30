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
	filter : String;
	status : String;

	ngOnInit() : void {
		this.admin = false;
		this.filter = "all";
		this.getData();
		this.refreshState();
	}

	getData() : void {
		this.songsService.getApprovalQueue().then(data => {this.setSongs(data)}).catch(err => console.log(err));
		this.songsService.getRemovalQueue().then(data => {this.setRems(data)}).catch(err => console.log(err));
		this.songsService.getApprovedSongs().then(data => {this.setApproves(data)}).catch(err => console.log(err));
		this.songsService.getRemovedSongs().then(data => {this.setDels(data)}).catch(err => console.log(err));
	}

	private refreshState() {
		this.token = this.tokenManagerService.retrieveToken();
		if (!(this.token=='' || this.token==null)) {
			this.admin = true;
		} else {
			this.admin = false;
		}
		this.who = this.tokenManagerService.retrieveMe();
		this.status = this.tokenManagerService.retrieveStatus();
	}

	setSongs(data: any[]) : void {
		if (this.filter == "all") {
			this.songs = data;
		} else {
			this.songs = data.filter(item => {
				return (item.approvals.indexOf(this.who) == -1 && item.nonapprovals.indexOf(this.who) == -1)
			})
		}
	}

	setRems(data: any[]) : void {
		if (this.filter == "all") {
			this.rems = data;
		} else {
			this.rems = data.filter(item => {
				return (item.disapprovals.indexOf(this.who) == -1 && item.nondisapprovals.indexOf(this.who) == -1)
			})
		}
	}

	setApproves(data: any[]) : void {
		this.approves = data;
	}

	setDels(data: any[]) : void {
		this.dels = data;
	}

	openDialog() {
	    let dialogRef = this.dialog.open(PasswordDialog);
	    dialogRef.afterClosed().subscribe(result => {
	    	this.tokenManagerService.store(result.token, result.loggedIn, result.status);
	    	if (!(result.token == '' || result.token == null)) {
	    		this.admin = true;
	    		this.who = result.loggedIn;		
	    		this.status = result.status;
	    	}
 	    });
	}

	searchDialog() {
		let dialogRef = this.dialog.open(AddDialog);
	    dialogRef.afterClosed().subscribe(result => {
	    	this.songsService.getApprovalQueue().then(data => this.setSongs(data)).catch(err => console.log(err));
 	    });
	}

	searchPlaylistDialog() {
		let dialogRef = this.dialog.open(RemoveDialog);
	    dialogRef.afterClosed().subscribe(result => {
	    	this.songsService.getRemovalQueue().then(data => this.setRems(data)).catch(err => console.log(err));
 	    });
	}

	approve(song : any) {
		this.refreshState();
		this.songsService.approve(song.spotifyid, this.who, this.token);
		this.songsService.getApprovalQueue().then(data => this.setSongs(data)).catch(err => console.log(err));
		this.ref.detectChanges();
	}

	nonApprove(song : any) {
		this.refreshState();
		this.songsService.nonApprove(song.spotifyid, this.who, this.token);
		this.songsService.getApprovalQueue().then(data => this.setSongs(data)).catch(err => console.log(err));
		this.ref.detectChanges();
	}

	disapprove(song : any) {
		this.refreshState();
		this.songsService.disapprove(song.spotifyid, this.who, this.token);
		this.songsService.getRemovalQueue().then(data => this.setRems(data)).catch(err => console.log(err));
		this.ref.detectChanges();
	}

	nonDisapprove(song : any) {
		this.refreshState();
		this.songsService.nonDisapprove(song.spotifyid, this.who, this.token);
		this.songsService.getRemovalQueue().then(data => this.setRems(data)).catch(err => console.log(err));
		this.ref.detectChanges();
	}

	add(song: any) {
		this.refreshState();
		this.songsService.add(song.spotifyid, this.token);
		this.songsService.getApprovedSongs().then(data => {this.setApproves(data)}).catch(err => console.log(err));
	}

	remove(song: any) {
		this.refreshState();
		this.songsService.remove(song.spotifyid, this.token);
		this.songsService.getRemovedSongs().then(data => {this.setDels(data)}).catch(err => console.log(err));
	}

	isOwner() {
		return this.admin && this.status=="2";
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
			if (data.status == "1" || data.status == "2") {
				this.dialogRef.close({token: data.token, loggedIn: data.loggedIn, status: data.status});
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