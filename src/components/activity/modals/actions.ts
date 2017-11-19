import { Action } from 'redux';

//
// TODO: once callers are .ts, switch to string enum
//
export const MODAL_SHOES = 'MODAL_SHOES',
  MODAL_RUN = 'MODAL_RUN',
  MODAL_RUN_CROSS_TRAIN = 'MODAL_RUN_CROSS_TRAIN',
  MODAL_CROSS_TRAIN = 'MODAL_CROSS_TRAIN';

export type ModalType = 'MODAL_SHOES' | 'MODAL_RUN' | 'MODAL_RUN_CROSS_TRAIN' | 'MODAL_CROSS_TRAIN';

export const SHOW_MODAL = 'SHOW_MODAL';

export class ShowModalAction implements Action {
  public editEvent?: string;
  public modal: ModalType;
  public type: 'SHOW_MODAL';
}

export function showModal(modal: ModalType, editEvent?: string): ShowModalAction {
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
