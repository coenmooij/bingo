import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HostedGame } from './hosted-game.interface';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs/operators';
import { Game } from './game.interface';
import { Card } from '../cards/card.interface';

const GAMES = 'games';
const PLAYERS = 'players';

@Injectable()
export class GameService {
  constructor(private apiService: ApiService) {
  }

  createGame(title: string): Observable<HostedGame> {
    return this.apiService.post(GAMES, {title})
      .pipe(
        map(
          (data: { data: any }) => {
            const hostedGame = data.data;
            hostedGame.balls = <number[]>JSON.parse(hostedGame.balls);
            hostedGame.ballIndex = -1;
            hostedGame.sessionId = hostedGame.session_id;
            return <HostedGame>hostedGame;
          })
      );
  }

  stopGame(id: number, sessionId: string): Observable<void> {
    const params = {session_id: sessionId};
    return this.apiService.delete(`${GAMES}/${id}`, {params})
      .pipe(map(() => {
        return;
      }));
  }

  joinGame(name: string, pin: number): Observable<{ game: Game, card: Card }> {
    return this.apiService.post(PLAYERS, {pin, name})
      .pipe(
        map(
          (data: { data: { game: Game, card: any } }) => {
            const card = data.data.card;
            card.grid = JSON.parse(card.card);
            card.gameId = card.game_id;
            card.checkedNumbers = [];
            const game = data.data.game;
            return {game, card};
          })
      );
  }
}
