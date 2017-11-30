import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ZeroToOneProvider {
  baseUrl = "https://elite-schedule-app-8953b.firebaseio.com/";
  currentTourney: any = {}

  constructor(public http: HttpClient) {}

  getTournaments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments.json`)
  }

  getTournamentData(tourneyId): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
        .map(data => {
          this.currentTourney = data
          return this.currentTourney
        });
  }

  getCurrentTourney() {
    return this.currentTourney
  }
}
