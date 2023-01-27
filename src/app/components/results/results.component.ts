import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) {    
  }

  ngOnInit(): void {
   this.games = this.gameService.getSavedGames();    
  }

}
