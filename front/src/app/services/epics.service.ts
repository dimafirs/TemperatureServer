import {Injectable} from '@angular/core';
import {combineEpics} from 'redux-observable';
import {MeasurementsEpic} from '../store/epics/measurements.epic';
import {MetadataEpic} from '../store/epics/metadata.epic';

@Injectable()
export class EpicsService {

  constructor(private measurementsEpic: MeasurementsEpic,
              private metadataEpic: MetadataEpic) {
  }

  getEpics() {
    return combineEpics(
      this.measurementsEpic.fetchMeasurements$,
      this.measurementsEpic.getAverageMeasurement$,
      this.measurementsEpic.getLastMeasurement$,

      this.metadataEpic.getVersion$
    );
  }
}
