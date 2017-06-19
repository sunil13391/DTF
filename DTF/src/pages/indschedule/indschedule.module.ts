import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndschedulePage } from './indschedule';

@NgModule({
  declarations: [
    IndschedulePage,
  ],
  imports: [
    IonicPageModule.forChild(IndschedulePage),
  ],
  exports: [
    IndschedulePage
  ]
})
export class IndschedulePageModule {}
