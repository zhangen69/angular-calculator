import { Component, OnInit, Input } from '@angular/core';
import { CalculateService } from '../calculate/calculate.service';

@Component({
  selector: 'app-calulator-display-box',
  templateUrl: './calulator-display-box.component.html',
  styleUrls: ['./calulator-display-box.component.css']
})
export class CalulatorDisplayBoxComponent implements OnInit {
  displayValue;

  constructor(private calculateService: CalculateService) {
    this.displayValue = calculateService.displayValue;
    calculateService.updateDisplayValueListenner().subscribe(newDisplayValue => {
      this.displayValue = newDisplayValue;
    });
  }

  ngOnInit() {
  }

}
