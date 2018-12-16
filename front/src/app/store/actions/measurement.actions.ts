import {Duration} from '../../model/duration';
import {Measurement} from '../../model/Measurement';

export const FETCH_MEASUREMENTS: string = '[Measurements] Fetch';
export const FETCH_MEASUREMENTS_SUCCESS: string = '[Measurements] Fetch success';
export const FETCH_MEASUREMENTS_FAILURE: string = '[Measurements] Fetch failed';

export const GET_LAST_MEASUREMENT: string = '[Measurements] Get last';
export const GET_LAST_MEASUREMENT_SUCCESS: string = '[Measurements] Get last success';
export const GET_LAST_MEASUREMENT_FAILURE: string = '[Measurements] Get last failed';

export const GET_AVERAGE_MEASUREMENT: string = '[Measurements] Get average';
export const GET_AVERAGE_MEASUREMENT_SUCCESS: string = '[Measurements] Get average success';
export const GET_AVERAGE_MEASUREMENT_FAILURE: string = '[Measurements] Get average failed';

export function fetchMeasurementsAction(duration: Duration) {
  return {
    type: FETCH_MEASUREMENTS,
    payload: {duration}
  };
}

export function fetchMeasurementsSuccessAction(measurements: Measurement[]) {
  return {
    type: FETCH_MEASUREMENTS_SUCCESS,
    payload: {measurements}
  };
}

export function fetchMeasurementsFailureAction() {
  return {
    type: FETCH_MEASUREMENTS_FAILURE
  };
}

export function getLastMeasurementAction() {
  return {
    type: GET_LAST_MEASUREMENT
  };
}

export function getLastMeasurementSuccesAction(measurement: Measurement) {
  return {
    type: GET_LAST_MEASUREMENT_SUCCESS,
    payload: {measurement}
  };
}

export function getLastMeasurementFailureAction() {
  return {
    type: GET_LAST_MEASUREMENT_FAILURE
  };
}

export function getAverageMeasurementAction() {
  return {
    type: GET_AVERAGE_MEASUREMENT
  };
}
export function getAverageMeasurementSuccessAction(measurement: Measurement) {
  return {
    type: GET_AVERAGE_MEASUREMENT_SUCCESS,
    payload: {measurement}
  };
}

export function getAverageMeasurementFailureAction() {
  return {
    type: GET_AVERAGE_MEASUREMENT_FAILURE
  };
}

export function initMeasutementsThunk() {
  return (dispatch, getState) => {
    dispatch(fetchMeasurementsAction(getState().currentView.duration));
    dispatch(getLastMeasurementAction());
    return dispatch(getAverageMeasurementAction());
  }
}

