export const SHOW_MODAL = 'SHOW_MODAL';
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
