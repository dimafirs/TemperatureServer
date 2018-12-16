import {Reducer} from 'redux';
import {Duration} from '../../model/duration';
import {CHANGE_DURATION} from '../actions/current-view.actions';

export interface CurrentViewState {
  readonly duration: Duration;
}

export const INITIAL_STATE: CurrentViewState = {
  duration: {value: 12, name: '12 hours'} as Duration
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
