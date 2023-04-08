import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @Output() title = "Age-calculator-app";
  submitEvent: Subject<any> = new Subject<any>();
  HandleSubmit() {
    this.submitEvent.next(null);
  }
}
