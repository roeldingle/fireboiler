import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController  } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    private toast: ToastController) {
  }

  async login(user: User){

    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    loading.present();

  	try{
  		const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  		if(result){
  			this.navCtrl.setRoot(HomePage);
        loading.dismiss();
  		}
  	}catch(e){
  		loading.dismiss();
      this.toast.create({
        message: `${e}`,
        duration: 3000
      }).present();
  	}

  }
  register(){
  	this.navCtrl.push(RegisterPage);
  }
}
