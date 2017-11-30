import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MyTeamsPage, TeamDetailPage, StandingsPage } from "../pages";

@IonicPage()
@Component({
  selector: "page-team-home",
  templateUrl: "team-home.html"
})
export class TeamHomePage {
  teamDetailTab: any;
  standingsTab: any;
  team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;

    this.teamDetailTab = TeamDetailPage;
    this.standingsTab = StandingsPage;
  }

  goHome() {
    //this.navCtrl.push(MyTeamsPage)
    this.navCtrl.popToRoot()
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TeamHomePage");
  }
}
