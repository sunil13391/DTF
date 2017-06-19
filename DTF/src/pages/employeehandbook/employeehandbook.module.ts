import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeehandbookPage } from './employeehandbook';

@NgModule({
  declarations: [
    EmployeehandbookPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeehandbookPage),
  ],
  exports: [
    EmployeehandbookPage
  ]
})
export class EmployeehandbookPageModule {}
