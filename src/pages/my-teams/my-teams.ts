import { Component } from "@angular/core";
import { LoadingController, IonicPage,  NavController,  NavParams } from 'ionic-angular';
import { TournamentsPage, TeamHomePage } from "../pages";
import { ZeroToOneProvider } from "../../providers/providers";

@IonicPage()
@Component({
  selector: "page-my-teams",
  templateUrl: "my-teams.html"
})
export class MyTeamsPage {
  constructor(public loadingController: LoadingController,
    public navCtrl: NavController,
    public zeroToOneProvider: ZeroToOneProvider){}

  favorites = [
    {
      team: { id: 6182, name: "HC Elite 7th", coach: "Michelotti" },
      tournamentId: "89e13aa2-ba6d-4f55-9cc2-61eba6172c63",
      tournamentName: "March Madness Tournament"
    },
    {
      team: { id: 805, name: "HC Elite", coach: "Michelotti" },
      tournamentId: "98c6857e-b0d1-4295-b89e-2d95a45437f2",
      tournamentName: "Holiday Hoops Challenge"
    }
  ];

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyTeamsPage");
  }

  goToTournaments() {
    this.navCtrl.push(TournamentsPage);
  }

  favoriteTapped($event, favorite) {
    let loader = this.loadingController.create({
      content: "Getting data..."
      //dismissOnPageChange: true //<- broken in RC4?
    });
    loader.present();
    this.zeroToOneProvider.getTournamentData(favorite.tournamentId).subscribe(t => {
      loader.dismiss();
      this.navCtrl.push(TeamHomePage, favorite.team);
    });
  }
}
