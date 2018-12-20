import {Component, OnInit} from '@angular/core';
import {Measurement} from '../../../model/Measurement';
import {Duration, DURATIONS} from '../../../model/duration';
import {NgRedux, select} from '@angular-redux/store';
import {AppState} from '../../../store';
import {Observable} from 'rxjs';
import {changeDurationAction, changeDurationThunk} from '../../../store/actions/current-view.actions';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html'
})
export class TableViewComponent implements OnInit {

  @select(['measurements', 'measurements'])
  measurements$: Observable<Measurement[]>;
  @select(['currentView', 'duration'])
  duration$: Duration;
  @select(['measurements', 'averageMeasurement'])
  averageMeasurement$: Measurement;
  @select(['measurements', 'lastMeasurement'])
  lastMeasurement$: Measurement;
  columnsToDisplay = ['date', 'temperature', 'humidity'];
  durations = DURATIONS;

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

  onSelectionChange(event) {
    console.log(event);
    this.ngRedux.dispatch<any>(changeDurationThunk(event.value));
  }
}
