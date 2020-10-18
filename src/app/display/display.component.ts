import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PierreFeuilleCiseauxService } from '../pierre-feuille-ciseaux.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  constructor(public pierreFeuilleCiseauxService: PierreFeuilleCiseauxService, private router: Router) { }
  public playerIcon: string = this.pierreFeuilleCiseauxService.playeurresult ;
  public computerIcon: string = this.pierreFeuilleCiseauxService.computerresult ; ;

  ngOnInit(){ }
  tryagain(action: "again"){this.pierreFeuilleCiseauxService.commitAgain(action)}
  checkP(){
    if (this.pierreFeuilleCiseauxService.playeurresult === "Paper" ) { this.playerIcon = "Paper" }
    if (this.pierreFeuilleCiseauxService.playeurresult === "Rock" ) {  this.playerIcon = "Rock"  }
    if (this.pierreFeuilleCiseauxService.playeurresult === "Scissors" ) {  this.playerIcon = "Scissors"  }
    if (this.pierreFeuilleCiseauxService.computerresult === "Scissors") { this.computerIcon = "Scissors" }
    if (this.pierreFeuilleCiseauxService.computerresult === "Rock") { this.computerIcon = "Rock" }
    if (this.pierreFeuilleCiseauxService.computerresult === "Paper") { this.computerIcon = "Paper" }


  }
}


