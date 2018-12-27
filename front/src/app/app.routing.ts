import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
  //   redirectTo: '/weather',
    //   //   pathMatch: 'full'
    //   // },
    //   // {
    //   //   path: 'weather',
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
