import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calulator-panel-box',
  templateUrl: './calulator-panel-box.component.html',
  styleUrls: ['./calulator-panel-box.component.css']
})
export class CalulatorPanelBoxComponent implements OnInit {
  @Input() displayValue;
  @Output() update = new EventEmitter<string>();
  private numberValues = [];
  private operatorValues = [];
  private answer = 0;
  private mode = 'number';

  constructor() { }

  ngOnInit() {
  }

  addNumber(number: any) {
    const numberValue = number.toString();

    if (this.displayValue === '0' || this.mode === 'answer') {
      this.displayValue = numberValue;
    } else {
      this.displayValue += numberValue;
    }
    this.update.emit(this.displayValue);
    this.mode = 'number';
  }

  addOperator(operator: string) {
    if (this.mode === 'operator') {
      const prevValue = this.displayValue.substring(
        0,
        this.displayValue.length - 3
      );
      this.displayValue = prevValue;
    } else if (this.mode === 'answer') {
      this.displayValue = this.answer.toString();
    }

    this.displayValue += ` ${operator} `;
    this.update.emit(this.displayValue);
    this.mode = 'operator';
  }

  calulate() {
    if (this.mode === 'answer') {
      return;
    }

    // set number & operator values from display values
    this.setValues();

    if (this.numberValues.length <= 1) {
      return;
    }

    // set answer
    this.setAnswer();

    // set display value & mode
    this.displayValue += ` = ${this.answer}`;
    this.update.emit(this.displayValue);
    this.mode = 'answer';
  }

  private setAnswer() {
    // initialize variables
    let num1 = 0;
    let num2 = 0;

    this.numberValues.forEach((val, index) => {
      if (num1 === 0) {
        num1 = val;
      } else if (num2 === 0) {
        this.getAnswer(num1, val, this.operatorValues[Math.trunc(index / 2)]);
        num1 = val;
        num2 = 0;
      }
    });
  }

  private getAnswer(num1, num2, operator) {
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

  private setValues() {
    const operators = ['+', '-', 'x', '÷'];
    this.operatorValues = [];
    this.numberValues = this.displayValue.split(' ').filter((val, index) => {
      if (operators.includes(val)) {
        this.operatorValues.push(val);
        return false;
      }
      return true;
    }).map((val, index) => parseFloat(val));
  }

  clear() {
    this.displayValue = '0';
    this.update.emit(this.displayValue);
  }
}
