import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { UtilitiesProvider } from '../../providers/utilities/utilities';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController) {

  }

   ionViewWillLoad(){
  	this.afAuth.authState.subscribe(data => {
  		this.toast.create({
  			message: `Welcome, ${data.email}`,
  			duration: 3000
  		}).present();
  	});
  }

}
