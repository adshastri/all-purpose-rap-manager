import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(private http : HttpClient) { }

  login(password : String) : Promise<any> {
  	return this.http.post('/api/login', {pwd: password}).toPromise().then(response => response).catch(error => error);
  }

}
