export const SEND_LOGIN = 'SEND_LOGIN',
  RECEIVE_LOGIN_SUCCESS = 'RECEIVE_LOGIN_SUCCESS',
  RECEIVE_LOGIN_FAIL = 'RECEIVE_LOGIN_FAIL';

function sendLoginAction(username, password) {
  return {
    type: SEND_LOGIN,
    username,
    password,
  };
}

function receiveLoginAction({status, statusText}) {
  return {
    type: status === 200 ? RECEIVE_LOGIN_SUCCESS : RECEIVE_LOGIN_FAIL,
    message: statusText,
  };
}

export function login(username, password) {
  return dispatch => {
    dispatch(sendLoginAction(username, password));
    // TODO: configurable
    fetch(`http://localhost:8080/api/v1/login?user=${username}&password=${password}`).then((res) => {
      dispatch(receiveLoginAction(res));
    });
  };
}
