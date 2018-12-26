import { Component } from '@angular/core';
import { CardStoreService } from '../../cards/card-store.service';
import { GameStoreService } from '../../games/game-store.service';
import { ActivatedRoute } from '@angular/router';
import { RouteParameters } from '../../routing/routes.enum';
import { Card } from '../../cards/card.interface';
import { Game } from '../../games/game.interface';

@Component({
  selector: 'app-play-game',
  templateUrl: 'play-game.component.html',
  styleUrls: ['play-game.component.css']
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

  check(value: number, checked: boolean) {
    if (checked) {
      this.addCheckedNumber(value);
    } else {
      this.removeCheckedNumber(value);
    }
    this.cardStoreService.storeCard(this.card);
  }

  addCheckedNumber(value: number): void {
    this.card.checkedNumbers.push(value);
  }

  removeCheckedNumber(value): void {
    this.card.checkedNumbers = this.card.checkedNumbers.filter(
      (checkedNumber) => {
        return checkedNumber !== value;
      }
    );
  }

  isChecked(value: number): boolean {
    return this.card.checkedNumbers.includes(value);
  }
}
