import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalculateService } from '../calculate/calculate.service';

@Component({
  selector: 'app-calulator-panel-box',
  templateUrl: './calulator-panel-box.component.html',
  styleUrls: ['./calulator-panel-box.component.css']
})
export class CalulatorPanelBoxComponent implements OnInit {
  displayValue;
  private mode = 'number';

  constructor(private calculateService: CalculateService) {
    this.displayValue = calculateService.displayValue;
    calculateService.updateDisplayValueListenner().subscribe(newDisplayValue => {
      this.displayValue = newDisplayValue;
    });
  }

  ngOnInit() {
  }

  addNumber(number: any) {
    const numberValue = number.toString();
    let displayValue = this.displayValue;

    if (displayValue === '0' || this.mode === 'answer') {
      displayValue = numberValue;
    } else {
      displayValue += numberValue;
    }

    this.calculateService.changeDisplayValue(displayValue);
    this.mode = 'number';
  }

  addOperator(operator: string) {
    let displayValue = this.displayValue;

    if (this.mode === 'operator') {
      const prevValue = displayValue.substring(
        0,
        displayValue.length - 3
      );
      displayValue = prevValue;
    } else if (this.mode === 'answer') {
      displayValue = this.calculateService.getAnswer();
    }

    this.calculateService.changeDisplayValue(displayValue += ` ${operator} `);
    this.mode = 'operator';
  }

  calulate() {
    if (this.mode === 'answer') {
      return;
    }

    // set display value & mode
    this.calculateService.calculate(this.displayValue);
    this.mode = 'answer';
  }

  clear() {
    this.calculateService.changeDisplayValue('0');
  }
}
