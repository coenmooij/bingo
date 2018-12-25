import { NgModule } from '@angular/core';
import { GameStoreService } from './game-store.service';
import { GameService } from './game.service';

@NgModule({
  providers: [
    GameService,
    GameStoreService
  ]
})
export class GameModule {
}
