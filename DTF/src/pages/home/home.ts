import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController, ToastController} from 'ionic-angular';

import { NextpagePage } from '..//nextpage/nextpage';

import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
//  providers:  [PeopleServiceProvider]
  
})
export class HomePage {

  nextpage = NextpagePage;
  contact_num: string;
  data: data;
//  posts : Post[];
//  posts1 : Postit[];

  get dates()
  {
    return new Date().getUTCDate();
  }
  
  get month()
  {
    var names = ["January", "February","March","April","May","June","July","August","September","October","November","December"];
    return names[new Date().getUTCMonth()];
  }
  // get year()
  // {
  //   return new Date().getUTCFullYear();
  // }
  

   constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,public toastCtrl: ToastController, private call: CallNumber) {
  
    // this.postsService.getposts().subscribe(posts => {
    //   this.posts=posts;

    this.contact_num = "+918286204401";
    this.data = {
      location: "abc",
      bus_slot: 123,
      bp: 456,
      dp: 789,
      date: 0,
      trip_type: 1
    }
  }

  async callNumber():Promise<any> {
    try {
      await this.call.callNumber(this.contact_num, true);
    }
    catch(e)
    {
      console.error(e);
    }
  }

  dateSelect(n)
  {
    var date1 = document.getElementById('date1');
    var date2 = document.getElementById('date2');
    var date3 = document.getElementById('date3');
    if(n==1)
    {
      date1.style.backgroundColor = "black";
      date1.style.color = "white";

      date2.style.backgroundColor = "white";
      date2.style.color = "black";
      date3.style.backgroundColor = "white";
      date3.style.color = "black";
    }
    else if(n==2)
    {
      date2.style.backgroundColor = "black";
      date2.style.color = "white";

      date1.style.backgroundColor = "white";
      date1.style.color = "black";
      date3.style.backgroundColor = "white";
      date3.style.color = "black";
    }
    else if(n==3)
    {
      date3.style.backgroundColor = "black";
      date3.style.color = "white";

      date1.style.backgroundColor = "white";
      date1.style.color = "black";
      date2.style.backgroundColor = "white";
      date2.style.color = "black";
    }

    this.data.date = (new Date().getUTCDate()) + n - 1;
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
    date: number;
    trip_type: number;
}


  


// interface Post{
//   id : number;
//   title :string;
//   body: string;
// }



