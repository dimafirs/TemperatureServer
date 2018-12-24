import {AfterViewInit, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Duration, DURATIONS} from '../../../model/duration';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import {NgRedux, select} from '@angular-redux/store';
import {Measurement} from '../../../model/Measurement';
import {Observable, Subscription} from 'rxjs';
import {changeDurationThunk} from '../../../store/actions/current-view.actions';
import {AppState} from '../../../store';

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
  chartTemperatureData: { time: Date, temperature: number }[] = [];
  chartHumidityData: { time: Date, humidity: number }[] = [];

  private temperatureChart: am4charts.XYChart;
  private humidityChart: am4charts.XYChart;

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
          time: measurement.measurementTime,
          temperature: measurement.temperature
        });
        this.chartHumidityData.push({
          time: measurement.measurementTime,
          humidity: measurement.humidity
        });
      });
      if (this.temperatureChart) {
        this.temperatureChart.data = this.chartTemperatureData;
      }
      if (this.humidityChart) {
        this.humidityChart.data = this.chartHumidityData;
      }
    });
  }

  ngAfterViewInit() {
    this.createTemperatureChart();
    this.createHumidityChart();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.temperatureChart) {
        this.temperatureChart.dispose();
      }
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
      let chart = am4core.create('chart-temperature-div', am4charts.XYChart);

      chart.data = this.chartTemperatureData;

// Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 100;
      // dateAxis.baseInterval = {timeUnit: 'hour', count: 1};
      dateAxis.baseInterval = {timeUnit: 'minute', count: 1};
      dateAxis.dateFormats.setKey('day', 'dd/MM');
      dateAxis.dateFormats.setKey('hour', 'HH:mm \n dd/MM');
      dateAxis.title.text = 'Date';

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = 'Temperature';
// Create series
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'temperature';
      series.dataFields.dateX = 'time';
      series.tooltipText = '{temperature}';

      series.tooltip.pointerOrientation = 'vertical';

      chart.cursor = new am4charts.XYCursor();

//chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarX = new am4core.Scrollbar();


      this.temperatureChart = chart;
    });
  }

  createHumidityChart(): void {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('chart-humidity-div', am4charts.XYChart);

      chart.data = this.chartHumidityData;

// Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 100;
      dateAxis.baseInterval = {timeUnit: 'minute', count: 1};
      // dateAxis.dateFormatter = new am4core.DateFormatter();
      dateAxis.dateFormats.setKey('day', 'dd/MM');
      dateAxis.dateFormats.setKey('hour', 'HH:mm \n dd/MM');
      dateAxis.title.text = 'Date';

      // dateAxis.dateFormats.setKey('hour', 'dd-MM HH:mm');
      // dateAxis.dateFormats.setKey('minute', 'MM-dd HH:mm');
      // dateAxis.dateFormats.setKey('second', 'MM-dd HH:mm');
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = 'Humidity';
// Create series
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'humidity';
      series.dataFields.dateX = 'time';
      series.tooltipText = '{humidity}';

      series.tooltip.pointerOrientation = 'vertical';

      chart.cursor = new am4charts.XYCursor();

//chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarX = new am4core.Scrollbar();


      this.humidityChart = chart;
    });
  }

}
