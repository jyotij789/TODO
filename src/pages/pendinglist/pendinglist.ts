import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pendinglist',
  templateUrl: 'pendinglist.html',
})
export class PendinglistPage {
name:string;
i:any;
result:any;
items:any =[];
results:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PendinglistPage');
    this.getItemList();

  }


  presentAlert() {
    let alert = this.alertCtrl.create({
    title: 'Enter an item',
    subTitle: 'Item list is empty',
    buttons: ['Ok']
    });
      alert.present();
  }


  getItemList()
  {    
    if(localStorage.getItem('todolist')!= null)
    {
      this.items = JSON.parse(localStorage.getItem('todolist')); 
      this.results = this.items;
    }
    else
      {
        this.presentAlert();
      }    
  }

 presentConfirm($event,result) {
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
                handler: () => {
                  for(this.i=0; this.i < this.results.length; this.i++)
                    {
                        if(this.results[this.i] == result)
                            {
                              this.results.splice(this.i,1);
                            }

                      }
                }
            }
          ]
  });
  alert.present();
}
}
