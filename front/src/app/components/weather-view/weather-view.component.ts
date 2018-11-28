import { Component, OnInit } from '@angular/core';
import {MeasurementService} from '../../services/measurement.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['../../../assets/components/weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {

  constructor(public measurementService: MeasurementService) { }

  ngOnInit() {

  }

}
