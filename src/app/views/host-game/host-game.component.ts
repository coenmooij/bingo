import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteParameters, Routes } from '../../routing/routes.enum';
import { HostedGame } from '../../games/hosted-game.interface';
import { GameService } from '../../games/game.service';
import { HostedGameStoreService } from '../../games/hosted-game-store.service';

@Component({
  selector: 'app-host-game',
  templateUrl: './host-game.component.html'
})
export class HostGameComponent {
  hostedGame: HostedGame;
  stopGameModalVisible = false;

  players: string[] = [
    'Mama',
    'Papa',
    'Pietje',
    'Nick'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private gameStoreService: HostedGameStoreService
  ) {
    const gameId = +this.route.snapshot.paramMap.get(RouteParameters.GAME_ID);
    this.hostedGame = this.gameStoreService.getHostedGame(gameId);
  }

  nextBall(): void {
    if (this.lastBallReached()) {
      this.gameService.stopGame(this.hostedGame.id, this.hostedGame.sessionId)
        .subscribe(
          () => {
          },
          (error: Error) => {
            console.log(error);
          }
        );
    } else {
      this.hostedGame.ballIndex++;
    }
    this.gameStoreService.storeHostedGame(this.hostedGame);
  }

  lastBallReached(): boolean {
    return this.hostedGame.ballIndex >= this.hostedGame.balls.length - 1;
  }

  stopGame(): void {
    const handleStopGame = () => {
      this.gameStoreService.removeHostedGame(this.hostedGame.id);
      this.router.navigate([Routes.ROOT]);
    };
    this.gameService.stopGame(this.hostedGame.id, this.hostedGame.sessionId)
      .subscribe(
        handleStopGame,
        handleStopGame
      );
  }
}
