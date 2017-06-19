import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PocPage } from './poc';

@NgModule({
  declarations: [
    PocPage,
  ],
  imports: [
    IonicPageModule.forChild(PocPage),
  ],
  exports: [
    PocPage
  ]
})
export class PocPageModule {}
