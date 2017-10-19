export const SHOW_MODAL = 'SHOW_MODAL',
  MODAL_SHOES = 'MODAL_SHOES',
  MODAL_RUN = 'MODAL_RUN',
  MODAL_RUN_CROSS_TRAIN = 'MODAL_RUN_CROSS_TRAIN',
  MODAL_CROSS_TRAIN = 'MODAL_CROSS_TRAIN';
  
export function showModal(modal, editEvent) {
  return {
    type: SHOW_MODAL,
    modal,
    editEvent // If present, edit; if absent, new
  };
}

export const HIDE_MODAL = 'HIDE_MODAL';
export function hideModal() {
  return {
    type: HIDE_MODAL
  };
}
