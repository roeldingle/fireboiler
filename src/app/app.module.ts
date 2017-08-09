import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseServiceProvider} from '../providers/firebase-service/firebase-service';
import firebase from 'firebase';

import { FIREBASE_CONFIG } from './app.firebase.config';


import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';

import { MemberPage } from '../pages/member/member';
import { MemberCreatePage } from '../pages/member/create/create';
import { MemberDetailPage } from '../pages/member/detail/detail';

import { ListPage } from '../pages/list/list';
import { UtilitiesProvider } from '../providers/utilities/utilities';



@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    HomePage,

    MemberPage,
    MemberDetailPage,
    MemberCreatePage,

    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    HomePage,

    MemberPage,
    MemberDetailPage,
    MemberCreatePage,

    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilitiesProvider,
    FirebaseServiceProvider
  ]
})
export class AppModule {}
