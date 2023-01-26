import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../models/game';
import { Round } from '../models/round';
import { GameUtility } from '../utilities/game.utility';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _gameSource = new BehaviorSubject<Game | undefined>(undefined);
  public game$ = this._gameSource.asObservable();

  constructor() { }

  public setGame(game: Game) {
    this._gameSource.next(game);
  }
  
  public getGame(): Game | undefined {
    return this._gameSource.value;
  }

  public clearGame() {
    this._gameSource.next(undefined);
  }

  public addRound(round: Round) {
    const game = this.getGame();
    if(!game) {
      throw new Error("No game in progress");
    }

    GameUtility.setWinner(round);
    game.rounds.push(round);
    this.setGame(game);    
  }

  public getSavedGames(): Game[] {
    return GameUtility.getSavedGames();
  }

  public deleteGame(gameId: string): void {
    GameUtility.deleteGame(gameId);
  }

  public clearSavedGames(): void {
    GameUtility.clearSavedGames();
  }

  private saveGame() {
    const game = this.getGame();
    if(!game) {
      throw new Error("No game in progress");
    }
    GameUtility.saveGame(game);
  }
}
