import {Reducer} from 'redux';
import {GET_CURRENT_VERSION, GET_CURRENT_VERSION_FAILURE, GET_CURRENT_VERSION_SUCCESS} from '../actions/metadata.actions';

export interface MetadataState {
  readonly currentVersion: string;
  readonly isVersionLoading: boolean;
}

export const INITIAL_STATE: MetadataState = {
  currentVersion: null,
  isVersionLoading: false
};

export const metadataReducer: Reducer<MetadataState> = (state: MetadataState = INITIAL_STATE, action): MetadataState => {
  switch (action.type) {
    case GET_CURRENT_VERSION: {
      return {...state, isVersionLoading: true}
    }
    case GET_CURRENT_VERSION_SUCCESS: {
      return {...state, currentVersion: action.payload.currentVersion, isVersionLoading: false}
    }
    case GET_CURRENT_VERSION_FAILURE: {
      return {...state, isVersionLoading: false}
    }
    default:
      return state;
  }
};
