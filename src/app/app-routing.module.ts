import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerVersusComputerComponent } from './components/player-versus-computer/player-versus-computer.component';
import { PlayerVersusPlayerComponent } from './components/player-versus-player/player-versus-player.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: 'player-versus-player', component: PlayerVersusPlayerComponent },
  { path: 'player-versus-computer', component: PlayerVersusComputerComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
