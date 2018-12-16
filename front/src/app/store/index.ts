import {MeasurementsState} from './reducers/measurements.reducer';
import {CurrentViewState} from './reducers/current-view.reducer';
import {MetadataState} from './reducers/metadata.reducer';

export interface AppState {
  route?: string;
  measurements?: MeasurementsState;
  currentView?: CurrentViewState;
  metadata?: MetadataState;
}
