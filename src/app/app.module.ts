import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { GithubUserPage } from '../pages/github-user/github-user';

import { Helpers, Users, Errors } from '../providers';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    GithubUserPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [
    IonicApp,
  ],
  entryComponents: [
    MyApp,
    WelcomePage,
    GithubUserPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Helpers,
    Users,
    Errors,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
