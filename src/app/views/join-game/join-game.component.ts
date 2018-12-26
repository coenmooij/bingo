import { Component } from '@angular/core';
import { GameService } from '../../games/game.service';
import { Router } from '@angular/router';
import { Routes } from '../../routing/routes.enum';
import { CardStoreService } from '../../cards/card-store.service';
import { GameStoreService } from '../../games/game-store.service';

@Component({
  selector: 'app-join-game',
  templateUrl: 'join-game.component.html',
  styleUrls: ['join-game.component.css']
})
export class JoinGameComponent {
  pin?: number;
  name = '';
  error = false;

  constructor(
    private router: Router,
    private cardStoreService: CardStoreService,
    private gameStoreService: GameStoreService,
    private gameService: GameService
  ) {
  }

  formIsValid() {
    return this.pin
      && this.pin > 9999
      && this.pin < 100000
      && this.name !== '';
  }

  joinGame(): void {
    if (this.formIsValid()) {
      this.gameService.joinGame(this.name, this.pin)
        .subscribe(
          ({game, card}) => {
            this.cardStoreService.storeCard(card);
            this.gameStoreService.storeGame(game);
            this.router.navigate([Routes.PLAY_GAME, game.id]);
          },
          (error: Error) => {
            console.log(error);
            this.error = true;
          }
        );
    }
  }
}
