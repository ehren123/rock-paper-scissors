import { RockPaperScissorsType } from "./rock-paper-scissors-type";

export interface Round {
    player1Selection?: RockPaperScissorsType;
    player2Selection?: RockPaperScissorsType;
    winner?: number; // 0 = tie, 1 = player 1, 2 = player 2
}