import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './routes/display/display.component';
import { SelectionComponent } from './routes/selection/selection.component';

const routes: Routes = [

  { path: 'select', component: SelectionComponent},
  { path: 'display', component: DisplayComponent},
  { path: '**', redirectTo: 'select'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
