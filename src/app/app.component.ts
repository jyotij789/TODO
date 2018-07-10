import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AdditemsPage } from '../pages/additems/additems';
import { PendinglistPage } from '../pages/pendinglist/pendinglist';
import { CompletedlistPage } from '../pages/completedlist/completedlist';
import { MapPage } from '../pages/map/map';
import { GlobalPage} from '../pages/global/global'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AdditemsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages=[
    //   {title:'Home', component:FirstpagePage},
    //   {title:'Pending Items', component:PendinglistPage},
    //   {title:'Completed Items', component:CompletedlistPage},
    //   {title:'Map', component:MapPage}
    // ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  // }
openHome(){
    this.nav.push(AdditemsPage);
}
openPnd(){
  this.nav.push(PendinglistPage);
}
openCmp(){
  this.nav.push(CompletedlistPage);
}
openMap(){
  this.nav.push(MapPage);
}
}
