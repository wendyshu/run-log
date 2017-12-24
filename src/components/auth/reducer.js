import { SEND_LOGIN, RECEIVE_LOGIN } from './actions';

const INITIAL_STATE = {
  loading: false,
  authenticated: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_LOGIN:
    return {
      ...state,
      loading: true
    };
  case RECEIVE_LOGIN:
    return {
      ...state,
      loading: false,
      authenticated: true // TODO: implement failure
    };
  default:
    return state;
  }
}
