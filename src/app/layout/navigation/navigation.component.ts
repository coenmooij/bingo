import { Component } from '@angular/core';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  HOME_URL = `${Routes.JOIN_GAME}`;
  NEW_GAME_URL = `/${Routes.NEW_GAME}`;
}
