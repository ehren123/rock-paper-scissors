import { Component } from '@angular/core';
import { PlayerType } from './models/player-type';
import { RockPaperScissorsType } from './models/rock-paper-scissors-type';
import { GameUtility } from './utilities/game-utility';

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

    const winner = GameUtility.getWinner(RockPaperScissorsType.Scissors, RockPaperScissorsType.Scissors);
    console.log(winner);
  }
}
