import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './components/weather-view/weather-view.module#WeatherViewModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
