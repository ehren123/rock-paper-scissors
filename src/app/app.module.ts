import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './modules/material/material.module';
import { PlayerVersusComputerComponent } from './components/player-versus-computer/player-versus-computer.component';
import { ResultsComponent } from './components/results/results.component';
import { PlayerVersusPlayerComponent } from './components/player-versus-player/player-versus-player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlayerVersusComputerComponent,
    ResultsComponent,
    PlayerVersusPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
