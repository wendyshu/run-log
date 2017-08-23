export const LOAD_ACTIVITY = 'LOAD_ACTIVITY';

function requestActivity() {
  return {
    type: LOAD_ACTIVITY
  };
}

export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';
function receiveActivity(json) {
  return {
    type: RECEIVE_ACTIVITY,
    payload: json,
    receivedAt: Date.now()
  };
}

import ActivityJson from '../../assets/activity.json';

export function loadActivity() {
  return function (dispatch) {
    dispatch(requestActivity());
    return new Promise(function(resolve) {
      setTimeout(() => resolve(dispatch(receiveActivity(ActivityJson))), 1000); // Simulate xhr
    });
  };
}
