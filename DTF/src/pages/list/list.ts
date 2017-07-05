import { Component } from '@angular/core';
import {  NavController, NavParams , ViewController, ToastController} from 'ionic-angular';

import { NextpagePage } from '..//nextpage/nextpage';
import { ApiProvider } from '../../providers/api/api';

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
  TOGGLE_FLAG: boolean;

  shown_group: string;
  
  nextpage = NextpagePage;

  mAreas: string[];
  pAreas: string[];
  endAreas: string[] = [];
  mBStops: string[];
  pBStops: string[];
  inTimings: string[];
  outTimings: string[];

  inSlots: string[];
  outSlots: string[];
  bplaces: string[];
  dplaces: string[];
  bstops: string[];

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

   constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,public toastCtrl: ToastController, private datePicker: DatePicker, public plt: Platform, private ApiObj: ApiProvider) {
  
    // this.postsService.getposts().subscribe(posts => {
    //   this.posts=posts;

    this.BPOINT_FLAG = true;
    this.DPOINT_FLAG = true;
    this.SLOT_FLAG = true;
    this.BSTOP_FLAG = true;
    this.TOGGLE_FLAG = true;
    
    this.shown_group = null;

    this.mAreas = ['Ghatkopar', 'Vikhroli', 'Kandivali', 'Bhandup', 'Andheri'];
    this.pAreas = ['Pimpri', 'Chinchwad', 'Gauri Mata', 'Bhosari', 'Nehru Chowk'];
    //this.endAreas = ['Mahape', 'Seepz', 'Pune'];
    this.inTimings = ['08:30AM', '10:00AM'];
    this.outTimings = ['05:45PM', '07:10PM', '08:30PM'];
    this.mBStops = ['Ghatkopar Bus Depot', 'Kannamvar Nagar', 'KanjurMarg Village','Bhandup Village','Godrej Company'];
    this.pBStops = ['idk1','idk2','idk3','idk4'];
 
    this.data = {
      location: "",
      in_time: "",
      out_time: "",
      bp: "",
      dp: "",
      date: "",
      trip_type: 2,
      busstop: ""
    }

    this.ApiObj.getLocationsFromAPI().subscribe(
      res => {
        //console.log(res.messegeDesc[0].locationName);
        for(var i=0; i<res.messegeDesc.length; i++)
        {
          this.endAreas.push(res.messegeDesc[i].locationName);
        }
        /*let toast = this.toastCtrl.create({
                message: JSON.stringify(res),
                duration: 10000,
                position: 'middle'
              });
              toast.present(toast);*/
      }
    )
  }
  mainValidation(n)
  {
    /*if(n==1)
    {
      this.data.bp = "";
       this.data.busstop="";
      this.data.bus_slot = 0;
      if(this.data.location === "" || this.data.bus_slot == 0)
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
       
     
    }*/
    
  }

  selectDate()
  {
    document.getElementById('date-icon2').style.color = "transparent";
    
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
        /*let toast = this.toastCtrl.create({
                message: 'Got date: ' + date,
                duration: 2000,
                position: 'middle'
              });
              toast.present(toast);*/
              this.data.date = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
      },
      err => {
        /*let toast = this.toastCtrl.create({
                message: 'Error: ' + err,
                duration: 2000,
                position: 'middle'
              });
              toast.present(toast);*/
        }
    );
  }

  toggleGroup(group)
  {
    if(this.TOGGLE_FLAG)
    {
      if(this.isGroupShown(group))
      {
        this.shown_group = null;
      }
      else
      {
        this.shown_group = group;
      }
    }
    else
    {
      this.TOGGLE_FLAG = true;
    }
  }

  isGroupShown(group)
  {
    return this.shown_group === group;
  }

  setLocation(loc)
  {
    this.data.location = loc;
    document.getElementById("loc-icon2").style.color = "transparent";

    document.getElementById("inslot-icon2").style.color = "black";
    document.getElementById("bp-icon2").style.color = "black";
    document.getElementById("bstop-icon2").style.color = "black";
    document.getElementById("outslot-icon2").style.color = "black";

    this.shown_group = "inslot";
    this.TOGGLE_FLAG = false;
    this.data.in_time = "";
    this.data.bp = "";
    this.data.busstop = "";
    this.data.out_time = "";

    this.bplaces = null;
    this.bstops = null;
    this.outSlots = null;
    this.inSlots = this.inTimings;
  }

  setInSlot(inslot)
  {
    this.data.in_time = inslot;
    document.getElementById("inslot-icon2").style.color = "transparent";

    document.getElementById("bp-icon2").style.color = "black";
    document.getElementById("bstop-icon2").style.color = "black";
    document.getElementById("outslot-icon2").style.color = "black";

    this.data.bp = "";
    this.data.busstop = "";
    this.data.out_time = "";

    this.shown_group = "bp";
    this.TOGGLE_FLAG = false;

    this.bstops = null;
    this.outSlots = null;
    this.bplaces = this.mAreas;
  }


  setBoarding(bp)
  {
    this.data.bp = bp;
    this.data.dp = bp;
    document.getElementById("bp-icon2").style.color = "transparent";

    document.getElementById("bstop-icon2").style.color = "black";
    document.getElementById("outslot-icon2").style.color = "black";

    this.data.busstop = "";
    this.data.out_time = "";

    this.shown_group = "bstop";
    this.TOGGLE_FLAG = false;

    this.outSlots = null;
    this.bstops = this.mBStops;
  }

  setStop(stop)
  {
    this.data.busstop = stop;
    document.getElementById("bstop-icon2").style.color = "transparent";

    document.getElementById("outslot-icon2").style.color = "black";
    this.data.out_time = "";

    this.shown_group = "outslot";
    this.TOGGLE_FLAG = false;
    this.outSlots = this.outTimings;
  }

  setOutSlot(outslot)
  {
    this.data.out_time = outslot;
    document.getElementById("outslot-icon2").style.color = "transparent";
  }

  pushFn() {
    var msg = "Please choose";
    /*if(this.data.date === "")
    {
      msg = msg + " date";
    }
    if(this.data.location === "")
    {
      msg = msg + " location";
    }
    if(this.data.in_time === "")
    {
      msg = msg + " bus-slot";
    }
    if(this.data.bp === "")
    {
      msg = msg + " boarding-point";
    }
    /*if(this.data.dp === "")
    {
      msg = msg + " drop-point";
    }*/
    /* if(this.data.out_time === "")
    {
      msg = msg + " out-time";
    }
     if(this.data.busstop === "")
    {
      msg = msg + " bus-stop";
    }*/
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
    in_time: string;
    out_time: string;
    bp: string;
    dp: string;
    date: string;
    trip_type: number;
    busstop: string;
}
