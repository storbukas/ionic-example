import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { Helpers } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-github-user',
  templateUrl: 'github-user.html'
})
export class GithubUserPage {
  user: any;

  constructor(
              private navParams: NavParams,
            ) {
    this.user = navParams.get('user');

    this.user.following = Helpers.numberFormatter(this.user.following);
    this.user.followers = Helpers.numberFormatter(this.user.followers);
  }

}
