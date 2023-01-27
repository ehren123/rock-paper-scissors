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
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GameService } from './services/game.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlayerVersusComputerComponent,
    ResultsComponent,
    PlayerVersusPlayerComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule { }
