import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../../routing/routes.enum';
import { GameService } from '../../games/game.service';
import { HostedGame } from '../../games/hosted-game.interface';
import { HostedGameStoreService } from '../../games/hosted-game-store.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html'
})
export class NewGameComponent {
  title = '';
  error = false;

  constructor(private router: Router,
              private gameService: GameService,
              private hostedGameStoreService: HostedGameStoreService) {
  }

  createGame(): void {
    if (this.title === '') {
      return;
    }
    this.gameService.createGame(this.title)
      .subscribe(
        (hostedGame: HostedGame) => {
          this.hostedGameStoreService.storeHostedGame(hostedGame);
          this.router.navigate([Routes.HOST_GAME, hostedGame.id]);
        },
        (error: Error) => {
          this.error = true;
          console.log(error);
        }
      );
  }

  cancel(): void {
    this.router.navigate([Routes.JOIN_GAME]);
  }
}
