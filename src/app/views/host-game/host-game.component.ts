import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteParameters, Routes } from '../../routing/routes.enum';
import { HostedGame } from '../../games/hosted-game.interface';
import { GameService } from '../../games/game.service';
import { HostedGameStoreService } from '../../games/hosted-game-store.service';
import { interval, Subscription } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Player } from '../../games/player.interface';

@Component({
  selector: 'app-host-game',
  templateUrl: './host-game.component.html'
})
export class HostGameComponent implements OnInit {
  hostedGame: HostedGame;
  stopGameModalVisible = false;
  interval$: Subscription;
  interval = 2000;
  players: Player[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private gameStoreService: HostedGameStoreService
  ) {
    const gameId = +this.route.snapshot.paramMap.get(RouteParameters.GAME_ID);
    this.hostedGame = this.gameStoreService.getHostedGame(gameId);
  }

  ngOnInit(): void {
    this.interval$ = interval(this.interval).pipe(
      startWith(0),
      switchMap(() => this.gameService.getPlayers(this.hostedGame.id, this.hostedGame.sessionId))
    ).subscribe(
      (players: Player[]) => {
        this.players = players;
      });
  }

  nextBall(): void {
    this.interval$.unsubscribe();
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
      this.interval$.unsubscribe();
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
