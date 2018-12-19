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
  duration: Duration;
  @select(['measurements', 'averageMeasurement'])
  averageMeasurement$: Measurement;
  @select(['measurements', 'lastMeasurement'])
  lastMeasurement$: Measurement;
  durations = DURATIONS;
  chartTemperatureData: { time: Date, temperature: number }[] = [];
  chartHumilityData: { time: Date, humility: number }[] = [];

  private temperatureChart: am4charts.XYChart;
  private humilityChart: am4charts.XYChart;

  constructor(private zone: NgZone,
              private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.measurements$.subscribe(measurements => {
      this.measurements = measurements;
      this.chartTemperatureData = [];
      this.chartHumilityData = [];
      measurements.forEach(measurement => {
        this.chartTemperatureData.push({
          time: measurement.measurementTime,
          temperature: measurement.temperature
        });
        this.chartHumilityData.push({
          time: measurement.measurementTime,
          humility: measurement.humility
        });
      });
      if (this.temperatureChart) {
        this.temperatureChart.data = this.chartTemperatureData;
      }
      if (this.humilityChart) {
        this.humilityChart.data = this.chartHumilityData;
      }
    });
  }

  ngAfterViewInit() {
    this.createTemperatureChart();
    this.createHumilityChart();
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
      dateAxis.renderer.minGridDistance = 60;
      // dateAxis.baseInterval = {timeUnit: 'hour', count: 1};
      dateAxis.dateFormatter = new am4core.DateFormatter();
      dateAxis.dateFormatter.dateFormat = 'MM-dd HH:mm';

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

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

  createHumilityChart(): void {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('chart-humility-div', am4charts.XYChart);

      chart.data = this.chartHumilityData;

// Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      // dateAxis.baseInterval = {timeUnit: 'hour', count: 1};
      dateAxis.dateFormatter = new am4core.DateFormatter();
      dateAxis.dateFormatter.dateFormat = 'MM-dd HH:mm';

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'humility';
      series.dataFields.dateX = 'time';
      series.tooltipText = '{humility}';

      series.tooltip.pointerOrientation = 'vertical';

      chart.cursor = new am4charts.XYCursor();

//chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarX = new am4core.Scrollbar();


      this.humilityChart = chart;
    });
  }

}
