import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GameResult } from "./models/GameResult"
import { PlayerRequestModel } from "./models/PlayerRequestModel"
@Injectable({
  providedIn: 'root'
})
export class PierreFeuilleCiseauxService {

  private playerSelection?: string ; //playeur pick
  private computerNum: string;  //computer result
  public _result: string ;   //result line

  constructor(private router: Router, private client: HttpClient) { }


  get playeurresult(){ return this.playerSelection }  // for send the result player to display component
  get result(){ return this._result }                 // for send the result line to display component
  get computerresult(){ return this.computerNum }     // for send the computer result to display component


  playerselect(pick : PlayerRequestModel){
    // this.playerSelection = pick;
    this.client.post<GameResult>("https://localhost:5001/api/Selection/submit", pick)
      .subscribe(Response => {
        this.playerSelection = Response.playerChoice;
        this.computerNum = Response.cpuChoice;
        this._result = Response.result;
        this.router.navigateByUrl("/display")

      })
  }


  commitAgain(action: "again"){
    this.router.navigateByUrl("/selection")
  }
}
