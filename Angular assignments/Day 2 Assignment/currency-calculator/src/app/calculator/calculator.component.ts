import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num = new FormControl();
  from = new FormControl();
  to = new FormControl();
  result: number | undefined;
  unit: string = "";
  onSubmit() {
    if (this.from.value == "USD") {
      if (this.to.value == "EUR") {
        this.result = this.num.value * 0.92;
        this.unit = "EUR";
      } else if (this.to.value == "INR") {
        this.result = this.num.value * 81.38;
        this.unit = "INR";
      } else if (this.to.value == "GBP") {
        this.result = this.num.value * 0.81;
        this.unit = "GBP";
      } else if (this.to.value == "RUB") {
        this.result = this.num.value * 68.72;
        this.unit = "RUB";
      } else {
        this.result = this.num.value;
        this.unit = "USD";
      }
    } else if (this.from.value == "EUR") {
      if (this.to.value == "USD") {
        this.result = this.num.value * 1.09;
        this.unit = "USD";
      } else if (this.to.value == "INR") {
        this.result = this.num.value * 88.29;
        this.unit = "INR";
      } else if (this.to.value == "GBP") {
        this.result = this.num.value * 0.88;
        this.unit = "GBP";
      } else if (this.to.value == "RUB") {
        this.result = this.num.value * 74.61;
        this.unit = "RUB";
      } else {
        this.result = this.num.value;
        this.unit = "EUR";
      }
    } else if (this.from.value == "INR") {
      if (this.to.value == "USD") {
        this.result = this.num.value * 0.01;
        this.unit = "USD";
      } else if (this.to.value == "EUR") {
        this.result = this.num.value * 0.01;
        this.unit = "EUR";
      } else if (this.to.value == "GBP") {
        this.result = this.num.value * 0.01;
        this.unit = "GBP";
      } else if (this.to.value == "RUB") {
        this.result = this.num.value * 0.85;
        this.unit = "RUB";
      } else {
        this.result = this.num.value;
        this.unit = "INR";
      }
    } else if (this.from.value == "GBP") {
      if (this.to.value == "USD") {
        this.result = this.num.value * 1.23;
        this.unit = "USD";
      } else if (this.to.value == "EUR") {
        this.result = this.num.value * 1.14;
        this.unit = "EUR";
      } else if (this.to.value == "INR") {
        this.result = this.num.value * 100.34;
        this.unit = "INR";
      } else if (this.to.value == "RUB") {
        this.result = this.num.value * 84.83;
        this.unit = "RUB";
      } else {
        this.result = this.num.value;
        this.unit = "GBP";
      }
    } else {
      if (this.to.value == "USD") {
        this.result = this.num.value * 0.01;
        this.unit = "USD";
      } else if (this.to.value == "EUR") {
        this.result = this.num.value * 0.01;
        this.unit = "EUR";
      } else if (this.to.value == "INR") {
        this.result = this.num.value * 1.18;
        this.unit = "INR";
      } else if (this.to.value == "GBP") {
        this.result = this.num.value * 0.01;
        this.unit = "GBP";
      } else {
        this.result = this.num.value;
        this.unit = "RUB";
      }
    }
  }

}
