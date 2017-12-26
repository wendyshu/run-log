export const SEND_LOGIN = 'SEND_LOGIN',
  RECEIVE_LOGIN_SUCCESS = 'RECEIVE_LOGIN_SUCCESS',
  RECEIVE_LOGIN_FAIL = 'RECEIVE_LOGIN_FAIL';

const MILLIS_WAIT = 350;

function sendLoginAction(username, password) {
  return {
    type: SEND_LOGIN,
    username,
    password,
  };
}

function receiveLoginAction([success, msg]) {
  return {
    type: success ? RECEIVE_LOGIN_SUCCESS : RECEIVE_LOGIN_FAIL,
    message: msg,
  };
}

export function login(username, password) {
  return dispatch => {
    dispatch(sendLoginAction(username, password));
    return new Promise(resolve => {
      // TODO: actual auth
      const response =
        username === 'demo' && password === 'demo'
          ? [true, null]
          : [false, 'Unrecognized username or password.'];
      setTimeout(
        () => resolve(dispatch(receiveLoginAction(response))),
        MILLIS_WAIT
      ); // Simulate xhr
    });
  };
}
