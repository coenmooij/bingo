import { Component } from '@angular/core';
import { CardStoreService } from '../../cards/card-store.service';
import { GameStoreService } from '../../games/game-store.service';
import { ActivatedRoute } from '@angular/router';
import { RouteParameters } from '../../routing/routes.enum';
import { Card } from '../../cards/card.interface';
import { Game } from '../../games/game.interface';

@Component({
  selector: 'app-play-game',
  templateUrl: 'play-game.component.html'
})
export class PlayGameComponent {
  card: Card;
  game: Game;

  constructor(
    private route: ActivatedRoute,
    private cardStoreService: CardStoreService,
    private gameStoreService: GameStoreService
  ) {
    const gameId = +this.route.snapshot.paramMap.get(RouteParameters.GAME_ID);
    this.card = this.cardStoreService.getCard(gameId);
    this.game = this.gameStoreService.getGame(gameId);
  }
}
