import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration'
import { LocalNotifications } from '@ionic-native/local-notifications';
import { CompletedlistPage } from '../completedlist/completedlist'

@Component({
    selector: 'page-pendinglist',
    templateUrl: 'pendinglist.html',
})
export class PendinglistPage {
    name: string;
    i: any;
    public result: any;
    public items: Array<{ status: number, Name: string }>;
    public todos: Array<{ status: number, Name: string }>;
    public gettodos: Array<{ status: number, Name: string }>;

    updateitems: Array<{ status: number, Name: string }>;
    public results: Array<{ status: number, Name: string }>;
    public completetask: any;
    public todoname: any;
    public completedtasks: (number | string)[];

    pendingtodos: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration,
        private toastCtrl: ToastController, public alertCtrl: AlertController, private localNotifications: LocalNotifications) {
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PendinglistPage');

    }
    ionViewWillEnter() {
        this.getTodoList();
    }
    getTodoList() {
        this.items = JSON.parse(localStorage.getItem('todoslist'));
        if (this.items != null || this.items != undefined) {
            this.pendingtodos = this.items.filter(item => {
                return item.status == 0
            });
            this.results = this.pendingtodos;
        }
    }
    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Task completed successfully',
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    }
    clearTodosAlert() {
        let alert = this.alertCtrl.create({
            title: 'Clear Completelist',
            subTitle: 'All tasks are completed',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        this.navCtrl.push(CompletedlistPage);
                    }
                }
            ]
        });
        alert.present();
    }
    vibrate() {
        this.vibration.vibrate(5000);
        console.log('vibrtaion');
    }
    presentConfirm($event, result) {
        let alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Do you want to detete this item?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.gettodos = JSON.parse(localStorage.getItem('todoslist'));
                        for (this.i = 0; this.i < this.gettodos.length; this.i++) {
                            if (this.gettodos[this.i].Name == result.Name) {
                                this.gettodos[this.i].status = 2;
                            }
                        }
                        localStorage.setItem("todoslist", JSON.stringify(this.gettodos));
                        this.navCtrl.setRoot(this.navCtrl.getActive().component);
                        return this.notification();
                    }
                }
            ]
        });
        alert.present();
    }

    notification() {
        console.log("notification");
        this.localNotifications.schedule({
            id: 1,
            text: 'Task is deleted',
            sound: 'file:www//assets//audio/notification.wav',
            data: {
                is: 1,
                name: 'Task deleted'
            }
        });

    }

    completeTask($event, result) {
        this.todos = JSON.parse(localStorage.getItem('todoslist'));
        for (this.i = 0; this.i < this.todos.length; this.i++) {
            if (this.todos[this.i].Name == result.Name) {
                this.todos[this.i].status = 1;

            }
        }
        if (this.results.length == 1) {
            this.clearTodosAlert();
        }
        localStorage.setItem("todoslist", JSON.stringify(this.todos));
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        return this.vibrate();
    }
}
