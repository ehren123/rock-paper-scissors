import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game';
import { PlayerType } from 'src/app/models/player-type';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService, private router: Router) {    
  }

  ngOnInit(): void {
    this.games = this.gameService.getSavedGames(); 
  }

  continue(game: Game): void {
    if(game.player2Type === PlayerType.Computer){
      this.router.navigateByUrl(`player-versus-computer/?id=${game.id}`);
    } else if (game.player2Type === PlayerType.Person) {
      this.router.navigateByUrl(`player-versus-player/?id=${game.id}`);
    }
  }

  delete(gameId: string): void {
    this.gameService.deleteGame(gameId);
    this.games = this.gameService.getSavedGames();
  }
}
