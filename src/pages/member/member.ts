import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';

import { MemberDetailPage } from './detail/detail';
import { MemberCreatePage } from './create/create';

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
  	 public firebaseService: FirebaseServiceProvider
  	){

  	this.load();
  }

  load(){
  	let loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    loading.present();

    this.itemList = this.firebaseService.getItemList();
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
        this.firebaseService.addItem(item);
      }
    })
    addModal.present();

  }

  removeItem(member){
		this.firebaseService.removeItem(member);
	}

}
