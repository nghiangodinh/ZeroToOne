import { ZeroToOneProvider } from "../../providers/providers";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { TeamsPage } from "../pages";

@IonicPage()
@Component({
  selector: "page-tournaments",
  templateUrl: "tournaments.html"
})
export class TournamentsPage {
  tournaments: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private zeroToOneProvider: ZeroToOneProvider,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TournamentsPage");

    let loader = this.loadingCtrl.create({
      content: "Getting tournaments...",
      duration: 3000
    })

    loader.present().then(() => {
      this.zeroToOneProvider.getTournaments()
        .subscribe(data => {
            this.tournaments = data
            loader.dismiss()
          }
        )
    })
  }

  itemTapped($event, tournament) {
    this.navCtrl.push(TeamsPage, tournament);
  }
}
