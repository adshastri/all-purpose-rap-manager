import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SongsService {

  constructor(private http : HttpClient) { }

  url = '/api/'

  getApprovalQueue() : any {
  	return this.http.get(this.url+'songs?status=1').toPromise().then(response => response).catch(err => err);
  }

  search(string) : Observable<any[]> {
  	return this.http.get(this.url+'search?string='+string).map(response => {console.log(response);return response});
  }

  addToApproval(id : String) : void {
  	this.http.post(this.url+'songs/action', {action: "addForApproval", id: id}).subscribe();
  }

  approve(id: String, who: String, token : String) : void {
  	this.http.post(this.url+'songs/action', {action: "approve", id: id, who: who}, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}).subscribe();
  }

  nonApprove(id: String, who: String, token : String) : void {
  	this.http.post(this.url+'songs/action', {action: "nonApprove", id: id, who: who}, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}).subscribe();
  }

  disapprove(id: String, who: String, token : String) : void {
  	this.http.post(this.url+'songs/action', {action: "disapprove", id: id, who: who}, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}).subscribe();
  }

  nonDisapprove(id: String, who: String, token : String) : void {
  	this.http.post(this.url+'songs/action', {action: "nonDisapprove", id: id, who: who}, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}).subscribe();
  }

  getRemovalQueue(): any {
  	return this.http.get(this.url+'songs?status=4').toPromise().then(response => response).catch(err => err);
  }

  addToRemoval(id: String) : void {
  	this.http.post(this.url+'songs/action', {action: "addForDisapproval", id: id}).subscribe();
  }

  getPlaylist(): any {
  	return this.http.get(this.url+'songs?status=3').toPromise().then(response => {console.log(response);return response}).catch(err => err);
  }

  getApprovedSongs(): any {
  	return this.http.get(this.url+'songs?status=2').toPromise().then(response => {console.log(response);return response}).catch(err => err);
  }

  getRemovedSongs(): any {
  	return this.http.get(this.url+'songs?status=5').toPromise().then(response => {console.log(response);return response}).catch(err => err);
  }

}
