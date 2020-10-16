import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiplayComponent } from './routers/diplay/diplay.component';
import { PickyourweaponsComponent } from './routers/pickyourweapons/pickyourweapons.component';

const routes: Routes = [

  { path: "weapon", component: PickyourweaponsComponent },

  { path: " display ", component: DiplayComponent  },


  { path: "**", redirectTo: "weapon"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
