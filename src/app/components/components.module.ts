import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { StopGameModalComponent } from './stop-game-modal/stop-game-modal.component';
import { CardCellComponent } from './card-cell/card-cell.component';
import { BallComponent } from './ball/ball.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ModalComponent,
    StopGameModalComponent,
    CardCellComponent,
    BallComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    StopGameModalComponent,
    CardCellComponent,
    BallComponent
  ]
})
export class ComponentsModule {
}
