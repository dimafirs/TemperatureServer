import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherViewComponent } from './components/weather-view/weather-view.component';
import {MeasurementService} from './services/measurement.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MeasurementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
