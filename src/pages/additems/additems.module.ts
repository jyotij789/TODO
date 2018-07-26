import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdditemsPage } from './additems';
// import { Vibration } from '@ionic-native/vibration';

@NgModule({
  declarations: [
    AdditemsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdditemsPage),
  ],
})
export class AdditemsPageModule {}
