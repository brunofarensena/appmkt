import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoSecurityPage } from '../info-security/info-security';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  securityPage = InfoSecurityPage;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


}
