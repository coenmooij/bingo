import { Component } from '@angular/core';
import { GameService } from '../../games/game.service';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html'
})
export class JoinGameComponent {
  constructor(private gameService: GameService) {
  }

  joinGame(): void {
    // TODO : call game service to join and navigate on subscribe, error message on fail
  }
}
