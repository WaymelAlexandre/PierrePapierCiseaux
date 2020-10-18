import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PierreFeuilleCiseauxService {

  private playerSelection?: "Rock" | "Paper" | "Scissors" ;
  private computerNum: string;
  public _result: string ;
  public loadpage:boolean = true;

  constructor(private router: Router) { }


  get playeurresult(){ return this.playerSelection }
  get result(){ return this._result }
  get computerresult(){ return this.computerNum }


  private calculWinner():void {
      if (this.playerSelection === this.computerNum)
        { this._result = "This is a Draw" }
      if (this.playerSelection === "Rock" && this.computerNum === "Scissors")
        { this._result = " You Win Congradulation " }
      if (this.playerSelection === "Scissors" && this.computerNum === "Paper")
        { this._result = " You Win Congradulation " }
      if (this.playerSelection === "Paper" && this.computerNum === "Rock")
        { this._result = " You Win Congradulation " }
      if (this.computerNum === "Paper" && this.playerSelection === "Rock" )
        { this._result = " You loose " }
      if (this.computerNum === "Rock" && this.playerSelection === "Scissors" )
        { this._result = " You loose " }
      if (this.computerNum === "Scissors" && this.playerSelection === "Paper" )
        { this._result = " You loose " }
    }


    commitAgain(action: "again"){
      this.router.navigateByUrl("/selection")
    }

    private computerPick(): void
    {
      const randomNumbre = Math.floor(Math.random() * 3)
      const option: string[] =  ["Rock", "Paper", "Scissors"];
      this.computerNum = option[randomNumbre];
    }
    commitSelection(option: "Rock" | "Paper" | "Scissors"){
      this.playerSelection = option;
      this.computerPick();
      this.calculWinner();
      this.router.navigateByUrl("/display")
    }

}
