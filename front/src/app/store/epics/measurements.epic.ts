import {Injectable} from '@angular/core';
import {MeasurementService} from '../../services/measurement.service';
import {ActionsObservable} from 'redux-observable';
import {AnyAction} from 'redux';
import {
  FETCH_MEASUREMENTS,
  fetchMeasurementsFailureAction,
  fetchMeasurementsSuccessAction,
  GET_LAST_MEASUREMENT,
  getAverageMeasurementFailureAction,
  getAverageMeasurementSuccessAction,
  getLastMeasurementFailureAction,
  getLastMeasurementSuccesAction
} from '../actions/measurement.actions';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class MeasurementsEpic {
  constructor (private measurementsService: MeasurementService) {
  }

  fetchMeasurements$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(FETCH_MEASUREMENTS).pipe(
      switchMap(({payload}) => {
        return this.measurementsService
          .fetchMeasurements(payload.duration)
          .pipe(
            mergeMap(measurements => of(fetchMeasurementsSuccessAction(measurements))),
            catchError(error => of(fetchMeasurementsFailureAction()))
          );
      })
    );
  }

  getLastMeasurement$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(GET_LAST_MEASUREMENT).pipe(
      switchMap(({payload}) => {
        return this.measurementsService
          .getLastMeasurement()
          .pipe(
            mergeMap(measurement => of(getLastMeasurementSuccesAction(measurement))),
            catchError(error => of(getLastMeasurementFailureAction()))
          );
      })
    );
  }

  getAverageMeasurement$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(GET_LAST_MEASUREMENT).pipe(
      switchMap(({payload}) => {
        return this.measurementsService
          .getDayAverage()
          .pipe(
            mergeMap(measurement => of(getAverageMeasurementSuccessAction(measurement))),
            catchError(error => of(getAverageMeasurementFailureAction()))
          );
      })
    );
  }
}
