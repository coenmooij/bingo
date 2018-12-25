import { NgModule } from '@angular/core';
import { GameStoreService } from './game-store.service';
import { GameService } from './game.service';
import { HostedGameStoreService } from './hosted-game-store.service';

@NgModule({
  providers: [
    GameService,
    GameStoreService,
    HostedGameStoreService
  ]
})
export class GameModule {
}
