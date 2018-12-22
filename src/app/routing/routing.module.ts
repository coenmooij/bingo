import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routes as ApplicationRoutes } from './routes.enum';
import { PageComponent } from '../layout/page/page.component';
import { GameListComponent } from '../views/game-list/game-list.component';

const routes: Routes = [
  {
    path: ApplicationRoutes.ROOT, component: PageComponent, children: [
      {path: ApplicationRoutes.ROOT, component: GameListComponent},
    ]
  },
  {path: '**', redirectTo: ApplicationRoutes.ROOT},
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
