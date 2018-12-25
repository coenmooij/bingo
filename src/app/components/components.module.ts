import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { StopGameModalComponent } from './stop-game-modal/stop-game-modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    StopGameModalComponent
  ],
  exports: [
    ModalComponent,
    StopGameModalComponent
  ]
})
export class ComponentsModule {
}
