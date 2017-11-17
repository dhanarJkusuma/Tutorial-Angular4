import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import RouterModule dan RoutedComponent yang kita buat tadi
import { AppRouterModule, RoutedComponents } from './app.router.module';

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponents // RoutedComponent di declarations
  ],
  imports: [
    BrowserModule,
    AppRouterModule // import module AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
