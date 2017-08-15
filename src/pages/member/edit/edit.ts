import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { NavController, ViewController, NavParams  } from 'ionic-angular';


@Component({
  selector: 'page-member-edit',
  templateUrl: 'edit.html'
})
export class MemberEditPage {
  // @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;
  item: any;
  form: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController, 
    navParams: NavParams, 
    formBuilder: FormBuilder
    ){

    this.item = navParams.get('item');

    this.form = formBuilder.group({
      id: [this.item.$key],
      avatar: [this.item.avatar],
      name: [this.item.name, Validators.required],
      email: [this.item.email],
      team: [this.item.team]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  // /**
  //  * The user is done and wants to create the item, so return it
  //  * back to the presenter.
  //  */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }



}
