import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from '../pages';


@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log("**navParams: ", this.navParams)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

}