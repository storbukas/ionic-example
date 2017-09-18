import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { Users, Errors } from '../../providers'
import { GithubUserPage } from '../github-user/github-user';

import 'rxjs/add/operator/finally';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  username: any;

  constructor(
              private navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private users: Users,
              private errors: Errors,
            ) { }

  public searchGithubUsername(): void {
    let loader = this.loadingCtrl.create({
     content: 'Please wait...',
    });

    loader.present();

    this.users.query(this.username)
              .finally(() => loader.dismiss())
              .subscribe(
                user => {
                  this.navCtrl.push(
                    GithubUserPage, {
                    user: user
                  });
                },
                error => {
                  this.errors
                      .showError(
                        'Could not find user: ' + this.username
                      )
                }
              );
  }
}
