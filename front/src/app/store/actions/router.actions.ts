const UPDATE_LOCATION = '[Router] Update location';

export function updateLocationAction(path: string) {
  return {
    type: UPDATE_LOCATION,
    payload: {path}
  };
}
