import { NgModule } from '@angular/core';
import { CardService } from './card.service';
import { CardStoreService } from './card-store.service';

@NgModule({
  providers: [
    CardService,
    CardStoreService
  ]
})
export class CardModule {
}
