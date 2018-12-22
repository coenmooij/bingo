import { NgModule } from '@angular/core';
import { GameListComponent } from './game-list/game-list.component';
import { RoutingModule } from '../routing/routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GameListComponent],
  imports: [
    RoutingModule,
    CommonModule
  ]
})
export class ViewsModule {
}
