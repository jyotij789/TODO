import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AdditemsPage} from '../pages/additems/additems'
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PendinglistPage } from '../pages/pendinglist/pendinglist';
import { CompletedlistPage } from '../pages/completedlist/completedlist';
import { MapPage } from '../pages/map/map';

@NgModule({
  declarations: [
    MyApp,
    AdditemsPage,
    PendinglistPage,
    CompletedlistPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AdditemsPage,
    PendinglistPage,
    CompletedlistPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
