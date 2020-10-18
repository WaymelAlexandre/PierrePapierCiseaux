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

  selectOp(option: "Rock" | "Paper" | "Scissors")
  {
    this.pierreFeuilleCiseauxService.commitSelection(option)
  }
}
