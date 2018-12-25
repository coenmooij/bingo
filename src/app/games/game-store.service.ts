import { Injectable } from '@angular/core';
import { StoreService } from '../store/store.service';
import { HostedGame } from './hosted-game.interface';

const HOSTED_GAME = 'hosted_game';

@Injectable()
export class GameStoreService {
  constructor(private storeService: StoreService) {
  }

  storeHostedGame(hostedGame: HostedGame): void {
    this.storeService.store(this.createHostedGameKey(hostedGame.id), JSON.stringify(hostedGame));
  }

  getHostedGame(id: number): HostedGame {
    const gameJson = this.storeService.get(this.createHostedGameKey(id));
    return <HostedGame>JSON.parse(gameJson);
  }

  createHostedGameKey(id: number): string {
    return `${HOSTED_GAME}_${id}`;
  }
}
