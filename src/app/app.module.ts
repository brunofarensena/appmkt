import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { List2Page } from '../pages/list2/list2';
import { List3Page } from '../pages/list3/list3';
import { ListInventarioPage } from '../pages/list-inventario/list-inventario';
import { ListsegurancaPage } from '../pages/listseguranca/listseguranca';
import { InfoInventoryPage } from '../pages/info-inventory/info-inventory';
import { InfoSecurityPage } from '../pages/info-security/info-security';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    List2Page,
    List3Page,
    ListInventarioPage,
    ListsegurancaPage,
    InfoInventoryPage,
    InfoSecurityPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    List2Page,
    List3Page,
    ListInventarioPage,
    ListsegurancaPage,
    InfoInventoryPage,
    InfoSecurityPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
