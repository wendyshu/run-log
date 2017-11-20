import { Action } from 'redux';
import { ModalType } from './actions';
import { ModalsState } from './reducer';

export interface IModalProps {
  eventType: string; // TODO: eventType should be strong
  modalTitle: string;
  modalType: ModalType;
}

export interface IModalS2P {
  modals: ModalsState;
}

export interface IModalD2P {
  addEvent(e: Events.Any): Promise<any>;
  editEvent(e: Events.Any): Promise<any>;
  hideModal(): Action;
}
