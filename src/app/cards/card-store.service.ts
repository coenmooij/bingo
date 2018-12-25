import { Injectable } from '@angular/core';
import { StoreService } from '../store/store.service';
import { Card } from './card.interface';

const CARD = 'card';

@Injectable()
export class CardStoreService {
  constructor(private storeService: StoreService) {
  }

  storeCard(card: Card): void {
    this.storeService.store(this.createCardKey(card.gameId), JSON.stringify(card));
  }

  getCard(id: number): Card {
    const gameJson = this.storeService.get(this.createCardKey(id));
    return <Card>JSON.parse(gameJson);
  }

  removeCard(id: number): void {
    this.storeService.remove(this.createCardKey(id));
  }

  createCardKey(id: number): string {
    return `${CARD}_${id}`;
  }
}
