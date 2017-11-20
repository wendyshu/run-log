/**
 * Types of modals.
 */
declare namespace ModalTypes {
  
  export const MODAL_SHOES = 'MODAL_SHOES',
    MODAL_RUN = 'MODAL_RUN',
    MODAL_RUN_CROSS_TRAIN = 'MODAL_RUN_CROSS_TRAIN',
    MODAL_CROSS_TRAIN = 'MODAL_CROSS_TRAIN';

  export type Any = ModalTypes.MODAL_SHOES | ModalTypes.MODAL_RUN | ModalTypes.MODAL_RUN_CROSS_TRAIN | ModalTypes.MODAL_CROSS_TRAIN;
}
