import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZeroToOneProvider } from '../../providers/providers';
import { TeamHomePage } from '../pages';


@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  game: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ZeroToOneProvider) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad GamePage');

    this.game = this.navParams.data
  }

  teamTapped(teamId) {
    const tourData = this.api.getCurrentTourney()
    const team = tourData.teams.find(t => t.id === teamId)
    this.navCtrl.push(TeamHomePage, team)
  }
}
