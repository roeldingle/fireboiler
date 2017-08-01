import { Injectable } from '@angular/core';
import { IonicPage, AlertController, NavController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { WelcomePage } from '../../pages/welcome/welcome';

/*
  Generated class for the UtilitiesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UtilitiesProvider {

  constructor(public http: Http, public alertCtrl: AlertController, public navCtrl: NavController ) {
    console.log('Hello UtilitiesProvider Provider');
  }

  


}
