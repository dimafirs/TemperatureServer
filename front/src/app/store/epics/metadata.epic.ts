import {Injectable} from '@angular/core';
import {MetadataService} from '../../services/metadata.service';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {ActionsObservable} from 'redux-observable';
import {FETCH_MEASUREMENTS, fetchMeasurementsFailureAction} from '../actions/measurement.actions';
import {AnyAction} from 'redux';
import {of} from 'rxjs';
import {GET_CURRENT_VERSION, getCurrentVersionFailureAction, getCurrentVersionSuccessAction} from '../actions/metadata.actions';

@Injectable()
export class MetadataEpic {
  constructor (private metadataService: MetadataService){}

  getVersion$ = (action$: ActionsObservable<AnyAction>) => {
    return action$.ofType(GET_CURRENT_VERSION).pipe(
      switchMap(() => {
        return this.metadataService
          .getCurrentVersion()
          .pipe(
            mergeMap(version => of(getCurrentVersionSuccessAction(version.version))),
            catchError(error => {
				console.log(error);
			return of(getCurrentVersionFailureAction());})
          );
      })
    );
  }
}
