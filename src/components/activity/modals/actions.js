export const MODAL_RUN = 'MODAL_RUN',
  MODAL_CROSS_TRAIN = 'MODAL_CROSS_TRAIN',
  MODAL_RUN_CROSS_TRAIN = 'MODAL_RUN_CROSS_TRAIN',
  MODAL_SHOES = 'MODAL_SHOES';

export const SHOW_MODAL = 'SHOW_MODAL';
export function showModal(modal) {
  return {
    type: SHOW_MODAL,
    modal: modal
  };
}

export const HIDE_MODAL = 'HIDE_MODAL';
export function hideModal() {
  return {
    type: HIDE_MODAL
  };
}
