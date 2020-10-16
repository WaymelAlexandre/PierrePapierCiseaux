import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { PCPService } from '../../PCP.service'
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-pickyourweapons',
  templateUrl: './pickyourweapons.component.html',
  styleUrls: ['./pickyourweapons.component.css']
})
export class PickyourweaponsComponent implements OnInit {
  router: any;

  // private computerNum(): void{
  //   const randomNumbre = Math.floor(Math.random() * 3)
  //   const option: string[] =  ["Rock" , "Papper" , "Scissors"]
  // }
  constructor(private PCPService: PCPService) { }

  ngOnInit(): void {
  }

  private userPick: string ;
  private computerNum: string ;
  public result: string;

  selectOp(action: string):void
  {
    this.userPick = action;
    this.computerPick();

  }
  validation(){

    this.router.navigateByUrl('/diplay')
    console.log(this.result);
  }

  private computerPick(): void
  {
    const randomNumbre = Math.floor(Math.random() * 3)
    const option: string[] =  ["Rock" , "Papper" , "Scissors"]

  }
  private calculWinner():void {

    if (this.userPick === this.computerNum)
    {
      this.result = "This is a Draw"
    }
    if (this.userPick === "Rock" && this.computerNum === "Scissors") {
      this.result = " You Win Congradulation "
    }
    if (this.userPick === "Scissors" && this.computerNum === "Papper") {
      this.result = " You Win Congradulation "
    }
    if (this.userPick === "Papper" && this.computerNum === "Rock") {
      this.result = " You Win Congradulation "
    }
    if (this.computerNum === "Paper" && this.userPick === "Rock" ) {
      this.result = " You loose "
    }
    if (this.computerNum === "Rock" && this.userPick === "Scissors" ) {
      this.result = " You loose "
    }
    if (this.computerNum === "Scissors" && this.userPick === "Papper" ) {
      this.result = " You loose "
    }

  }
}
