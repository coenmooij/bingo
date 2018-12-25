import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stop-game-modal',
  templateUrl: './stop-game-modal.component.html'
})
export class StopGameModalComponent {
  @Output() confirm: EventEmitter<void> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
}
