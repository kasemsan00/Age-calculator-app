import { Component } from "@angular/core";
import { Observable, startWith } from "rxjs";
import { YearMonthDateServices } from "../../year-month-date.services";

@Component({
  selector: "app-view-group",
  templateUrl: "./view-group.component.html",
  styleUrls: ["./view-group.component.css"],
})
export class ViewGroupComponent {
  public subscriptionDate$: Observable<any>;

  constructor(private _yearMonthDateServices: YearMonthDateServices) {
    this.subscriptionDate$ = this._yearMonthDateServices.execDateChange.pipe(startWith(999));
  }
}
