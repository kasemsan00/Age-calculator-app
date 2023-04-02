import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { ViewGroupComponent } from './view-group/view-group.component';

@NgModule({
  declarations: [
    AppComponent,
    InputGroupComponent,
    ViewGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
