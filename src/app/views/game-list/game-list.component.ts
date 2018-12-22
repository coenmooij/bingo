import { Component } from '@angular/core';
import { GameService } from '../../games/game.service';
import { Game } from '../../games/game.interface';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html'
})
export class GameListComponent {
  games: Game[] = [];

  constructor(private gameService: GameService) {
    gameService.getGames().subscribe(
      (games: Game[]) => {
        this.games = games;
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }
}
