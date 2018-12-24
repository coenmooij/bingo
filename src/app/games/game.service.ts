import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HostedGame } from './hosted-game.interface';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs/operators';

const GAMES_RESOURCE = 'games';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private apiService: ApiService) {
  }

  createGame(title: string): Observable<HostedGame> {
    return this.apiService.post(GAMES_RESOURCE, {title})
      .pipe(map(
        (data: { data: HostedGame }) => {
          return data.data;
        }
      ));
  }
}
