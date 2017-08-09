import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-member-create',
  templateUrl: 'create.html'
})
export class MemberCreatePage {
  // @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  // item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      avatar: [''],
      name: ['', Validators.required],
      email: ['']
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
