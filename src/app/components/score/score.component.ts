import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game';
import { RockPaperScissorsType } from 'src/app/models/rock-paper-scissors-type';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  @Input() game: Game | undefined;

  getResults(): string[]{
    const results = [];
    if(this.game) {
      for(const round of this.game.rounds) {
        let text = `${RockPaperScissorsType[round.player1Selection as RockPaperScissorsType]} vs ${RockPaperScissorsType[round.player2Selection as RockPaperScissorsType]} : `;
        if(round.winner === 0) {
          text += "Tie";
        }
        if(round.winner === 1) {
          text += `${this.game.player1Name} wins`;
        }
        if(round.winner === 2) {
          text += `${this.game.player2Name} wins`;
        }

        results.push(text);
      }
    }
    return results;
  }
}
