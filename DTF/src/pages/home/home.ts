import { Component } from '@angular/core';
import { NavController, NavParams , ViewController, ToastController} from 'ionic-angular';

import { NextpagePage } from '..//nextpage/nextpage';
import { ApiProvider } from '../../providers/api/api';

import { Platform } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ ApiProvider ]
})
export class BusRegistration {

  BPOINT_FLAG: boolean;
  DPOINT_FLAG: boolean;
  SLOT_FLAG: boolean;
  BSTOP_FLAG: boolean;
  TOGGLE_FLAG: boolean;

  lindex: number;

  shown_group: string;
  
  nextpage = NextpagePage;

  mAreas: string[];
  pAreas: string[];
  endAreas: string[] = [];
  mBStops: string[];
  pBStops: string[];
  timings: string[];

  slots: string[];
  bplaces: string[];
  dplaces: string[];
  bstops: string[];
  
  contact_num: string;
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
  
  // get year()
  // {
  //   return new Date().getUTCFullYear();
  // }
  

   constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,public toastCtrl: ToastController, private call: CallNumber, private datePicker: DatePicker, public plt: Platform, private ApiObj: ApiProvider) {
  
    // this.postsService.getposts().subscribe(posts => {
    //   this.posts=posts;

    this.BPOINT_FLAG = true;
    this.DPOINT_FLAG = true;
    this.SLOT_FLAG = true;
    this.BSTOP_FLAG = true;
    this.TOGGLE_FLAG = true;

    this.lindex = 0;
    this.shown_group = null;

    this.mAreas = ['Ghatkopar', 'Vikhroli', 'Kandivali', 'Bhandup', 'Andheri'];
    this.pAreas = ['Pimpri', 'Chinchwad', 'Gauri Mata', 'Bhosari', 'Nehru Chowk'];
    //this.endAreas = ['Mahape', 'Seepz', 'Pune'];
    this.timings = ['08:30AM', '10:00AM', '05:45PM', '07:10PM', '08:30PM'];
    this.mBStops = ['Ghatkopar Bus Depot', 'Kannamvar Nagar', 'KanjurMarg Village','Bhandup Village','Godrej Company'];
    this.contact_num = "+918286204401";
    this.pBStops = ['idk1','idk2','idk3','idk4'];

    this.data = {
      location: "",
      bus_slot: "",
      bp: "",
      dp: "",
      date: "",
      trip_type: 1,
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

  /* dateSelect(n)
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

    //this.data.date = (new Date().getUTCDate()) + n - 1;
  } */
  
  mainValidation(n)
  {
    /*if(n==1)
    {
      this.data.bp = "";
      this.data.dp = "";
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
      if (this.data.bus_slot <= 2 && this.data.bus_slot != 0)
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
        this.BSTOP_FLAG = true;       
        this.data.dp = this.data.location;
      }
      else if(this.data.bus_slot > 2 && this.data.bus_slot != 0)
      {
        this.bplaces = this.endAreas;
        if(this.data.location === "Mahape" || this.data.location === "Seepz")
        {
          this.dplaces = this.mAreas;
        }
        else if(this.data.location === "Pune")
        {
          this.dplaces = this.pAreas;
        }
        this.BPOINT_FLAG = true;
        this.DPOINT_FLAG = false;
        this.BSTOP_FLAG = true;
        this.data.bp = this.data.location;
      }
    }
    else if(n==3)
    {
      //this.data.bp = this.data.location;
      this.data.busstop="";
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
      else if(this.data.bus_slot > 2 && this.data.bus_slot != 0)
      {
        if(this.data.location === "Mahape" || this.data.location === "Seepz")
        {   
          this.bstops = this.mBStops;
        }
        else if(this.data.location === "Pune")
        {
          this.bstops = this.pBStops;
        }
        //  if(this.data.bp !== "")
        // this.BSTOP_FLAG = false;
      }
     
    }
   else if(n==4)
    {
      this.data.busstop="";
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
      
      }  
      else if(this.data.bus_slot > 2 && this.data.bus_slot != 0)
      {
        if(this.data.location === "Mahape" || this.data.location === "Seepz")
        {   
          this.bstops = this.mBStops;
        }
        else if(this.data.location === "Pune")
        {
          this.bstops = this.pBStops;
          if (this.data.bus_slot <= 2 && this.data.bus_slot != 0)
        {
          this.BSTOP_FLAG = true;
        }
        }
        if(this.data.dp !== "")
          this.BSTOP_FLAG = false;
      }
    }
    // if (this.data.bus_slot <= 2 && this.data.bus_slot != 0)
    //     {
    //       this.BSTOP_FLAG = true;
    //     }  
    */
  }
  
  testFn(xyz) {
    console.log(xyz);
  }

  selectDate()
  {
    document.getElementById('date-icon').style.color = "transparent";

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
    this.lindex = this.endAreas.indexOf(loc);

    /*this.ApiObj.getTimeSlotsFromAPI(this.lindex).subscribe(
      res => {
        this.timings = [];
        for(var i=0; i<res.messegeDesc.length; i++)
        {
          this.timings.push(res.messegeDesc[i].busTime);
        }
        this.slots = this.timings;
        this.shown_group = "slot";
        this.TOGGLE_FLAG = false;
      }
    )*/
    this.slots = this.timings;
    this.shown_group = "slot";
    this.TOGGLE_FLAG = false;
    
    document.getElementById("loc-icon").style.color = "transparent";

    document.getElementById("slot-icon").style.color = "black";
    document.getElementById("bp-icon").style.color = "black";
    document.getElementById("dp-icon").style.color = "black";
    document.getElementById("bstop-icon").style.color = "black";
    
    this.data.bus_slot = "";
    this.data.bp = "";
    this.data.dp = "";
    this.data.busstop = "";
    
    this.bplaces = null;
    this.dplaces = null;
    this.bstops = null;
  }

  setBusSlot(slot)
  {
    this.data.bus_slot = slot;
    document.getElementById("slot-icon").style.color = "transparent";

    this.data.busstop = "";
    this.bstops = null;

    if(this.data.bus_slot.charAt(5) === 'A' || this.data.bus_slot.charAt(5) === 'a')
    {
      this.data.bp = "";
      this.data.dp = this.data.location;
      this.bplaces = this.mAreas;
      this.dplaces = null;
      document.getElementById("bp-icon").style.color = "black";
      document.getElementById("dp-icon").style.color = "transparent";
      this.shown_group = "bp";
      this.TOGGLE_FLAG = false;
    }
    else
    {
      this.data.bp = this.data.location;
      this.data.dp = "";
      this.bplaces = null;
      this.dplaces = this.mAreas;
      document.getElementById("bp-icon").style.color = "transparent";
      document.getElementById("dp-icon").style.color = "black";
      this.shown_group = "dp";
      this.TOGGLE_FLAG = false;
    }
  }

  setBoarding(bp)
  {
    this.data.bp = bp;
    document.getElementById("bp-icon").style.color = "transparent";

    this.bstops = this.mBStops;
    this.shown_group = "bstop";
    this.TOGGLE_FLAG = false;
  }

  setDrop(dp)
  {
    this.data.dp = dp;
    document.getElementById("dp-icon").style.color = "transparent";

    this.bstops = this.mBStops;
    this.shown_group = "bstop";
    this.TOGGLE_FLAG = false;
  }

  setStop(stop)
  {
    this.data.busstop = stop;
    document.getElementById("bstop-icon").style.color = "transparent";
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
    if(this.data.bus_slot === "")
    {
      msg = msg + " bus-slot";
    }
    if(this.data.bp === "")
    {
      msg = msg + " boarding-point";
    }
    if(this.data.dp === "")
    {
      msg = msg + " drop-point";
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
    bus_slot: string;
    bp: string;
    dp: string;
    date: string;
    trip_type: number;
    busstop: string;
}
