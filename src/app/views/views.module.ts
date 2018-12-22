import { NgModule } from '@angular/core';
import { GameListComponent } from './game-list/game-list.component';
import { RoutingModule } from '../routing/routing.module';
import { CommonModule } from '@angular/common';
import { NewGameComponent } from './new-game/new-game.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GameListComponent,
    NewGameComponent
  ],
  imports: [
    RoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class ViewsModule {
}
