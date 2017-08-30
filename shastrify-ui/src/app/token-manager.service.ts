import { Injectable } from '@angular/core';

@Injectable()
export class TokenManagerService {

  constructor() { }


	public store(content : string, who: string, status: string) {
	    localStorage.setItem("token", content);
	    localStorage.setItem("time", Date.now()+'');
	    localStorage.setItem("who", who);
	    localStorage.setItem("status", status);
	}

	public retrieveToken() {

	    let currentTime = Date.now;
	    let tokenTime = parseInt(localStorage.getItem("time"));
	    if (Date.now() - tokenTime > 3599900) {
	    	return null;
	    } else {
	    	return localStorage.getItem("token");
	    }
	}

	public retrieveMe() {
		return localStorage.getItem("who");
	}

	public retrieveStatus() {
		return localStorage.getItem("status");
	}

}
