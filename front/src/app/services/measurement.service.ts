import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Measurement} from '../model/Measurement';
import {HttpClient} from '@angular/common/http';
import {Duration} from '../model/duration';
import {catchError} from 'rxjs/operators';

@Injectable()
export class MeasurementService {

  API_MEASUREMENT_URL: string = 'api/measurement/';

  MEASUREMENTS_URL: string = this.API_MEASUREMENT_URL + 'interval';

  CURRENT_MEASUREMENT_URL: string = this.API_MEASUREMENT_URL + 'current';

  DAY_AVERAGE_URL: string = this.API_MEASUREMENT_URL + 'average' ;

  constructor(private http: HttpClient) {
  }

  fetchMeasurements(duration: Duration): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(this.MEASUREMENTS_URL, {
      params: {
        duration: duration.value.toString(),
        unit: 'h'
      }
    }).pipe(catchError(error => throwError(error)));
  }

  getLastMeasurement(): Observable<Measurement> {
    return this.http.get<Measurement>(this.CURRENT_MEASUREMENT_URL).pipe(catchError(error => throwError(error)));
  }

  getDayAverage(): Observable<Measurement> {
    return this.http.get<Measurement>(this.DAY_AVERAGE_URL).pipe(catchError(error => throwError(error)));
  }
}
