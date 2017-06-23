import { Component } from '@angular/core';
import {  NavController, NavParams , ViewController, ToastController} from 'ionic-angular';

import { NextpagePage } from '..//nextpage/nextpage';
import { Platform } from 'ionic-angular';

import { DatePicker } from '@ionic-native/date-picker';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  OUTTIME_FLAG: boolean;

  BPOINT_FLAG: boolean;
  DPOINT_FLAG: boolean;
  SLOT_FLAG: boolean;
  BSTOP_FLAG: boolean;
  
  nextpage = NextpagePage;

  mAreas: string[];
  pAreas: string[];
  endAreas: string[];
  bplaces: string[];
  dplaces: string[];
  mBStops: string[];
  bstops: string[];
  pBStops: string[];
  data: data;

  get dates()
  {
    return new Date().getUTCDate();
  }
  
  get month()
  {
    var names = ["January", "February","March","April","May","June","July","August","September","October","November","December"];
    return names[new Date().getUTCMonth()];
  }

   constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,public toastCtrl: ToastController, private datePicker: DatePicker, public plt: Platform) {
  
    // this.postsService.getposts().subscribe(posts => {
    //   this.posts=posts;

    this.BPOINT_FLAG = true;
    this.DPOINT_FLAG = true;
    this.SLOT_FLAG = true;
    

    this.mAreas = ['Ghatkopar', 'Vikhroli', 'Kandivali', 'Bhandup', 'Andheri'];
    this.pAreas = ['Pimpri', 'Chinchwad', 'Gauri Mata', 'Bhosari', 'Nehru Chowk'];
    this.endAreas = ['Mahape', 'Seepz', 'Pune'];
    this.mBStops = ['Ghatkopar Bus Depot', 'Kannamvar Nagar', 'KanjurMarg Village','Bhandup Village','Godrej Company'];
    this.pBStops = ['idk1','idk2','idk3','idk4']; 
 
    this.data = {
      location: "none",
      bus_slot: 0,
      out_time: 0,
      bp: "",
      date: "",
      trip_type: 2,
      busstop: ""
    }
  }
  mainValidation(n)
  {
    if(n==1)
    {
      this.data.bp = "";
       this.data.busstop="";
      this.data.bus_slot = 0;
      if(this.data.location === "none" || this.data.bus_slot == 0)
      {
        this.BPOINT_FLAG = true;
        this.DPOINT_FLAG = true;
        this.BSTOP_FLAG = true;
      }
      else
      {
        this.BPOINT_FLAG = false;
        this.DPOINT_FLAG = false;
        this.BSTOP_FLAG = false;
      }
    }
    else if(n==2)
    {
      if (this.data.bus_slot <=2 && this.data.bus_slot != 0)
      {
        if(this.data.location === "Mahape" || this.data.location === "Seepz")
        {
          this.bplaces = this.mAreas;
        }
        else if(this.data.location === "Pune")
        {
          this.bplaces = this.pAreas;
        }
        this.dplaces = this.endAreas;
        this.BPOINT_FLAG = false;
        this.DPOINT_FLAG = true;
        this.OUTTIME_FLAG = true;
        this.BSTOP_FLAG = true;
        this.data.busstop="";
    }
    }
    else if(n==3)
    {
      //this.data.bp = this.data.location;
      if (this.data.bus_slot <= 2 && this.data.bus_slot != 0)
      {
       if(this.data.location === "Mahape" || this.data.location === "Seepz")
        {
          this.bstops = this.mBStops;
        }
        else if(this.data.location === "Pune")
        {
          this.bstops = this.pBStops;
        }
       this.BSTOP_FLAG = false;
      }  
    }
    else if(n==4)
    {
      //   if (this.data.bus_slot <= 2 && this.data.bus_slot != 0)
      // {
      //  if(this.data.location === "Mahape" || this.data.location === "Seepz")
      //   {
      //     this.bstops = this.mBStops;
      //   }
      //   else if(this.data.location === "Pune")
      //   {
      //     this.bstops = this.pBStops;
      //   }
        
      // }  
      
         if(this.data.busstop !== "")
           this.OUTTIME_FLAG = false;      
       
     
    }
    
  }

  selectDate()
  {
    var maximumDate = new Date();
    maximumDate.setMonth(maximumDate.getMonth() + 1);

    var minimumDate = this.plt.is('ios') ? new Date() : (new Date()).valueOf();
    var maximumDate2 = this.plt.is('ios') ? maximumDate : (maximumDate).valueOf();
    
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      minDate: minimumDate,
      maxDate: maximumDate2
    }).then(
      date => {
        let toast = this.toastCtrl.create({
                message: 'Got date: ' + date,
                duration: 2000,
                position: 'middle'
              });
              toast.present(toast);
              this.data.date = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
      },
      err => {
        let toast = this.toastCtrl.create({
                message: 'Error: ' + err,
                duration: 2000,
                position: 'middle'
              });
              toast.present(toast);
        }
    );
  }

  pushFn() {
    var msg = "Please choose";
    if(this.data.date === "")
    {
      msg = msg + " date";
    }
    if(this.data.location === "none")
    {
      msg = msg + " location";
    }
    if(this.data.bus_slot == 0)
    {
      msg = msg + " bus-slot";
    }
    if(this.data.bp === "")
    {
      msg = msg + " boarding-point";
    }
     if(this.data.out_time == 0)
    {
      msg = msg + " Out-Time";
    }
     if(this.data.busstop === "")
    {
      msg = msg + " Pickup Point";
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
    bp: string;
    date: string;
    trip_type: number;
    out_time: number;
    busstop: string;
}
