import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalulatorDisplayBoxComponent } from './calulator-display-box/calulator-display-box.component';
import { CalulatorPanelBoxComponent } from './calulator-panel-box/calulator-panel-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalulatorDisplayBoxComponent,
    CalulatorPanelBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
