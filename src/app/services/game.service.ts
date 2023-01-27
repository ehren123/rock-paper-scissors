import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../models/game';
import { PlayerType } from '../models/player-type';
import { RockPaperScissorsType } from '../models/rock-paper-scissors-type';
import { GameUtility } from '../utilities/game.utility';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _gameSource = new BehaviorSubject<Game | undefined>(undefined);
  public game$ = this._gameSource.asObservable();

  public setGame(game: Game) {
    this._gameSource.next(game);
  }

  public clearGame(): void {
    this._gameSource.next(undefined);
  }

  public newGame(player1Name: string, player2Name: string, player1Type: PlayerType, player2Type: PlayerType): void {
    const game = GameUtility.newGame(player1Name, player2Name, player1Type, player2Type);
    console.log(game);
    this.setGame(game);
  }

  public addRound(player1Selection: RockPaperScissorsType, player2Selection: RockPaperScissorsType) {
    const game = this.getGame();
    if(!game) {
      throw new Error("No game in progress");
    }

    GameUtility.addRound(game, player1Selection, player2Selection);
  }

  public getSavedGames(): Game[] {
    return GameUtility.getSavedGames();
  }

  public deleteGame(gameId: string): void {
    GameUtility.deleteGame(gameId);
  }

  public getComputerSelection(): RockPaperScissorsType {
    return GameUtility.getComputerSelection();
  }

  public loadGame(gameId: string): void {
    const game = GameUtility.loadGame(gameId);
    this.setGame(game);
  }

  private getGame(): Game | undefined {
    return this._gameSource.value;
  }
}
