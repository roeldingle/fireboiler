import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, ToastController, AlertController } from 'ionic-angular';

import { MemberDetailPage } from './detail/detail';
import { MemberCreatePage } from './create/create';
import { MemberEditPage } from './edit/edit';

import { FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the MemberPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {

	itemList: FirebaseListObservable<any[]>;
    newItem = '';

  constructor(
  	public navCtrl: NavController,
  	 public navParams: NavParams,
  	 public modalCtrl: ModalController,
  	 public loadingCtrl: LoadingController,
  	 private toast: ToastController,
     private alertCtrl: AlertController,
  	 public firebaseService: FirebaseServiceProvider
  	){

  	this.load();
  }

  async load(){

  	let loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
    loading.present();

    this.itemList = this.firebaseService.getItemList("members");

    this.itemList.subscribe(()=>{
    	loading.dismiss();
    });

  }

  /**
   * 
   */
  openItem(member) {
    this.navCtrl.push(MemberDetailPage, {
      item: member
    });
  }

  /**
   * 
   * 
   */
  addItem() {
    let addModal = this.modalCtrl.create(MemberCreatePage);

    addModal.onDidDismiss(item => {
      if (item) {
        this.firebaseService.addItem("members",{
            name: item.name,
            email: item.email,
            avatar: item.avatar,
            team: item.team,
          });
      }
    })
    addModal.present();

  }

  updateItem(member){
       let addModal = this.modalCtrl.create(MemberEditPage, {item: member});

      addModal.onDidDismiss(item => {
        if (item) {
          this.firebaseService.editItem("members",item.id,{
            name: item.name,
            email: item.email,
            avatar: item.avatar,
            team: item.team,
          });
        }
      })
      addModal.present();
  }


  /*delete*/
  removeItem(member){

    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure you want to permanently delete this member?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.firebaseService.removeItem("members",member);
          }
        }
      ]
    });
    alert.present();

    
  }




}
