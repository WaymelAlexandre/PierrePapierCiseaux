import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiplayComponent } from './routers/diplay/diplay.component';
import { PickyourweaponsComponent } from './routers/pickyourweapons/pickyourweapons.component';

@NgModule({
  declarations: [
    AppComponent,
    DiplayComponent,
    PickyourweaponsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
