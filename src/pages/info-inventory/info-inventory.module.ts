import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoInventoryPage } from './info-inventory';

@NgModule({
  declarations: [
    InfoInventoryPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoInventoryPage),
  ],
})
export class InfoInventoryPageModule {}
