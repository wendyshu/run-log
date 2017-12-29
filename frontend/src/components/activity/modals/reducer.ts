import {
  HIDE_MODAL,
  HideModalAction,
  SHOW_MODAL,
  ShowModalAction,
} from './actions';

function showModal(
  show?: ModalTypes.Any,
  editEvent?: Events.Any
): State.Modals {
  return {
    editEvent,
    ui: {
      showModal: show,
    },
  };
}

const INITIAL_STATE = showModal();

/**
 * Reducer function for dashboard.
 */
export default function(
  state: State.Modals = INITIAL_STATE,
  action: HideModalAction | ShowModalAction
): State.Modals {
  switch (action.type) {
    case SHOW_MODAL:
      return Object.assign(
        {},
        state,
        showModal(action.modal, action.editEvent)
      );
    case HIDE_MODAL:
      return Object.assign({}, state, showModal());
    default:
      return state;
  }
}
