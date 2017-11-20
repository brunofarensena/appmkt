import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListInventarioPage } from '../list-inventario/list-inventario';
import { ListsegurancaPage } from '../listseguranca/listseguranca';


/**
 * Generated class for the List3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list3',
  templateUrl: 'list3.html',
})
export class List3Page {

  inventoryPage = ListInventarioPage;
  securityPage = ListsegurancaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad List3Page');
  }

}
