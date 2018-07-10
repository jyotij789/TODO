import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-global',
  templateUrl: 'global.html',
})
export class GlobalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlobalPage');
  }

}
// export var global = {
//  Project_Array:[]
// };
