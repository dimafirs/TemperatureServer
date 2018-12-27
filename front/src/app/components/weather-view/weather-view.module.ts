import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherViewComponent} from './weather-view.component';
import {WeatherRouting} from './weather-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {TableViewComponent} from './table-view/table-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {GraphViewComponent} from './graph-view/graph-view.component';
import { MatSortModule } from '@angular/material';
import { GraphAlternativeComponent } from './graph-alternative/graph-alternative.component';

@NgModule({
  declarations: [WeatherViewComponent, TableViewComponent, GraphViewComponent, GraphAlternativeComponent],
  imports: [
    CommonModule,
    WeatherRouting,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSortModule
  ]
})
export class WeatherViewModule { }
