import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NextpagePage } from './nextpage';

@NgModule({
  declarations: [
    NextpagePage,
  ],
  imports: [
    IonicPageModule.forChild(NextpagePage),
  ],
  exports: [
    NextpagePage
  ]
})
export class NextpagePageModule {}
