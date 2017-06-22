import { Component } from '@angular/core';
import {  NavController, NavParams , ViewController, ToastController} from 'ionic-angular';

import { NextpagePage } from '..//nextpage/nextpage';

import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 



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
  contact_num: string;
  data: data;

 public buttonClicked: boolean = true;
  
  public onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
  }


  
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

    this.BPOINT_FLAG = true;
    this.DPOINT_FLAG = true;
    this.SLOT_FLAG = true;
    this.BSTOP_FLAG = true;

    this.mAreas = ['Ghatkopar', 'Vikhroli', 'Kandivali', 'Bhandup', 'Andheri'];
    this.pAreas = ['Pimpri', 'Chinchwad', 'Gauri Mata', 'Bhosari', 'Nehru Chowk'];
    this.endAreas = ['Mahape', 'Seepz', 'Pune'];
    this.mBStops = ['Ghatkopar Bus Depot', 'Kannamvar Nagar', 'KanjurMarg Village','Bhandup Village','Godrej Company'];
    this.contact_num = "+918286204401";
    this.pBStops = ['idk1','idk2','idk3','idk4'];

    this.data = {
      location: "none",
      bus_slot: 0,
      bp: "",
      dp: "",
      date: 0,
      trip_type: 1,
      busstop:""
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
  
  mainValidation(n)
  {
    if(n==1)
    {
      this.data.bp = "";
      this.data.dp = "";
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
    
  }
  
  testFn() {
    console.log("123");
    return false;
  }

  pushFn() {
    var msg = "Please choose";
    if(this.data.date == 0)
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
    if(this.data.dp === "")
    {
      msg = msg + " drop-point";
    }
    if(this.data.busstop === "")
    {
      msg = msg + " bus stop";
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
    dp: string;
    date: number;
    trip_type: number;
    busstop: string;
}
