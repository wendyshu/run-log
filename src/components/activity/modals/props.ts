import { Action } from 'redux';
import { ModalType } from './actions';
import { ModalsState } from './reducer';

/**
 * Modal classes' props
 */
export interface IModalProps {
  eventType: EventTypes.Any;
  modalTitle: string;
  modalType: ModalType;
}

/**
 * Modal classes' mapStateToProps
 */
export interface IModalS2P {
  modals: ModalsState;
}

/**
 * Modal classes' mapDispatchToProps
 */
export interface IModalD2P {
  addEvent(e: Events.Any): Promise<any>;
  editEvent(e: Events.Any): Promise<any>;
  hideModal(): Action;
}
