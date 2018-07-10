import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AdditemsPage } from '../additems/additems';
import { ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration'


@Component({
  selector: 'page-pendinglist',
  templateUrl: 'pendinglist.html',
})
export class PendinglistPage {
  name: string;
  i: any;
  public result: any;
  items: any;
  updateitems: any;
  public results:any;
  public completetask: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private vibration: Vibration,
    private toastCtrl: ToastController, public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PendinglistPage');
    this.getTodoList();
  }
  getTodoList() {
    this.items = JSON.parse(localStorage.getItem('pendinglist'));
    this.results = this.items;
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Task completed successfully',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Clear Completelist',
      subTitle: 'All tasks are completed',
      buttons: ['Ok']
    });
    alert.present();
  }
  vibrate(){
    this.vibration.vibrate(2000);
  }
  presentConfirm($event, result) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Do you want to detete this item?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',

          handler: () => {
            for (this.i = 0; this.i < this.results.length; this.i++) {
              if (this.results[this.i] == result) {
                this.results.splice(this.i, 1);
                this.updateitems = this.results;
                localStorage.setItem("pendinglist", JSON.stringify(this.updateitems));
              }

            }
          }
        }
      ]
    });
    alert.present();
  }
  ionViwDidLoad() {
     }
  completeTask($event, result) {
    console.log(this.results.length);
    this.vibrate();
    if(this.results.length== 1)
    {
      this.presentAlert();
    }
    var completedtasks=[];
    completedtasks = JSON.parse(localStorage.getItem("completedtask"));
    if (!completedtasks) {
      completedtasks=[];
      completedtasks.push(result);
      localStorage.setItem("completedtask", JSON.stringify(completedtasks));
      for (this.i = 0; this.i < this.results.length; this.i++) {
        if (this.results[this.i] == result) {
          this.results.splice(this.i, 1);
          localStorage.setItem("pendinglist", JSON.stringify(this.results));
        }
      }
    }
    else{
    completedtasks = JSON.parse(localStorage.getItem("completedtask"));
    for (this.i = 0; this.i < this.results.length; this.i++) {
      if (this.results[this.i] == result) {
        this.results.splice(this.i, 1);
        this.completetask=result;
       completedtasks.push(this.completetask);
        localStorage.setItem("completedtask", JSON.stringify(completedtasks));
        localStorage.setItem("pendinglist", JSON.stringify(this.results));

      }
    }
    }

  }
}
