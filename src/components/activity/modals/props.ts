import { Action } from 'redux';

export interface IModalProps {
  eventType: string;
  modalTitle: string;
  modalType: string;
}

export interface IModalS2P {
  modals: any; // TODO: this is what type is for!
}

export interface IModalD2P {
  addEvent(e: any): any; // TODO: change event type
  editEvent(e: any): any; // TODO: change event type
  hideModal(): Action;
}
