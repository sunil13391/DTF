import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController, ToastController} from 'ionic-angular';

import { NextpagePage } from '..//nextpage/nextpage';
// import {PeopleServiceProvider} from '../../providers/people-service/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
//  providers:  [PeopleServiceProvider]
  
})
export class HomePage {

  nextpage = NextpagePage;
  data: data;
//  posts : Post[];
//  posts1 : Postit[];

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

    this.data = {
      location: "abc",
      bus_slot: 123,
      bp: 456,
      dp: 789,
      trip_type: 1
    }
  }

  testFn() {
    console.log(this.data);
  }

  pushFn() {
    this.navCtrl.push(NextpagePage, this.data);
  }

}

interface data {
    location: string;
    bus_slot: number;
    bp: number;
    dp: number;
    trip_type: number;
}


  


// interface Post{
//   id : number;
//   title :string;
//   body: string;
// }



