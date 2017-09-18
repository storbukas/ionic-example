import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-github-user',
  templateUrl: 'github-user.html'
})
export class GithubUserPage {
  user: any;

  constructor(
              private navParams: NavParams,
            ) {
    this.user = this.navParams.get('user');
  }

}
