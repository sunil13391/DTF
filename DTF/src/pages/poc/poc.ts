import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JsondataProvider } from '../../providers/jsondata/jsondata';

/**
 * Generated class for the PocPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-poc',
  templateUrl: 'poc.html',
  providers: [JsondataProvider]
})
export class PocPage {

  constructor(public navCtrl: NavController,public jsonservice:JsondataProvider) {
    this.loadPeople();
  }

loadPeople(){
    this.jsonservice.getData()
  }
 
  }


