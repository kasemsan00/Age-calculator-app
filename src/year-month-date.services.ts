import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class YearMonthDateServices {
  execYearChange: Subject<number | string> = new Subject<number | string>();
  execMonthChange: Subject<number | string> = new Subject<number | string>();
  execDateChange: Subject<number | string> = new Subject<number | string>();

  constructor() {}
  YearChange(data: number | string) {
    this.execYearChange.next(data);
  }
  MonthChange(data: number | string) {
    this.execMonthChange.next(data);
  }
  DateChange(data: number | string) {
    this.execDateChange.next(data);
  }
}
