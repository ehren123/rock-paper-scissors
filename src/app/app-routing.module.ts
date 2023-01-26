import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerVersusComputerComponent } from './components/player-versus-computer/player-versus-computer.component';
import { PlayerVersusPlayerComponent } from './components/player-versus-player/player-versus-player.component';
import { ResultsComponent } from './components/results/results.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: 'player-versus-player', component: PlayerVersusPlayerComponent, pathMatch: 'full' },
  { path: 'player-versus-computer', component: PlayerVersusComputerComponent, pathMatch: 'full' },
  { path: 'results', component: ResultsComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
