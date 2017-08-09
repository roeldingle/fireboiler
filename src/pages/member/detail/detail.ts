import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FirebaseServiceProvider} from '../../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-member-detail',
  templateUrl: 'detail.html'
})
export class MemberDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
    this.item = navParams.get('item');
  }

	

}
