import { SEND_LOGIN, RECEIVE_LOGIN_SUCCESS, RECEIVE_LOGIN_FAIL } from './actions';

const INITIAL_STATE = {
  loading: false,
  authenticated: false,
  message: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_LOGIN:
    return {
      ...state,
      loading: true,
      authenticated: false,
      message: null
    };
  case RECEIVE_LOGIN_SUCCESS:
    return {
      ...state,
      loading: false,
      authenticated: true,
      message: null
    };
  case RECEIVE_LOGIN_FAIL:
    return {
      ...state,
      loading: false,
      authenticated: false,
      message: action.message
    };
  default:
    return state;
  }
}
