import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-cell',
  templateUrl: 'card-cell.component.html',
  styleUrls: ['card-cell.component.css']
})
export class CardCellComponent {
  @Input() value: number;
  @Input() checked = false;

  @Output() check: EventEmitter<boolean> = new EventEmitter();

  checkCell(): void {
    this.checked = !this.checked;
    this.check.emit(this.checked);
  }
}
