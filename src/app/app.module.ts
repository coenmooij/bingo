import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RoutingModule } from './routing/routing.module';
import { ViewsModule } from './views/views.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    RoutingModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
