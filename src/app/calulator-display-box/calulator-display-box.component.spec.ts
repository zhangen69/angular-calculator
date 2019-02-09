import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalulatorDisplayBoxComponent } from './calulator-display-box.component';

describe('CalulatorDisplayBoxComponent', () => {
  let component: CalulatorDisplayBoxComponent;
  let fixture: ComponentFixture<CalulatorDisplayBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalulatorDisplayBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalulatorDisplayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
