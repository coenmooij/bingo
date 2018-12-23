import { NgModule } from '@angular/core';
import { GameListComponent } from './game-list/game-list.component';
import { RoutingModule } from '../routing/routing.module';
import { CommonModule } from '@angular/common';
import { NewGameComponent } from './new-game/new-game.component';
import { FormsModule } from '@angular/forms';
import { HostGameComponent } from './host-game/host-game.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    GameListComponent,
    NewGameComponent,
    HostGameComponent
  ],
  imports: [
    RoutingModule,
    CommonModule,
    FormsModule,
    ComponentsModule
  ]
})
export class ViewsModule {
}
