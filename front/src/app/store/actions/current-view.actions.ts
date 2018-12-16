import {Duration} from '../../model/duration';
import {fetchMeasurementsAction} from './measurement.actions';

export const CHANGE_DURATION = '[Current view] Change duration';

export function changeDurationAction(duration: Duration) {
  return {
    type: CHANGE_DURATION,
    payload: {duration}
  };
}

export function changeDurationThunk(duration: Duration) {
  return dispatch => {
    dispatch(changeDurationAction(duration));
    return dispatch(fetchMeasurementsAction(duration));
  }
}
