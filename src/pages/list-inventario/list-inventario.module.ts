import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListInventarioPage } from './list-inventario';

@NgModule({
  declarations: [
    ListInventarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ListInventarioPage),
  ],
})
export class ListInventarioPageModule {}
