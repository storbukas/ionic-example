import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

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
    this.user = this.navParams.get('user');
  }

}
