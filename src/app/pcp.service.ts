import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PCPService {

  private playerSelection?: "Rock" | "Papper" | "Scissors" ;


  constructor(private router : Router) { }

  onSelection(option: "Rock" | "Papper" | "Scissors")
  {
    this.playerSelection = option;
    this.router.navigateByUrl('/diplay')
  }

}
