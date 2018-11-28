import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherViewComponent} from './weather-view.component';
import {WeatherRouting} from './weather-routing.module';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [WeatherViewComponent],
  imports: [
    CommonModule,
    WeatherRouting,
    MatTabsModule
  ]
})
export class WeatherViewModule { }
