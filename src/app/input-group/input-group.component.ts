import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { YearMonthDateServices } from "../../year-month-date.services";

@Component({
  selector: "app-input-group",
  templateUrl: "./input-group.component.html",
  styleUrls: ["./input-group.component.css"],
})
export class InputGroupComponent {
  @ViewChild("inputErrorMonth") inputErrorMonth: ElementRef | undefined;

  constructor(private _yearMonthDateServices: YearMonthDateServices, private renderer: Renderer2) {}
  HandleDateChange = (event: any) => {
    this._yearMonthDateServices.DateChange(event.target.value);
  };
  HandleMonthChange = (event: any) => {
    if (event.target.value > 0 && event.target.value <= 12) {
      this._yearMonthDateServices.MonthChange(event.target.value);
    } else {
      this._yearMonthDateServices.MonthChange("--");
      this.renderer.setProperty(this.inputErrorMonth?.nativeElement, "innerHTML", "Must be valid month");
    }
  };
  HandleYearChange = (event: any) => {
    this._yearMonthDateServices.YearChange(event.target.value);
  };
}
