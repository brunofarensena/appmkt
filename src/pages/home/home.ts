import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list';
import { List2Page } from '../list2/list2';
import { List3Page } from '../list3/list3';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  securityPage = ListPage;
  inventoryPage = List2Page;

  constructor(public navCtrl: NavController) {

  }

}
