import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from "@angular/core";
import { YearMonthDateServices } from "../../year-month-date.services";
import { Subject } from "rxjs";

@Component({
  selector: "app-input-group",
  templateUrl: "./input-group.component.html",
  styleUrls: ["./input-group.component.css"],
})
export class InputGroupComponent implements OnInit {
  @ViewChild("inputErrorYear") inputErrorYear: ElementRef | undefined;
  @ViewChild("inputErrorMonth") inputErrorMonth: ElementRef | undefined;
  @ViewChild("inputErrorDay") inputErrorDay: ElementRef | undefined;
  @Input() submitEvent: Subject<any> | undefined;
  date: string | number = "";
  month: string | number = "";
  year: string | number = "";
  isDateValid = true;
  isMonthValid = true;
  isYearValid = true;

  constructor(private _yearMonthDateServices: YearMonthDateServices, private renderer: Renderer2) {}

  HandleDateChange = (event: any) => {
    this.date = event.target.value;
    this._yearMonthDateServices.DateChange(event.target.value);
  };
  HandleMonthChange = (event: any) => {
    this.month = event.target.value;
    if (event.target.value > 0 && event.target.value <= 12) {
      this._yearMonthDateServices.MonthChange(event.target.value);
    }
  };
  HandleYearChange = (event: any) => {
    this.year = event.target.value;
    this._yearMonthDateServices.YearChange(event.target.value);
  };
  OnSubmit = () => {
    const resp1 = this.ValidateDay();
    const resp2 = this.ValidateMonth();
    const resp3 = this.ValidateYear();
  };
  ValidateYear = () => {
    if (this.year === "") {
      this.isYearValid = false;
      this.renderer.setProperty(this.inputErrorYear?.nativeElement, "textContent", "The field is required");
      return false;
    }
    const year = parseInt(this.year.toString());
    const currentYear = new Date().getFullYear();
    if (year <= currentYear) {
      this.isYearValid = true;
      this.renderer.setProperty(this.inputErrorYear?.nativeElement, "textContent", "");
      return true;
    } else {
      this.isYearValid = false;
      this.renderer.setProperty(this.inputErrorYear?.nativeElement, "textContent", "Must be in the part");
      return false;
    }
  };
  ValidateMonth = () => {
    if (this.month === "") {
      this.isMonthValid = false;
      this.renderer.setProperty(this.inputErrorMonth?.nativeElement, "textContent", "The field is required");
      return false;
    }
    const month = parseInt(this.month.toString());
    if (month > 0 && month <= 12) {
      this.isMonthValid = true;
      this.renderer.setProperty(this.inputErrorMonth?.nativeElement, "textContent", "");
      return true;
    } else {
      this.isMonthValid = false;
      this.renderer.setProperty(this.inputErrorMonth?.nativeElement, "textContent", "Must be valid Month");
      return false;
    }
  };
  ValidateDay = () => {
    if (this.date === "") {
      this.isDateValid = false;
      this.renderer.setProperty(this.inputErrorDay?.nativeElement, "textContent", "The field is required");
      return false;
    }
    this.date = parseInt(this.date.toString());
    if (this.date <= 31 && this.date > 0) {
      this.isDateValid = true;
      this.renderer.setProperty(this.inputErrorDay?.nativeElement, "textContent", "");
      return true;
    } else {
      this.isDateValid = false;
      this.renderer.setProperty(this.inputErrorDay?.nativeElement, "textContent", "Must be valid day");
      return false;
    }
  };

  ngOnInit(): void {
    this.submitEvent?.subscribe(this.OnSubmit);
  }
}
