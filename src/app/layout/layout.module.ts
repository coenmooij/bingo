import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { RoutingModule } from '../routing/routing.module';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [RoutingModule]
})
export class LayoutModule {
}
