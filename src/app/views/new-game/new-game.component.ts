import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../../routing/routes.enum';
import { GameService } from '../../games/game.service';
import { HostedGame } from '../../games/hosted-game.interface';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html'
})
export class NewGameComponent {
  title = '';

  constructor(private router: Router, private gameService: GameService) {
  }

  createGame(): void {
    if (this.title === '') {
      return;
    }
    this.gameService.createGame(this.title).subscribe(
      (hostedGame: HostedGame) => {
        // TODO : Store the host_session in localstorage
        this.router.navigate([Routes.HOST_GAME, hostedGame.id]);
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

  cancel(): void {
    this.router.navigate([Routes.JOIN_GAME]);
  }
}
