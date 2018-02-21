import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  public login(username, password) {
    // return this.http.get<any>('http://localhost:3000/get_users').map(response => response);
    // return this.http.get<any>('http://localhost:3000/get_users').map(response => response);
    return this.http.post('http://localhost:3000/search_users', {form: {'username': username, 'password': password}}).map(res => res);
  }
}
