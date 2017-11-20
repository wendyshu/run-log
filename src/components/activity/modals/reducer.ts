import { HIDE_MODAL, HideModalAction, ModalType, SHOW_MODAL, ShowModalAction } from './actions';

export class ModalsState {
  public editEvent?: Events.Any;
  public ui: { showModal?: ModalType };
}

function showModal(show?: ModalType, editEvent?: Events.Any): ModalsState {
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
  state: ModalsState = INITIAL_STATE,
  action: HideModalAction | ShowModalAction,
): ModalsState {
  switch (action.type) {
  case SHOW_MODAL:
    return Object.assign({}, state, showModal(action.modal, action.editEvent));
  case HIDE_MODAL:
    return Object.assign({}, state, showModal());
  default:
    return state;
  }
}
