export const GET_CURRENT_VERSION = '[Metadata] Get current version';
export const GET_CURRENT_VERSION_SUCCESS = '[Metadata] Get current version success';
export const GET_CURRENT_VERSION_FAILURE = '[Metadata] Get current version failed';

export function getCurrentVersionAction() {
  return {
    type: GET_CURRENT_VERSION
  };
}

export function getCurrentVersionSuccessAction(currentVersion: string) {
  return {
    type: GET_CURRENT_VERSION_SUCCESS,
    payload: {currentVersion}
  };
}

export function getCurrentVersionFailureAction() {
  return {
    type: GET_CURRENT_VERSION_FAILURE
  };
}

