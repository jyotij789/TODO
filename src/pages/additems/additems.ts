import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PendinglistPage } from '../pendinglist/pendinglist';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-additems',
  templateUrl: 'additems.html',
})
export class AdditemsPage {
  name;
  details;
  //toDoArray: any = [];
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemsPage');
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Enter an item',
      subTitle: 'Item cannot be null',
      buttons: ['Ok']
    });
    alert.present();
  }
  onButtonClick() {
    if (this.name == '' || this.name == null) {
      this.presentAlert();
    }
    else {
      this.details = { Name: this.name };
      var toDoArray=[];
      
      if(localStorage.getItem('todolist')==null) {
        toDoArray.push(this.details);
        localStorage.setItem('todolist', JSON.stringify(toDoArray));
      }
      else {
        this.items = JSON.parse(localStorage.getItem('todolist'));
        console.log(this.items);
        toDoArray.push(this.items);
        toDoArray.push(this.details);
        localStorage.setItem('todolist', JSON.stringify(toDoArray))
      }
      this.navCtrl.push(PendinglistPage);
    }
  }
  
}
