import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MastekinfoPage } from './mastekinfo';

@NgModule({
  declarations: [
    MastekinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MastekinfoPage),
  ],
  exports: [
    MastekinfoPage
  ]
})
export class MastekinfoPageModule {}
