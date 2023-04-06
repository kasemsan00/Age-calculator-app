import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputGroupComponent } from "./input-group/input-group.component";
import { ViewGroupComponent } from "./view-group/view-group.component";
import { NgOptimizedImage } from "@angular/common";
import { YearMonthDateServices } from "../year-month-date.services";

@NgModule({
  declarations: [AppComponent, InputGroupComponent, ViewGroupComponent],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage],
  providers: [YearMonthDateServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
