import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html'
})
export class NewGameComponent {
  title = '';
  description = '';
  inviteOnly = false;

  constructor(private router: Router) {
  }

  createGame(): void {

    this.router.navigate([Routes.HOST_GAME, '1234']); // TODO : Remove when implementing real solution
    // TODO : Check if title not empty otherwise give feedback
    // TODO : call game service create new game
    // TODO : on subscribe =>
    // TODO : Store the host_session in localstorage
    // TODO : use the game_id to navigate to host game page
  }

  cancel(): void {
    this.router.navigate([Routes.GAME_LIST]);
  }
}
