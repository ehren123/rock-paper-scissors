import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { PlayerType } from 'src/app/models/player-type';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-player-versus-computer',
  templateUrl: './player-versus-computer.component.html',
  styleUrls: ['./player-versus-computer.component.scss']
})
export class PlayerVersusComputerComponent implements OnInit {

  game: Game | undefined;

  playerName: string | undefined;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.game$
      .subscribe(game => this.game = game)
  }

  newGame(): void {
    if(!this.playerName) {
      this.gameService.newGame(this.playerName as string, "Computer", PlayerType.Person, PlayerType.Computer);
    }
  }
}
