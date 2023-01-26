import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class RockPaperScissorsService {

  private _gameSource = new BehaviorSubject<Game | undefined>(undefined);
  public game$ = this._gameSource.asObservable();

  constructor() { }

  public setGame(game: Game) {
    this._gameSource.next(game);
  }
}
