import config from 'run-log/config.json';

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
    const url = `${config.baseUrl}/api/v1/login?user=${username}&password=${password}`;
    fetch(url, {
      credentials: 'include'
    }).then(res => dispatch(receiveLoginAction(res)));
  };
}
