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
   details:any;
  //toDoArray: any = [];
    items: any;
    public todoList: Array<string>;
    public name: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    
  }
  ionViewWillEnter(){
    this.todoList = JSON.parse(localStorage.getItem("pendinglist"));
    if(!this.todoList) {
        this.todoList = [];
    }
    this.name = "";
  }
  saveTask() {
    if(this.name!= "") {
        this.details = {Name:this.name};
        this.todoList.push(this.name);
        localStorage.setItem("pendinglist", JSON.stringify(this.todoList));
        this.navCtrl.push(PendinglistPage);
    }
    else{
      this.presentAlert();
    }
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



  
}
