import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { Game } from 'src/app/models/game';
import { PlayerType } from 'src/app/models/player-type';
import { RockPaperScissorsType } from 'src/app/models/rock-paper-scissors-type';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-player-versus-player',
  templateUrl: './player-versus-player.component.html',
  styleUrls: ['./player-versus-player.component.scss']
})
export class PlayerVersusPlayerComponent implements OnInit, OnDestroy {

  destroy = new Subject<void>();

  game: Game | undefined;

  player1Name: string | undefined;

  player2Name: string | undefined;

  player1Selection: RockPaperScissorsType | undefined;

  player2Selection: RockPaperScissorsType | undefined;

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
    if(this.player1Name && this.player2Name) {
      this.gameService.newGame(this.player1Name, this.player2Name, PlayerType.Person, PlayerType.Person);
    }
  }

  setSelection(player: number, selection: RockPaperScissorsType): void {
    if(player === 1) {
      this.player1Selection = selection;
    } else if(player === 2) {
      this.player2Selection = selection;
    }

    this.addRound();
  }

  addRound(): void {
    if(this.game && this.player1Selection !== undefined && this.player2Selection !== undefined) {
      this.gameService.addRound(this.player1Selection, this.player2Selection);
      this.player1Selection = undefined;
      this.player2Selection = undefined;
    }
  }

  getPlayerSelectionText(player: number): string {
    if (player === 1 && this.player1Selection !== undefined) {
      return RockPaperScissorsType[this.player1Selection];
    } else if (player === 2 && this.player2Selection !== undefined) {
      return RockPaperScissorsType[this.player2Selection];
    }
    return "";
  }
}
