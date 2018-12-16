import {Measurement} from '../../model/Measurement';
import {Reducer} from 'redux';
import {
  FETCH_MEASUREMENTS,
  FETCH_MEASUREMENTS_FAILURE,
  FETCH_MEASUREMENTS_SUCCESS,
  GET_AVERAGE_MEASUREMENT,
  GET_AVERAGE_MEASUREMENT_FAILURE,
  GET_AVERAGE_MEASUREMENT_SUCCESS,
  GET_LAST_MEASUREMENT,
  GET_LAST_MEASUREMENT_FAILURE,
  GET_LAST_MEASUREMENT_SUCCESS
} from '../actions/measurement.actions';

export interface MeasurementsState {
  readonly measurements: Measurement[];
  readonly isMeasurementsLoading: boolean;
  readonly lastMeasurement: Measurement;
  readonly isLastLoading: boolean;
  readonly averageMeasurement: Measurement;
  readonly isAverageLoading: boolean;
}

export const INITIAL_STATE: MeasurementsState = {
  measurements: [],
  isMeasurementsLoading: false,
  lastMeasurement: null,
  isLastLoading: false,
  averageMeasurement: null,
  isAverageLoading: false
};

export const measurementsReducer: Reducer<MeasurementsState> = (state: MeasurementsState = INITIAL_STATE, action): MeasurementsState => {
  switch (action.type) {
    case FETCH_MEASUREMENTS: {
      return {...state, isMeasurementsLoading: true}
    }
    case FETCH_MEASUREMENTS_SUCCESS: {
      return {...state, isMeasurementsLoading: false, measurements: action.payload.measurements}
    }
    case FETCH_MEASUREMENTS_FAILURE: {
      return {...state, isMeasurementsLoading: false}
    }
    case GET_LAST_MEASUREMENT: {
      return {...state, isLastLoading: true}
    }
    case GET_LAST_MEASUREMENT_SUCCESS: {
      return {...state, isLastLoading: false, lastMeasurement: action.payload.measurement}
    }
    case GET_LAST_MEASUREMENT_FAILURE: {
      return {...state, isLastLoading: false}
    }
    case GET_AVERAGE_MEASUREMENT: {
      return {...state, isAverageLoading: true}
    }
    case GET_AVERAGE_MEASUREMENT_SUCCESS: {
      return {...state, isAverageLoading: false, averageMeasurement: action.payload.measurement}
    }
    case GET_AVERAGE_MEASUREMENT_FAILURE: {
      return {...state, isAverageLoading: false}
    }
    default:
      return state;
  }
};
