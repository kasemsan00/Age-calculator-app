import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class YearMonthDateServices {
  execYearChange: Subject<number> = new Subject<number>();
  execMonthChange: Subject<number> = new Subject<number>();
  execDateChange: Subject<number> = new Subject<number>();

  constructor() {}
  YearChange(data: number) {
    this.execYearChange.next(data);
  }
  MonthChange(data: number) {
    this.execMonthChange.next(data);
  }
  DateChange(data: number) {
    this.execDateChange.next(data);
  }
}
