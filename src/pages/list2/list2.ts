import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoInventoryPage } from '../info-inventory/info-inventory';

@IonicPage()
@Component({
  selector: 'page-list2',
  templateUrl: 'list2.html',
})
export class List2Page {

    infoInventory = InfoInventoryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }


}
