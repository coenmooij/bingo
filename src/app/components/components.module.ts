import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { StopGameModalComponent } from './stop-game-modal/stop-game-modal.component';
import { CardCellComponent } from './card-cell/card-cell.component';

@NgModule({
  declarations: [
    ModalComponent,
    StopGameModalComponent,
    CardCellComponent
  ],
  exports: [
    ModalComponent,
    StopGameModalComponent,
    CardCellComponent
  ]
})
export class ComponentsModule {
}
