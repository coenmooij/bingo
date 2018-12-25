import { Injectable } from '@angular/core';
import { StoreService } from '../store/store.service';
import { Game } from './game.interface';

const GAME = 'game';

@Injectable()
export class GameStoreService {
  constructor(private storeService: StoreService) {
  }

  storeGame(game: Game): void {
    this.storeService.store(this.createGameKey(game.id), JSON.stringify(game));
  }

  getGame(id: number): Game {
    const gameJson = this.storeService.get(this.createGameKey(id));
    return <Game>JSON.parse(gameJson);
  }

  removeGame(id: number): void {
    this.storeService.remove(this.createGameKey(id));
  }

  createGameKey(id: number): string {
    return `${GAME}_${id}`;
  }
}
