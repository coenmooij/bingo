import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from './game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  GAMES: Game[] = [
    {title: 'My first game', description: 'My very first bingo game', private: false, started: false},
    {title: 'Ximedes game', description: 'Play a game together with colleagues', private: true, started: true}
  ];

  getGames(): Observable<Game[]> {
    return of(this.GAMES);
  }
}
