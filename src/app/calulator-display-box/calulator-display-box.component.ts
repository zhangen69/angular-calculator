import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calulator-display-box',
  templateUrl: './calulator-display-box.component.html',
  styleUrls: ['./calulator-display-box.component.css']
})
export class CalulatorDisplayBoxComponent implements OnInit {
  @Input() displayValue;

  constructor() { }

  ngOnInit() {
  }

}
