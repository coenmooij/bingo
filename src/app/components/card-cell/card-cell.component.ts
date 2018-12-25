import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-cell',
  templateUrl: 'card-cell.component.html',
  styleUrls: ['card-cell.component.css']
})
export class CardCellComponent {
  @Input() value: number;
  @Input() checked = false;
}
