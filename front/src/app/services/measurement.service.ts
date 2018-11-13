import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Measurement} from '../model/Measurement';

@Injectable()
export class MeasurementService {

  constructor() {
  }

  fetchMeasuremenrs(): Observable<Measurement[]> {
    return null;
  }
}
