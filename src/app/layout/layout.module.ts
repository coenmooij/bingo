import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
  declarations: [PageComponent],
  imports: [RoutingModule]
})
export class LayoutModule {
}
