import {
  SEND_LOGIN,
  RECEIVE_LOGIN_SUCCESS,
  RECEIVE_LOGIN_FAIL,
  SEND_CHECK_SESSION,
  RECEIVE_CHECK_SESSION_SUCCESS,
  RECEIVE_CHECK_SESSION_FAIL
} from './actions';

export const INITIAL_STATE = {
  loading: false,
  authenticated: false,
  message: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEND_LOGIN:
      return {
        ...state,
        loading: true,
        authenticated: false,
        message: null,
      };
    case RECEIVE_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        message: null,
      };
    case RECEIVE_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        authenticated: false,
        message: action.message,
      };
    case SEND_CHECK_SESSION:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_CHECK_SESSION_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
      };
    case RECEIVE_CHECK_SESSION_FAIL:
      return {
        ...state,
        loading: false,
        authenticated: false,
      };
    default:
      return state;
  }
}
