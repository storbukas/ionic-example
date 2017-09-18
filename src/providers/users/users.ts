import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../../models';

@Injectable()
export class Users {
  constructor(
              private http: Http,
            ) { }

  public query(username: any): Observable<User> {
    username.toLowerCase();

    return this.http.get('https://api.github.com/users/' + username)
             .map(
               response => {
                 response = response.json();

                 return new User(response);
               }
             )
  }

}
