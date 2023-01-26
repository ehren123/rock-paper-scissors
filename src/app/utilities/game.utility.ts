
import { orderBy } from "lodash";
import store from "store2";
import { v4 as uuidv4 } from "uuid";
import { Game } from "../models/game";
import { PlayerType } from "../models/player-type";
import { RockPaperScissorsType } from "../models/rock-paper-scissors-type";
import { Round } from "../models/round";

export class GameUtility {
    private static _gameStoryKey = "games";

    public static newGame(player1Name: string, player2Name: string, player1Type: PlayerType, player2Type: PlayerType): Game{
        return {
            id: uuidv4(),
            player1Name: player1Name,
            player2Name: player2Name,
            player1Type: PlayerType.Person,
            player2Type: PlayerType.Computer,
            rounds: [],
            created: new Date()
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

    public static setWinner(round: Round): void {
        if(Number.isNaN(round.player1Selection) || Number.isNaN(round.player2Selection)) {
            throw new Error("Invalid round");
        }

        round.winner = this.getWinner(round.player1Selection as RockPaperScissorsType, 
            round.player2Selection as RockPaperScissorsType);
    }
    
    public static saveGame(game: Game): void {
        let games: Game[] = [];
        let gamesFromStore = store(this._gameStoryKey) as Game[];
        if (gamesFromStore) {
            games = gamesFromStore;
        }
        games.push(game);
        games = orderBy(games, ["created"], ["desc"]);
        store(this._gameStoryKey, games);
    }

    public static getSavedGames(): Game[] {
        let gamesFromStore = store(this._gameStoryKey) as Game[];
        return gamesFromStore ?? [];
    }

    public static deleteGame(gameId: string): void {
        let gamesFromStore = store(this._gameStoryKey) as Game[];
        if (gamesFromStore) {
            const games = gamesFromStore.filter(x => x.id !== gameId);
            store(this._gameStoryKey, games);
        }
    }

    public static clearSavedGames(): void {
        store.remove(this._gameStoryKey);
    }

    public static getScore(): number[] {
        let gamesFromStore = store(this._gameStoryKey) as Game[];
        if (gamesFromStore) {
            let player1Score = 0;
            let player2Score = 0;
            gamesFromStore.forEach(game => {
                game.rounds.forEach(round => {
                    if (round.winner === 1) {
                        player1Score++;
                    }
                    if (round.winner === 2) {
                        player2Score++;
                    }
                });
            });
            return [player1Score, player2Score];
        }
        return [0, 0];
    }
}