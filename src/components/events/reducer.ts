import { objAssign, Transformer } from 'run-log/scripts/utils/types';
import { TEventAction } from './actions';

class State {
  public data: any[]; // TODO: event type
  public loading?: boolean;
}

const INITIAL_STATE = {
  data: [],
};

const transformEvent = (eventId: string, transformer: Transformer<any, any>) => { // TODO: event type
  return (e: any) => { // TODO: event type
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
export default function(state: State = INITIAL_STATE, action: TEventAction): State {
  switch (action.type) {
    case 'SET_FAVORITE':
      const fave = transformEvent(action.eventId, (e) => {
        return { ...e, favorite: action.favorite };
      });
      return {
        ...state,
        data: state.data.map(fave),
      };
    case 'SEND_ADD_EVENT':
    case 'SEND_EDIT_EVENT':
    case 'SEND_DELETE_EVENT':
    case 'SEND_GET_EVENTS':
      return {
        ...state,
        loading: true,
      };
    case 'RECEIVE_ADD_EVENT':
      return objAssign({}, state, {
        data: [ action.event, ...state.data ],
        loading: false,
      });
    case 'RECEIVE_EDIT_EVENT':
      const edit = transformEvent(action.event['@id'], () => action.event);
      return objAssign({}, state, {
        data: state.data.map(edit),
        loading: false,
      });
    case 'RECEIVE_DELETE_EVENT':
      // TODO: event type
      const eqT: Transformer<any, any> = (e) => e['@id'] !== action.eventId;
      return objAssign({}, state, {
        data: state.data.filter(eqT),
        loading: false,
      });
    case 'RECEIVE_GET_EVENTS':
      return objAssign({}, state, {
        data: action.payload.events,
        loading: false,
      });
    default:
      return state;
  }
}
