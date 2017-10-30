import { Action } from 'redux';

export interface IModalProps {
  eventType: string;
  modalTitle: string;
  modalType: string;
}

export interface IModalS2P {
  modals: any; // TODO: modals type
}

export interface IModalD2P {
  addEvent(e: Events.Any): Promise<any>;
  editEvent(e: Events.Any): Promise<any>;
  hideModal(): Action;
}
