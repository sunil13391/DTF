import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IndschedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-indschedule',
  templateUrl: 'indschedule.html',
})
export class IndschedulePage {
items = [
    'Mastek Anthem',
    'Who we are about mastek',
    'Know your HR',
    'Working @ mastek',
    'Mastekeers connect',
     'Know your project',
      'Information Security',
       'Get To know Finance policies',
        'Operational excellence',
         'Facilities & Logistics',
         'Learning & Devlopments',
         'TIS & IIS'
 
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndschedulePage');
  }

}
