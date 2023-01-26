import { PlayerType } from "./player-type";
import { Round } from "./round";

export interface Game {
    id: string;
    player1Name: string;
    player2Name: string;
    player1Type: PlayerType;
    player2Type: PlayerType;
    player1Score: number;
    player2Score: number;
    rounds: Round[];
    created: Date
}