import { Component } from "@angular/core";
import { YearMonthDateServices } from "../../year-month-date.services";

@Component({
  selector: "app-input-group",
  templateUrl: "./input-group.component.html",
  styleUrls: ["./input-group.component.css"],
})
export class InputGroupComponent {
  private _subscription_user_name$: any;

  constructor(private _yearMonthDateServices: YearMonthDateServices) {
    // this._subscription_user_name$ = this._yearMonthDateServices.execDateChange.subscribe((value) => {});
  }
  HandleDateChange = (event: any) => {
    this._yearMonthDateServices.DateChange(event.target.value);
  };
  HandleMonthChange = (event: any) => {
    this._yearMonthDateServices.MonthChange(event.target.value);
  };
  HandleYearChange = (event: any) => {
    this._yearMonthDateServices.YearChange(event.target.value);
  };
}
