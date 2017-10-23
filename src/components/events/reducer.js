const INITIAL_STATE = {
  data: []
};

const transformEvent = (eventId, transformer) => {
  return (e) => {
    if (e['@id'] === eventId) {
      return transformer(e);
    } else {
      return e;
    }
  };
};

/**
 * Reducer function for books application.
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_FAVORITE':
    const fave = transformEvent(action.eventId, (e) => {
      return { ...e, favorite: action.favorite };
    });
    return Object.assign({}, state, {
      data: state.data.map(fave)
    });
  case 'SEND_ADD_EVENT':
  case 'SEND_EDIT_EVENT':
  case 'SEND_DELETE_EVENT':
  case 'SEND_GET_EVENTS':
    return Object.assign({}, state, {
      loading: true
    });
  case 'RECEIVE_ADD_EVENT':
    return Object.assign({}, state, {
      loading: false,
      data: [ action.event, ...state.data ]
    });
  case 'RECEIVE_EDIT_EVENT':
    const edit = transformEvent(action.event['@id'], () => action.event);
    return Object.assign({}, state, {
      loading: false,
      data: state.data.map(edit)
    });
  case 'RECEIVE_DELETE_EVENT':
    return Object.assign({}, state, {
      loading: false,
      data: state.data.filter(e => e['@id'] !== action.eventId)
    });
  case 'RECEIVE_GET_EVENTS':
    return Object.assign({}, state, {
      loading: false,
      data: action.payload.events
    });
  default:
    return state;
  }
}
