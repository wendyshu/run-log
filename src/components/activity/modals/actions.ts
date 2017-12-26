import { Action } from 'redux';

export const MODAL_SHOES = 'MODAL_SHOES',
  MODAL_RUN = 'MODAL_RUN',
  MODAL_RUN_CROSS_TRAIN = 'MODAL_RUN_CROSS_TRAIN',
  MODAL_CROSS_TRAIN = 'MODAL_CROSS_TRAIN';

export const SHOW_MODAL = 'SHOW_MODAL';

export class ShowModalAction implements Action {
  public editEvent?: Events.Any;
  public modal: ModalTypes.Any;
  public type: 'SHOW_MODAL';
}

export function showModal(
  modal: ModalTypes.Any,
  editEvent?: Events.Any
): ShowModalAction {
  return {
    editEvent, // If present, edit; if absent, new
    modal,
    type: SHOW_MODAL,
  };
}

export const HIDE_MODAL = 'HIDE_MODAL';

export class HideModalAction implements Action {
  public type: 'HIDE_MODAL';
}

export function hideModal(): HideModalAction {
  return {
    type: HIDE_MODAL,
  };
}
