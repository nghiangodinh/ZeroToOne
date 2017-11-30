import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TeamHomePage } from "../pages";
import { ZeroToOneProvider } from "../../providers/providers";

@IonicPage()
@Component({
  selector: "page-teams",
  templateUrl: "teams.html"
})
export class TeamsPage {
  teams = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public zeroToOneProvider: ZeroToOneProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TeamsPage");

    const selectTourney = this.navParams.data;
    this.zeroToOneProvider.getTournamentData(selectTourney.id)
        .subscribe(data => this.teams = data.teams);
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }
}
