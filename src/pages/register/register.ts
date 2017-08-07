import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams, ToastController, AlertController  } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  async register(user: User){

    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
    loading.present();

  	try{
  		const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){
        let alert = this.alertCtrl.create({
          title: 'Registration',
          message: 'Registered successfully!',
          buttons: [
            {
              text: 'Close',
              role: 'close',
              handler: () => {
                loading.dismiss();
              }
            },
            {
              text: 'Log In',
              handler: () => {
                this.navCtrl.setRoot(HomePage);
                loading.dismiss();
              }
            }
          ]
        });
        alert.present();
      }

  	}catch(e){
      loading.dismiss();
      this.toastCtrl.create({
        message: `${e}`,
        duration: 3000
      }).present();
    }
  	
  }

}
