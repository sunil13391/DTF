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
  
  bus_slot_no: number;
  board_point: string;
  drop_point: string;
  trip_type: number;
  period_label: string;
  full_date: string;

  bus_slot: string;
  bus_stop: string;
  date: number;
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
<<<<<<< HEAD
      this.MONTH_FLAG = false;
      
=======

      this.period_label = "Date / Month"
      this.full_date = "Undefined date";
>>>>>>> 43427c616461ce6405bbc1481ab73143e6f88032
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

  async callNumber():Promise<any> {
    try {
      await this.call.callNumber(this.contact_num, true);
    }
    catch(e)
    {
      console.error(e);
    }
  }

  ionViewDidLoad() {
    var hrs = 0;
    // var mins = 0;
    
    this.bus_slot_no = this.navParams.get('bus_slot');
    if(this.bus_slot_no == 1)
    {
      this.bus_slot = "Morning/8:30AM";
      hrs = 7;
    }
    else if(this.bus_slot_no == 2)
    {
      this.bus_slot = "Morning/10:00AM";
      hrs = 8;
    }
    else if(this.bus_slot_no == 3)
    {
      this.bus_slot = "Evening/5:45PM";
      hrs = 6;
    }  
    else if(this.bus_slot_no == 4)
    {
      this.bus_slot = "Evening/7:10PM";
      hrs = 8;
    }  
    else if(this.bus_slot_no == 5)
    {
      this.bus_slot = "Evening/8:30PM";
      hrs = 9;
    }  

    this.board_point = this.navParams.get('bp');
    this.drop_point = this.navParams.get('dp');

    if(this.board_point === "Mahape" || this.board_point === "Pune" || this.board_point === "Seepz")
    {
      this.bus_stop = this.drop_point;
    }
    else
    {
      this.bus_stop = this.board_point;
    }

    var call = document.getElementById('call-button');
    this.trip_type = this.navParams.get('trip_type');
    this.date = this.navParams.get('date');
    if(this.trip_type == 1)
    {
      this.charges = 85;
      this.STAR_FLAG = true;
      this.period_label = "Date";
      this.full_date = this.date + "/" + ((new Date().getUTCMonth())+1) + "/" + (new Date().getFullYear());
    }
    else if(this.trip_type == 2)
    {
      this.charges = 2400;
      this.STAR_FLAG = false;
      this.period_label = "Month";
      var names = ["January", "February","March","April","May","June","July","August","September","October","November","December"];
      this.full_date = names[new Date().getUTCMonth()] + " " + (new Date().getFullYear());
      call.classList.add("call-button-alone");
    }

    
    
    //console.log(this.bus_stop);

  }

}
