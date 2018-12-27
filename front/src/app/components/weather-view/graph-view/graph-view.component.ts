import {AfterViewInit, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Duration, DURATIONS} from '../../../model/duration';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import {NgRedux, select} from '@angular-redux/store';
import {Measurement} from '../../../model/Measurement';
import {Observable, Subscription} from 'rxjs';
import {changeDurationThunk} from '../../../store/actions/current-view.actions';
import {AppState} from '../../../store';
import {Chart} from 'chart.js';

am4core.useTheme(am4themes_dark);

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html'
})
export class GraphViewComponent implements OnInit, AfterViewInit, OnDestroy {

  @select(['measurements', 'measurements'])
  measurements$: Observable<Measurement[]>;
  measurements: Measurement[];
  measurementsSubscription: Subscription;
  @select(['currentView', 'duration'])
  duration$: Observable<Duration>;
  @select(['measurements', 'averageMeasurement'])
  averageMeasurement$: Observable<Measurement>;
  @select(['measurements', 'lastMeasurement'])
  lastMeasurement$: Observable<Measurement>;
  durations = DURATIONS;
  chartTemperatureData = [];
  chartHumidityData = [];

  private temperatureChart: Chart;
  private humidityChart: Chart;

  constructor(private zone: NgZone,
              private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.measurements$.subscribe(measurements => {
      this.measurements = measurements.map(x => Object.assign({}, x ));
      this.chartTemperatureData = [];
      this.chartHumidityData = [];
      this.measurements
        .sort((a, b) => a.measurementTime > b.measurementTime ? 1 : a.measurementTime < b.measurementTime ? -1 : 0)
        .forEach(measurement => {
          this.chartTemperatureData.push({
            x: String(measurement.measurementTime),
            y: String(measurement.temperature)
          });
          this.chartHumidityData.push({
            x: String(measurement.measurementTime),
            y: String(measurement.humidity)
          });
        });
      if (this.temperatureChart) {
        this.temperatureChart.data.datasets.forEach((dataset) => {
          dataset.data = this.chartTemperatureData;
        });
        this.temperatureChart.update();
      }
      if (this.humidityChart) {
        this.humidityChart.data.datasets.forEach((dataset) => {
          dataset.data = this.chartHumidityData;
        });
        this.humidityChart.update();
      }
      console.log(this.chartHumidityData);
    });
  }

  ngAfterViewInit() {
    this.createTemperatureChart();
    this.createHumidityChart();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      this.temperatureChart.destroy();
      this.humidityChart.destroy();

    });
    if (this.measurementsSubscription) {
      this.measurementsSubscription.unsubscribe();
    }
  }

  onSelectionChange(event) {
    this.ngRedux.dispatch<any>(changeDurationThunk(event.value));
  }

  createTemperatureChart(): void {
    this.zone.runOutsideAngular(() => {
      this.temperatureChart = new Chart('temperature', {
        type: 'line',
        data: {
          datasets: [
            {
              data: this.chartTemperatureData,
              borderColor: '#ba0e11',
              fill: false,
              label: 'Temperature'
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'time',
              distribution: 'linear',
              time: {
                // unit: 'second'
                displayFormats: {
                  quarter: 'HH:mm'
                }
              }
            }]
          }
        }
      });
    });
  }

  createHumidityChart(): void {
    this.zone.runOutsideAngular(() => {
      this.humidityChart = new Chart('humidity', {
        type: 'line',
        data: {
          datasets: [
            {
              data: this.chartHumidityData,
              borderColor: '#1aa1ba',
              fill: false,
              label: 'Humidity'
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'time',
              distribution: 'linear',
              time: {
                // unit: 'second'
                displayFormats: {
                  quarter: 'HH:mm'
                }
              }
            }]
          }
        }
      });
    });
  }
}
