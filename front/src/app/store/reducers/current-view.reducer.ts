import {Reducer} from 'redux';
import {Duration, DURATIONS} from '../../model/duration';
import {CHANGE_DURATION} from '../actions/current-view.actions';

export interface CurrentViewState {
  readonly duration: Duration;
}

export const INITIAL_STATE: CurrentViewState = {
  duration: DURATIONS[2]
};

export const currentViewReducer: Reducer<CurrentViewState> = (state: CurrentViewState = INITIAL_STATE, action): CurrentViewState => {
  switch (action.type) {
    case CHANGE_DURATION: {
      return {...state, duration: action.payload.duration}
    }
    default:
      return state;
  }
};
