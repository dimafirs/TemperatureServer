import { NgModule } from '@angular/core';
import {MeasurementsEpic} from './measurements.epic';
import {MetadataEpic} from './metadata.epic';

@NgModule({
  providers: [
    MeasurementsEpic,
    MetadataEpic
  ]
})
export class EpicsModule { }
