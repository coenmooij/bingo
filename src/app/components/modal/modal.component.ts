import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() confirmButtonClass = 'primary';
  @Input() confirmButtonIcon = 'check';
  @Input() confirmButtonText = 'Confirm';
  @Input() cancelButtonText = 'Cancel';
  @Input() cancelButtonClass = 'dark';
  @Input() cancelButtonIcon = 'close';
  @Input() title = 'Confirmation';

  @Output() clickOutside: EventEmitter<void> = new EventEmitter();
  @Output() close: EventEmitter<void> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() confirm: EventEmitter<void> = new EventEmitter();

  outerModalClicked(event: Event): void {
    const target: Element = <Element>event.target;
    if (target.className === 'outer-modal') {
      this.close.emit();
    }
  }

  confirmClicked(): void {
    this.confirm.emit();
  }

  closeClicked(): void {
    this.close.emit();
  }

  cancelClicked(): void {
    this.cancel.emit();
  }
}
