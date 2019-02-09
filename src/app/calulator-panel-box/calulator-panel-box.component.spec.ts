import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalulatorPanelBoxComponent } from './calulator-panel-box.component';

describe('CalulatorPanelBoxComponent', () => {
  let component: CalulatorPanelBoxComponent;
  let fixture: ComponentFixture<CalulatorPanelBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalulatorPanelBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalulatorPanelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
