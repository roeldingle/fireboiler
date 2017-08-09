import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) {}

  getItemList(){

  	return this.afd.list('/users');
  }

  addItem(item){

  	return this.afd.list('/users').push(item);
  }

  removeItem(item){

  	return this.afd.list('/users').remove(item);
  }

}
