import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  displayValue = '0';
  private numberValues = [];
  private operatorValues = [];
  private answer = 0;

  private updateDisplayValue = new Subject<string>();

  constructor() { }

  changeDisplayValue(value) {
    this.displayValue = value;
    this.updateDisplayValue.next(this.displayValue);
  }

  updateDisplayValueListenner() {
    return this.updateDisplayValue.asObservable();
  }

  getAnswer(): string {
    return this.answer.toString();
  }

  // return displayValue
  calculate(displayValue: string) {
    // set number & operator values from display values
    this.setValues(displayValue);

    if (this.numberValues.length <= 1) {
      return displayValue;
    }

    this.displayValue = `${displayValue} = ${this.calculateAnswer()}`;
    this.updateDisplayValue.next(this.displayValue);
    return this.displayValue;
  }

  private calculateAnswer(): number {
    // initialize variables
    let num1 = 0;
    let num2 = 0;

    this.numberValues.forEach((val, index) => {
      if (num1 === 0) {
        num1 = val;
      } else if (num2 === 0) {
        this.proceedCalculation(num1, val, this.operatorValues[Math.trunc(index / 2)]);
        num1 = val;
        num2 = 0;
      }
    });

    return this.answer;
  }

  private proceedCalculation(num1, num2, operator) {
    switch (operator) {
      case '+':
        this.answer = num1 + num2;
        break;
      case '-':
        this.answer = num1 - num2;
        break;
      case 'x':
        this.answer = num1 * num2;
        break;
      case '÷':
        this.answer = num1 / num2;
        break;
    }

    return this.answer;
  }

  private setValues(displayValue: string) {
    const operators = ['+', '-', 'x', '÷'];
    this.operatorValues = [];
    this.numberValues = displayValue.split(' ').filter((val, index) => {
      if (operators.includes(val)) {
        this.operatorValues.push(val);
        return false;
      }
      return true;
    }).map((val, index) => parseFloat(val));
  }

}
