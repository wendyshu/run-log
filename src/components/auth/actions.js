export const SEND_LOGIN = 'SEND_LOGIN',
  RECEIVE_LOGIN = 'RECEIVE_LOGIN';

const MILLIS_WAIT = 350;

function sendLoginAction(username, password) {
  return {
    type: SEND_LOGIN,
    username,
    password
  };
}

function receiveLoginAction() {
  // TODO: actual auth
  return {
    type: RECEIVE_LOGIN,
    success: true,
    message: null
  };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch(sendLoginAction(username, password));
    return new Promise((resolve) => {
      setTimeout(() => resolve(dispatch(receiveLoginAction())), MILLIS_WAIT); // Simulate xhr
    });
  };
}
