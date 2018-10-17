import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdditemsPage } from '../pages/additems/additems';
import { PendinglistPage } from '../pages/pendinglist/pendinglist';
import { CompletedlistPage } from '../pages/completedlist/completedlist';
import { MapPage } from '../pages/map/map';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = AdditemsPage;

    pages: Array<{ title: string, component: any }>;

    constructor(private push: Push, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();


    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.splashScreen.hide();
            this.getPushNotification();

        });
    }
    getPushNotification() {
        const options: PushOptions = {
            android: {
                senderID: '950656858128',
                sound: true,
                vibrate: true
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            }
        };

        const pushObject: PushObject = this.push.init(options);


        pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

        pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    }
    // openPage(page) {
    //   // Reset the content nav to have just this page
    //   // we wouldn't want the back button to show in this scenario
    //   this.nav.setRoot(page.component);
    // }
    openHome() {
        this.nav.setRoot(AdditemsPage);

    }
    openPnd() {
        this.nav.setRoot(PendinglistPage);
    }
    openCmp() {
        this.nav.setRoot(CompletedlistPage);
    }
    openMap() {
        this.nav.push(MapPage);
    }
}
