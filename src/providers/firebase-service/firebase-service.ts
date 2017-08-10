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

  getItemList(table){

  	return this.afd.list('/fireboiler/'+table);
  }

  addItem(table,item){

  	return this.afd.list('/fireboiler/'+table).push(item);
  }

  removeItem(table,item){

  	return this.afd.list('/fireboiler/'+table).remove(item);
  }

   updateItem(table,item, data){

    return this.afd.list('/fireboiler/'+table).update(item, data);
  }

}
