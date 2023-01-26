
import { v4 as uuidv4 } from "uuid";
import { Game } from "../models/game";
import { PlayerType } from "../models/player-type";
import { RockPaperScissorsType } from "../models/rock-paper-scissors-type";

export class GameUtility {

    public static newGame(player1Name: string, player2Name: string, player1Type: PlayerType, player2Type: PlayerType): Game{
        return {
            id: uuidv4(),
            player1Name: player1Name,
            player2Name: player2Name,
            player1Type: PlayerType.Person,
            player2Type: PlayerType.Computer,
            rounds: []
        };
    }

    public static getComputerSelection(): RockPaperScissorsType {
        const random = Math.floor(Math.random() * 3);
        return random as RockPaperScissorsType;
    }

    public static getWinner(player1Selection: RockPaperScissorsType, player2Selection: RockPaperScissorsType): number {
        if (player1Selection === player2Selection) {
            return 0;
        }
        if (player1Selection === RockPaperScissorsType.Rock && player2Selection === RockPaperScissorsType.Scissors) {
            return 1;
        }
        if (player1Selection === RockPaperScissorsType.Paper && player2Selection === RockPaperScissorsType.Rock) {
            return 1;
        }
        if (player1Selection === RockPaperScissorsType.Scissors && player2Selection === RockPaperScissorsType.Paper) {
            return 1;
        }
        return 2;
    }    
}