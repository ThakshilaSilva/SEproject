import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  constructor() { }
  addUser(data) {         // insert user details
    return this.http.post('http://localhost:3000/add_new_user', JSON.stringify(data),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
}
