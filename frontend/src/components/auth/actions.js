import config from 'run-log/config.json';

export const SEND_LOGIN = 'SEND_LOGIN',
  RECEIVE_LOGIN_SUCCESS = 'RECEIVE_LOGIN_SUCCESS',
  RECEIVE_LOGIN_FAIL = 'RECEIVE_LOGIN_FAIL',
  SEND_CHECK_SESSION = 'SEND_CHECK_SESSION',
  RECEIVE_CHECK_SESSION_SUCCESS = 'RECEIVE_CHECK_SESSION_SUCCESS',
  RECEIVE_CHECK_SESSION_FAIL = 'RECEIVE_CHECK_SESSION_FAIL';

function sendLoginAction(username, password) {
  return {
    type: SEND_LOGIN,
    username,
    password,
  };
}

function receiveLoginAction({ ok, statusText }) {
  return {
    type: ok ? RECEIVE_LOGIN_SUCCESS : RECEIVE_LOGIN_FAIL,
    message: statusText,
  };
}

// TODO: implement authentication using Amazon Cognito

// export function login(username, password) {
//   return dispatch => {
//     dispatch(sendLoginAction(username, password));
//     const url = `${
//       config.baseUrl
//     }/api/v1/login?user=${username}&password=${password}`;
//     fetch(url, {
//       credentials: 'include',
//     }).then(res => dispatch(receiveLoginAction(res)));
//   };
// }

// TODO: remove this stub

export function login(username, password) {
  return dispatch => {
    dispatch(sendLoginAction(username, password));
    setTimeout(() => dispatch(receiveLoginAction({ok: true})), 1000);
  };
}

function sendCheckSessionAction() {
  return {
    type: SEND_CHECK_SESSION
  };
}

function receiveCheckSessionAction(ok) {
  return {
    type: ok ? RECEIVE_CHECK_SESSION_SUCCESS : RECEIVE_CHECK_SESSION_FAIL
  };
}

export function checkSession() {
  return dispatch => {
    dispatch(sendCheckSessionAction());
    const url = `${config.baseUrl}/api/v1/session`;
    return fetch(url, {
      credentials: 'include',
    }).then(res => dispatch(receiveCheckSessionAction(res.ok)))
      .catch(() => dispatch(receiveCheckSessionAction(false)));
  };
}
