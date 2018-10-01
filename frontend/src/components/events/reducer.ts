import { objAssign } from 'run-log/scripts/utils/objects';
import { EventsAction } from './actions';

export const INITIAL_STATE = {
  data: [],
};

const transformEvent = (
  eventId: string,
  transformer: Fp.Transform<Events.Any, Events.Any>
) => {
  return (e: Events.Any) => {
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
export default function(
  state: State.Events = INITIAL_STATE,
  action: EventsAction
): State.Events {
  switch (action.type) {
    case 'SET_FAVORITE':
      const fave = transformEvent(action.eventId, e => {
        return { ...e, favorite: action.favorite };
      });
      return {
        ...state,
        data: state.data.map(fave),
      };
    case 'SEND_ADD_EDIT_EVENT':
    case 'SEND_DELETE_EVENT':
    case 'SEND_GET_EVENTS':
      return {
        ...state,
        loading: true,
      };
    case 'RECEIVE_ADD_EDIT_EVENT':
    case 'RECEIVE_DELETE_EVENT':
      // Caller is about to refetch objects, so really nothing doing here...
      return {
        ...state,
        loading: false,
      };
    case 'RECEIVE_GET_EVENTS':
      return objAssign({}, state, {
        // data: action.payload.events,
        data: action.payload,
        loading: false,
      });
    default:
      return state;
  }
}
