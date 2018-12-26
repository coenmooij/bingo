import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: 'ball.component.html',
  styleUrls: ['ball.component.css']
})
export class BallComponent {
  @Input() value: number;
  @Input() isBig = false;
}
