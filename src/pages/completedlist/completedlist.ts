import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-completedlist',
  templateUrl: 'completedlist.html',
})
export class CompletedlistPage {
  todos: any;
  completedtodo:any;
  i: any;
  j: any;
  public result: any;
  public items: Array<{ status: number, Name: string }>;
  public completedTodos: Array<{ status: number, Name: string }>;
  public Todos: Array<{ status: number, Name: string }>;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.getCompletedTodos();
  }
  getCompletedTodos() {
    this.items = JSON.parse(localStorage.getItem('todoslist'));
    console.log(this.items);
    this.completedtodo = this.items.filter(item => {
      return item.status == 1;
    });
    this.completedTodos = this.completedtodo;
    console.log(this.completedTodos);
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Single completed item can not be deleted!',
      buttons: ['Ok']
    });
    alert.present();
  }
  clearTodos($event,completedTodos) {
    console.log(this.completedTodos.length);
    console.log(completedTodos);
    if (this.completedTodos.length == 1) {
      this.presentAlert();
    }
    else{
      this.Todos=JSON.parse(localStorage.getItem('todoslist'));
      console.log(this.Todos);
      for(this.j=0; this.j<this.Todos.length; this.j++){ 
      if(this.Todos[this.j].status == 1){
        {
          this.Todos[this.j].status = 3;
          console.log(this.Todos[this.j].status);

        }
      }
    }
    // else{
    //   localStorage.setItem("todoslist", JSON.stringify(this.Todos));
    //   this.navCtrl.setRoot(this.navCtrl.getActive().component);
    // }
      localStorage.setItem("todoslist", JSON.stringify(this.Todos));
      this.navCtrl.setRoot(this.navCtrl.getActive().component);

    }
  }
}
