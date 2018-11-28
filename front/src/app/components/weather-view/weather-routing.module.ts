import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherViewComponent} from './weather-view.component';

const ROUTES: Routes = [
  {
    path: '',
    component: WeatherViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class WeatherRouting {
}
