import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  @Input() title;
  displayValue = '0';

  constructor() {}

  ngOnInit() {}

  updateValue(value: string) {
    this.displayValue = value;
  }

}
