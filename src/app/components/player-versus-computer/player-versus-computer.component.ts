import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { Game } from 'src/app/models/game';
import { PlayerType } from 'src/app/models/player-type';
import { RockPaperScissorsType } from 'src/app/models/rock-paper-scissors-type';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-player-versus-computer',
  templateUrl: './player-versus-computer.component.html',
  styleUrls: ['./player-versus-computer.component.scss']
})
export class PlayerVersusComputerComponent implements OnInit, OnDestroy {

  destroy = new Subject<void>();

  game: Game | undefined;

  playerName: string | undefined;

  constructor(private gameService: GameService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.queryParams
    .pipe(take(1))
    .subscribe(params => {
      const id = params['id'];
      if(id) {
        this.gameService.loadGame(id);
      } else {
        this.gameService.clearGame();
      }
    });

    this.gameService.game$
      .pipe(takeUntil(this.destroy))
      .subscribe(game => this.game = game)
  }

  ngOnDestroy(): void {
    this.gameService.clearGame();
    this.destroy.next();
    this.destroy.complete();
  }

  newGame(): void {
    if(this.playerName) {
      this.gameService.newGame(this.playerName, "Computer", PlayerType.Person, PlayerType.Computer);
    }
  }

  rock(): void {
    this.addRound(RockPaperScissorsType.Rock);
  }

  paper(): void {
    this.addRound(RockPaperScissorsType.Paper);
  }

  scissors(): void {
    this.addRound(RockPaperScissorsType.Scissors);
  }

  addRound(playerSelection: RockPaperScissorsType): void {
    if(this.game) {
      const computerSelection = this.gameService.getComputerSelection();
      this.gameService.addRound(playerSelection, computerSelection);
    }
  }
}
