import { Component } from "@angular/core";
import { Observable, startWith } from "rxjs";
import { YearMonthDateServices } from "../../year-month-date.services";

@Component({
  selector: "app-view-group",
  templateUrl: "./view-group.component.html",
  styleUrls: ["./view-group.component.css"],
})
export class ViewGroupComponent {
  public subscriptionDate$: Observable<number | string>;
  public subscriptionMonths$: Observable<number | string>;
  public subscriptionYear$: Observable<number | string>;

  constructor(private _yearMonthDateServices: YearMonthDateServices) {
    this.subscriptionDate$ = this._yearMonthDateServices.execDateChange.pipe(startWith("--"));
    this.subscriptionMonths$ = this._yearMonthDateServices.execMonthChange.pipe(startWith("--"));
    this.subscriptionYear$ = this._yearMonthDateServices.execYearChange.pipe(startWith("--"));
  }
}
