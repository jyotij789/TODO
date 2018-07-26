import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PendinglistPage } from '../pendinglist/pendinglist';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-additems',
  templateUrl: 'additems.html',
})
export class AdditemsPage {
  details: any;
  items: any;
  public todoList: Array<{ status : number, Name: string }>;
  public name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

  }
  
  ionViewWillEnter() {
    this.todoList = JSON.parse(localStorage.getItem("todoslist"));
    if (!this.todoList) {
      this.todoList = [];
    }
    this.name = "";
  }
  saveTask() {
    if (this.name != "") {
      this.details = { status:0, Name:this.name };
      this.todoList.push(this.details);
      localStorage.setItem("todoslist", JSON.stringify(this.todoList));
      this.navCtrl.push(PendinglistPage);
    }
    else {
      this.presentAlert();
    }
  }

  ionViewDidLoad() {
    // this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Enter an item',
      subTitle: 'Item cannot be null',
      buttons: ['Ok']
    });
    alert.present();
  }




}
