import {AfterViewInit, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Duration, DURATIONS} from '../../../model/duration';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import {NgRedux, select} from '@angular-redux/store';
import {Measurement} from '../../../model/Measurement';
import {Observable, Subscription} from 'rxjs';
import {changeDurationAction, changeDurationThunk} from '../../../store/actions/current-view.actions';
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
  averageMeasurement: Measurement;
  @select(['measurements', 'lastMeasurement'])
  lastMeasurement: Measurement;
  durations = DURATIONS;

  private chart: am4charts.XYChart;

  constructor(private zone: NgZone,
              private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.measurements$.subscribe(measurements => {
      this.measurements = measurements;
    })
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('chartdiv', am4charts.XYChart);

      let data = [];

      this.measurements.forEach(measurement => {
        data.push({time: measurement.measurementTime, temperature: measurement.temperature})
      });

      chart.data = data;

// Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      // dateAxis.renderer.minGridDistance = 60;

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


      this.chart = chart;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
    if (this.measurementsSubscription) {
      this.measurementsSubscription.unsubscribe();
    }
  }

  onSelectionChange(event) {
    this.ngRedux.dispatch<any>(changeDurationThunk(event.value));
  }

}
