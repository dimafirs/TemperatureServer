import {combineReducers, Reducer} from 'redux';
import {AppState} from '../index';
import { routerReducer } from '@angular-redux/router';
import {currentViewReducer} from './current-view.reducer';
import {measurementsReducer} from './measurements.reducer';
import {metadataReducer} from './metadata.reducer';

export const reducers: Reducer = combineReducers<AppState>({
  route: routerReducer,
  currentView: currentViewReducer,
  measurements: measurementsReducer,
  metadata: metadataReducer
});
