import { Component } from '@angular/core';
import {  NavController, NavParams , ViewController, ToastController} from 'ionic-angular';

import { NextpagePage } from '..//nextpage/nextpage';
// import {PeopleServiceProvider} from '../../providers/people-service/people-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  nextpage = NextpagePage;
  POINT_FLAG: boolean;
  data: data;

  get dates()
  {
    return new Date().getUTCDate();
  }
  
  get month()
  {
    var names = ["January", "February","March","April","May","June","July","August","September","October","November","December"]
    return names[new Date().getUTCMonth()];
  }

   constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,public toastCtrl: ToastController) {
  
    // this.postsService.getposts().subscribe(posts => {
    //   this.posts=posts;

    this.POINT_FLAG = true;
    this.data = {
      location: "none",
      bus_slot: 0,
      bp: 0,
      dp: 0,
      trip_type: 2
    }
  }

  mainValidation()
  {
    this.data.bp = 0;
    this.data.dp = 0;
    if(this.data.location === "none" || this.data.bus_slot == 0)
    {
      this.POINT_FLAG = true;
    }
    else
    {
      this.POINT_FLAG = false;
    }
  }
  
  testFn() {
    console.log(this.data);
  }

  pushFn() {
    var msg = "Please choose";
    if(this.data.location === "none")
    {
      msg = msg + " location";
    }
    if(this.data.bus_slot == 0)
    {
      msg = msg + " bus-slot";
    }
    if(this.data.bp == 0)
    {
      msg = msg + " boarding-point";
    }
    if(this.data.dp == 0)
    {
      msg = msg + " drop-point";
    }

    if(msg === "Please choose")
    {
      this.navCtrl.push(NextpagePage, this.data);
    }
    else
    {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'middle'
      });
      toast.present(toast);
    }
    
  }

}

interface data {
    location: string;
    bus_slot: number;
    bp: number;
    dp: number;
    trip_type: number;
}
