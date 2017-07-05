import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { ToastController, ViewController } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-nextpage',
  templateUrl: 'nextpage.html',
})
export class NextpagePage {

  REG_FLAG: boolean;
  STAR_FLAG: boolean;
  MONTH_FLAG: boolean;
  
  board_point: string;
  drop_point: string;
  trip_type: number;
  period_label: string;
  full_date: string;

  bus_slot: string;
  bus_stop: string;
  charges: number;
  timing: string;
  
  contact_num: string;
  num_trips: number;
  full_stars: number[];
  empty_stars: number[];

  constructor(public navCtrl: NavController, public alerCtrl: AlertController, public toastCtrl: ToastController, private call: CallNumber, public navParams: NavParams, public viewCtrl : ViewController) 
  { 
      this.REG_FLAG = false;
      this.STAR_FLAG = false;
      this.MONTH_FLAG = false;

      this.period_label = "Date / Month"
      this.full_date = "Undefined date";
      this.bus_slot = "Morning: 7am";
      this.bus_stop = "Seepz";
      this.board_point = "dsgs";
      this.drop_point = "sfghdas";
      this.charges = 80;
      this.timing = "7:45";
      this.contact_num = "+918286204401";
      
      this.num_trips = 2;
      this.full_stars = Array.apply(null, {length: this.num_trips}).map(Number.call, Number);
      this.empty_stars = Array.apply(null, {length: (4 - this.num_trips)}).map(Number.call, Number);
  }

  confirmBus() {
    var reg = document.getElementById('RegButton');
    var msg = "temp";
    if(!this.REG_FLAG)
    {
      msg = "Do you want to confirm your bus registration?";
    }
    else
    {
      msg = "Do you want to cancel your bus registration?";
    }

    let confirm = this.alerCtrl.create({
      title: 'Are you sure?',
      message: msg,
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            if(!this.REG_FLAG)
            {
              let toast = this.toastCtrl.create({
                message: 'You have registered successfully',
                duration: 2000,
                position: 'middle',
                cssClass: "ClassName"
              });
              toast.present(toast);
              reg.innerHTML = "Cancel registration";
              reg.style.backgroundColor = "#f53d3d",
              reg.style.width = "75%"
              this.REG_FLAG = true;
            }
            else
            {
              let toast = this.toastCtrl.create({
                message: 'You have cancelled your registration',
                duration: 2000,
                position: 'middle'
              });
              toast.present(toast);
              reg.innerHTML = "Register";
              reg.style.backgroundColor = "#488aff"
              this.REG_FLAG = false;
            }
            //document.getElementById("RegButton").setAttribute("color", "danger");
          }
        }
      ]
    });
    confirm.present()
  }

  /* async callNumber():Promise<any> {
    try {
      await this.call.callNumber(this.contact_num, true);
    }
    catch(e)
    {
      console.error(e);
    }
  } */

  callNumber()
  {
    //this.contact_num = encodeURIComponent(this.contact_num);
    window.location.href="tel:"+this.contact_num;

  }

  ionViewDidLoad() {
    
    this.trip_type = this.navParams.get('trip_type');
    this.full_date = this.navParams.get('date');
    if(this.trip_type == 1)
    {
      this.bus_slot = this.navParams.get('bus_slot');
      this.charges = 85;
      this.STAR_FLAG = true;
      this.period_label = "Date";
    }
    else if(this.trip_type == 2)
    {
      this.bus_slot = this.navParams.get('in_time');
      this.charges = 2400;
      this.STAR_FLAG = false;
      this.period_label = "Month starting from";
      document.getElementById('callbtn').classList.add("call-button-alone");
    }

    var hrs = this.bus_slot;  
    if(hrs.charAt(5) == 'A')
    {
      hrs = hrs.substr(0, 5);
    }
    else if(hrs.charAt(1) == '5')
    {
      hrs = "17:45";
    }
    else if(hrs.charAt(1) == '7')
    {
      hrs = "19:10";
    }
    else if(hrs.charAt(1) == '8')
    {
      hrs = "20:30";
    }

    if(this.trip_type == 1)
    {
      var the_date = new Date();
      var current_date = the_date.getDate() + "/" + (the_date.getMonth()+1) + "/" + the_date.getFullYear();
      var current_time = "";
      if(the_date.getHours() < 10)
      {
        current_time = "0" + the_date.getHours() + ":";
      }
      else
      {
        current_time = the_date.getHours() + ":";
      }
      if(the_date.getMinutes() < 10)
      {
        current_time = "0" + the_date.getMinutes();
      }
      else
      {
        current_time = current_time + the_date.getMinutes();
      }

      console.log(this.full_date);
      console.log(current_date);
      console.log(hrs);
      console.log(current_time);

      if(this.full_date === current_date && hrs < current_time)
      {
        //this.REG_BUTTON_FLAG = true;
        document.getElementById("RegButton").setAttribute("disabled","disabled");
        console.log("disable runs");
      }
      else
      {
        console.log("enable runs");
      }
    }

    
    this.board_point = this.navParams.get('bp');
    this.drop_point = this.navParams.get('dp');
    this.bus_stop = this.navParams.get('busstop');
    
    //console.log(this.bus_stop);

  }

}
