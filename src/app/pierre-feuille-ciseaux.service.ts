import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PierreFeuilleCiseauxService {

  private playerSelection?: "Rock" | "Paper" | "Scissors" ; //playeur pick
  private computerNum: string;  //computer result
  public _result: string ;   //result line

  constructor(private router: Router) { }


  get playeurresult(){ return this.playerSelection } // for send the result player to display component
  get result(){ return this._result } // for send the result line to display component
  get computerresult(){ return this.computerNum } // for send the computer result to display component


    //winer calculation and impliment the winner line
    //need try to impliment everything  player and computer choose and the display line in the same function
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

    //route back to the menu for the button try again on display compo
    commitAgain(action: "again"){
      this.router.navigateByUrl("/selection")
    }

    //computer choose
    private computerPick(): void{
      const randomNumbre = Math.floor(Math.random() * 3)
      const option: string[] =  ["Rock", "Paper", "Scissors"];
      this.computerNum = option[randomNumbre];
    }

    //impliment everything together
    commitSelection(option: "Rock" | "Paper" | "Scissors"){
      this.playerSelection = option;
      this.computerPick();
      this.calculWinner();
      this.router.navigateByUrl("/display")
    }

}
