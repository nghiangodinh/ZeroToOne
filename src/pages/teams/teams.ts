import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { TeamHomePage } from "../pages";
import { ZeroToOneProvider } from "../../providers/providers";
import _ from "lodash";

@IonicPage()
@Component({
  selector: "page-teams",
  templateUrl: "teams.html"
})
export class TeamsPage {
  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];
  queryText: string = "";

  constructor(
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public zeroToOneProvider: ZeroToOneProvider
  ) {}

  ionViewDidLoad() {
    //console.log('**lodash debug', lodash, _);
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: "Getting data..."
    });

    loader.present().then(() => {
      this.zeroToOneProvider
        .getTournamentData(selectedTourney.id)
        .subscribe(data => {
          this.allTeams = data.teams;
          this.allTeamDivisions = _.chain(data.teams)
            .groupBy("division")
            .toPairs()
            .map(item => _.zipObject(["divisionName", "divisionTeams"], item))
            .value();

          this.teams = this.allTeamDivisions;
          console.log("division teams", this.teams);
          loader.dismiss();
        });
    });
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

  // updateTeams() {
  //   let queryTextLower = this.queryText.toLowerCase();
  //   let filteredTeams = [];
  //   _.forEach(this.allTeamDivisions, td => {
  //     // let teams = _.filter(td.divisionTeams, t => (<any>t).name.toLowerCase().includes(queryTextLower));
  //     // if (teams.length) {
  //     //   filteredTeams.push({ divisionName: td.divisionName, divisionTeams: teams });
  //     // }
  //   });

  //   this.teams = filteredTeams;
  // }
}
