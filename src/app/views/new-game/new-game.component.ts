import { Component } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html'
})
export class NewGameComponent {
  title: string;
  description: string;

  constructor() {
  }
}
