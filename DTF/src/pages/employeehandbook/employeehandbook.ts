import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SuperTabsController } from 'ionic2-super-tabs';


/**
 * Generated class for the EmployeehandbookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-employeehandbook',
  templateUrl: 'employeehandbook.html',
})
export class EmployeehandbookPage {

  page1: any = 'MastekinfoPage';
  page2: any = 'PocPage';
  page3: any = 'IndschedulePage';
  page4: any = 'OrgchartPage';
 constructor(private superTabsCtrl: SuperTabsController) { }
  
 
  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }
  
  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }
  
  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeehandbookPage');
  }

}
