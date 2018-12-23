import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteParameters, Routes as ApplicationRoutes } from './routes.enum';
import { PageComponent } from '../layout/page/page.component';
import { GameListComponent } from '../views/game-list/game-list.component';
import { NewGameComponent } from '../views/new-game/new-game.component';
import { HostGameComponent } from '../views/host-game/host-game.component';

const routes: Routes = [
  {
    path: ApplicationRoutes.ROOT, component: PageComponent, children: [
      {path: ApplicationRoutes.ROOT, component: GameListComponent},
      {path: ApplicationRoutes.NEW_GAME, component: NewGameComponent},
      {path: `${ApplicationRoutes.HOST_GAME}/:${RouteParameters.GAME_ID}`, component: HostGameComponent}

    ]
  },
  {path: '**', redirectTo: ApplicationRoutes.ROOT}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
