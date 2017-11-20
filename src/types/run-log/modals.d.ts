/**
 * Types of modals.
 */
declare namespace ModalTypes {
  //
  // TODO: once callers are .ts, switch to string enum
  //
  export const MODAL_SHOES = 'MODAL_SHOES',
    MODAL_RUN = 'MODAL_RUN',
    MODAL_RUN_CROSS_TRAIN = 'MODAL_RUN_CROSS_TRAIN',
    MODAL_CROSS_TRAIN = 'MODAL_CROSS_TRAIN';

  export type Any = 'MODAL_SHOES' | 'MODAL_RUN' | 'MODAL_RUN_CROSS_TRAIN' | 'MODAL_CROSS_TRAIN';
}
