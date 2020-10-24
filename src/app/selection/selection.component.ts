import { Component, OnInit } from '@angular/core';
import { PierreFeuilleCiseauxService } from '../pierre-feuille-ciseaux.service';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  constructor(private pierreFeuilleCiseauxService: PierreFeuilleCiseauxService) { }

  ngOnInit(): void {
  }


  public RockPick = false ;
  public PaperPick = false ;
  public ScissorsPick = false ;




  selectOp(option: "Rock" | "Paper" | "Scissors") // selectOp  Button for the
  {
    if (option == "Rock"){ this.RockPick = true;  this.PaperPick = false; this.ScissorsPick = false}
    if (option == "Paper"){ this.RockPick = false;  this.PaperPick = true; this.ScissorsPick = false }
    if (option == "Scissors"){ this.RockPick = false;  this.PaperPick = false; this.ScissorsPick = true }
  }

  validationUser(){
    if (this.RockPick == false && this.PaperPick == false && this.ScissorsPick == false) {
      alert("You must pick your weapon to play ")
    }
    if ( this.RockPick){this.pierreFeuilleCiseauxService.commitSelection("Rock")}
    if ( this.PaperPick){this.pierreFeuilleCiseauxService.commitSelection("Paper")}
    if ( this.ScissorsPick){this.pierreFeuilleCiseauxService.commitSelection("Scissors")}

  }



}
