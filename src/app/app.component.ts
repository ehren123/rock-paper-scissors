import { Component } from '@angular/core';
import { round } from 'lodash';
import { PlayerType } from './models/player-type';
import { RockPaperScissorsType } from './models/rock-paper-scissors-type';
import { Round } from './models/round';
import { GameUtility } from './utilities/game.utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rock-paper-scissors';

  public test(): void{
    const computerSelection = GameUtility.getComputerSelection();
    console.log(computerSelection);

    const newGame = GameUtility.newGame("Player 1", "Player 2", PlayerType.Person, PlayerType.Person);
    console.log(newGame);

    const round: Round = {
      player1Selection: RockPaperScissorsType.Rock,
      player2Selection: RockPaperScissorsType.Paper
    }

    console.log(round);

    GameUtility.setWinner(round);

    console.log(round);

    newGame.rounds.push(round);

    let games = GameUtility.getSavedGames();
    console.log(games);

    GameUtility.saveGame(newGame);

    games = GameUtility.getSavedGames();
    console.log(games);

    GameUtility.deleteGame(newGame.id);

    games = GameUtility.getSavedGames();
    console.log(games);

    GameUtility.clearSavedGames();

    games = GameUtility.getSavedGames();
    console.log(games);
  }
}
