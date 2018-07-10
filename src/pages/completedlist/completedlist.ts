import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-completedlist',
  templateUrl: 'completedlist.html',
})
export class CompletedlistPage {
todos:any;
completedtask:Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedlistPage');
    this.completedTodos();
  }
completedTodos(){
  this.todos= JSON.parse(localStorage.getItem('completedtask'));
  this.completedtask=this.todos;
}

}
