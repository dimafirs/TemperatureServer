import { Component, OnInit } from '@angular/core';
import {MeasurementService} from '../../services/measurement.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {

  constructor(public measurementService: MeasurementService) { }

  ngOnInit() {

  }

}
