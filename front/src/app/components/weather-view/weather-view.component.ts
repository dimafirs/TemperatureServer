import {Component, OnInit} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../../store';
import {initMeasutementsThunk} from '../../store/actions/measurement.actions';
import {getCurrentVersionAction} from '../../store/actions/metadata.actions';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['../../../assets/components/weather-view.component.scss']
})
export class WeatherViewComponent implements OnInit {

  constructor(private NgRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.NgRedux.dispatch<any>(initMeasutementsThunk());
    this.NgRedux.dispatch(getCurrentVersionAction());
  }

}
