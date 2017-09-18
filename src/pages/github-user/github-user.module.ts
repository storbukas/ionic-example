import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { GithubUserPage } from './github-user';

@NgModule({
  declarations: [
    GithubUserPage,
  ],
  imports: [
    IonicPageModule.forChild(GithubUserPage),
  ],
  exports: [
    GithubUserPage,
  ]
})
export class GithubUserPageModule { }
