import { AfterViewInit, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs';
import { Measurement } from '../../../model/Measurement';
import { Duration, DURATIONS } from '../../../model/duration';
import { AppState } from '../../../store';
import { changeDurationThunk } from '../../../store/actions/current-view.actions';
import Chart from 'chart.js';

@Component({
  selector: 'app-graph-alternative',
  templateUrl: './graph-alternative.component.html'
})
export class GraphAlternativeComponent implements OnInit, AfterViewInit, OnDestroy {
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
  chartTemperatureData: { x: Date, y: number }[] = [];
  chartHumidityData: { x: Date, y: number }[] = [];

  @ViewChild('temperatureChart')
  ctxTemperature;

  @ViewChild('humidityChart')
  ctxHumidity;

  temperatureChart;
  humidityChart;

  constructor(private zone: NgZone,
              private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.measurements$.subscribe(measurements => {
      this.measurements = measurements;
      this.chartTemperatureData = [];
      this.chartHumidityData = [];
      measurements.forEach(measurement => {
        this.chartTemperatureData.push({
          x: measurement.measurementTime,
          y: measurement.temperature
        });
        this.chartHumidityData.push({
          x: measurement.measurementTime,
          y: measurement.humidity
        });
      });
      if (this.temperatureChart) {
        this.temperatureChart.data.datasets.forEach((dataset) => {
          dataset.data= this.chartTemperatureData;
        });
        this.temperatureChart.update();
      }
      if (this.humidityChart) {
        this.humidityChart.data.datasets.forEach((dataset) => {
          dataset.data= this.chartHumidityData;
        });
        this.humidityChart.update();
      }
    });
  }

  ngAfterViewInit() {
    this.createTemperatureChart();
    this.createHumidityChart();
  }

  ngOnDestroy() {
    // this.zone.runOutsideAngular(() => {
    //   if (this.temperatureChart) {
    //     this.temperatureChart.dispose();
    //   }
    // });
    if (this.measurementsSubscription) {
      this.measurementsSubscription.unsubscribe();
    }
  }

  onSelectionChange(event) {
    this.ngRedux.dispatch<any>(changeDurationThunk(event.value));
  }

  createTemperatureChart(): void {
    console.dir(this.chartTemperatureData);
    this.temperatureChart = new Chart(this.ctxTemperature.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Temperature',
          data: this.chartTemperatureData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
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
  }

  createHumidityChart(): void {
    console.dir(this.chartTemperatureData);
    this.humidityChart = new Chart(this.ctxHumidity.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Humidity',
          data: this.chartHumidityData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
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
  }
}
