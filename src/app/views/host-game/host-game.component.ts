import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteParameters } from '../../routing/routes.enum';

@Component({
  selector: 'app-host-game',
  templateUrl: './host-game.component.html'
})
export class HostGameComponent {
  gameId: string;

  startedAt = false;
  ended = false;
  stopGameModalVisible = false;

  title = 'My new bingo game'; // TODO : Get from api
  description = 'Playing bingo together with all of my best friends'; // TODO : get from api
  gamePin = 63234; // TODO : Get from api

  players: string[] = [
    'Mama',
    'Papa',
    'Pietje',
    'Nick'
  ];

  constructor(private route: ActivatedRoute) {
    this.gameId = this.route.snapshot.paramMap.get(RouteParameters.GAME_ID);
  }

  startGame(): void {
    // TODO : Call api and actually start the game, stop players and stuff
    // TODO : Get the players one last time then stop polling
    this.startedAt = true;
  }

  cancelGame(): void {
    // TODO : Cancel the game with api
    this.ended = true;
  }

  nextBall(): void {
  }

  stopGame(): void {
    this.stopGameModalVisible = true;
  }

  confirmStopGame(): void {
    this.ended = true;
    this.stopGameModalVisible = false;
    // TODO : implement end view or navigate to different view
  }

  cancelStopGame(): void {
    this.stopGameModalVisible = false;
  }
}
