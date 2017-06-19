import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the MastekinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mastekinfo',
  templateUrl: 'mastekinfo.html',
 
})
export class MastekinfoPage {

 /* items = [
    'Our Ideals : Building an Evergreen Institution',
    'Evergreen Institution',
    '100% Responsibility for Outcomes',
    'Win for All',
    'Collaborative Culture',
 
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }*/
values = [
    { title: "Our Ideals : Building an Evergreen Institution", description: "Our aspiration is for Mastek to be an admired, evergreen institution, not just a successful company.We believe that every organisation needs ideals to aspire to – ideals that stand the test of time." },
    { title: "Evergreen Institution", description: "Mastek is not just a company, but an institution with a ‘soul’, seeking to make a valuable difference in the world. Mastek believes that sustained contribution and a spotless reputation over the long term are more important than short-term growth and profits." },
    { title: "100% Responsibility for Outcomes", description: "Mastek takes 100% responsibility for providing insightful solutions. Using modern platforms that enhance agility and responsiveness we quickly assimilate new technologies and take pride in our work – underpinning the solutions we deliver." },
    { title: "Win for All", description: "Mastek is committed to the success of every stakeholder, without trading off anyone’s interest against one another. We’re committed to building long-term relationships that win the hearts and minds of those it touches." },
    { title: "Collaborative Culture", description: "Mastek embraces collaboration as the means to solving complex problems. Openness, mutual respect and teamwork within both the company and clients. Collaboration is enhanced with our simple, sincere and straightforward approach to work and relationships." }
  ];
vission = [
    { title: "Strong Financial Performance", description: "Our aspiration is for Mastek to be an admired, evergreen institution, not just a successful company.We believe that every organisation needs ideals to aspire to – ideals that stand the test of time." },
    { title: "Evergreen Institution", description: "Mastek is not just a company, but an institution with a ‘soul’, seeking to make a valuable difference in the world. Mastek believes that sustained contribution and a spotless reputation over the long term are more important than short-term growth and profits." },
    { title: "100% Responsibility for Outcomes", description: "Mastek takes 100% responsibility for providing insightful solutions. Using modern platforms that enhance agility and responsiveness we quickly assimilate new technologies and take pride in our work – underpinning the solutions we deliver." },
    { title: "Win for All", description: "Mastek is committed to the success of every stakeholder, without trading off anyone’s interest against one another. We’re committed to building long-term relationships that win the hearts and minds of those it touches." },
    { title: "Collaborative Culture", description: "Mastek embraces collaboration as the means to solving complex problems. Openness, mutual respect and teamwork within both the company and clients. Collaboration is enhanced with our simple, sincere and straightforward approach to work and relationships." }
  ];
  shownGroup = null;

  constructor(public navCtrl: NavController) {
  }

  toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  };
  isGroupShown(group) {
      return this.shownGroup === group;
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad MastekinfoPage');
  }


}

