import { Component, OnInit } from '@angular/core';
import { PierreFeuilleCiseauxService } from '../../pierre-feuille-ciseaux.service';
import { GameResult } from "../../models/GameResult"
import { PlayerRequestModel } from "../../models/PlayerRequestModel"
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  constructor(private pierreFeuilleCiseauxService: PierreFeuilleCiseauxService) { }

  ngOnInit(): void {
  }

  public RockPick: boolean = false ;
  public PaperPick: boolean = false ;
  public ScissorsPick: boolean = false ;

  selectOp(option: "Rock" | "Paper" | "Scissors"){
    if (option == "Rock"){
      this.RockPick = true;  this.PaperPick = false; this.ScissorsPick = false}
    if (option == "Paper")
      { this.RockPick = false;  this.PaperPick = true; this.ScissorsPick = false}
    if (option == "Scissors")
      {  this.RockPick = false;  this.PaperPick = false; this.ScissorsPick = true}
  }

  validationUser(){

    if (this.RockPick)
      {this.pierreFeuilleCiseauxService.playerselect({ playerChoice: "Rock" } as PlayerRequestModel);}
    if (this.PaperPick)
      {this.pierreFeuilleCiseauxService.playerselect({ playerChoice: "Paper" } as PlayerRequestModel);}
    if (this.ScissorsPick)
      {this.pierreFeuilleCiseauxService.playerselect({ playerChoice: "Scissors" } as PlayerRequestModel);    }
  }


}
