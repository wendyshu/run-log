import { Action } from 'redux';
import { Events } from 'run-log/components/events/types';

export interface IModalProps {
  eventType: string;
  modalTitle: string;
  modalType: string;
}

export interface IModalS2P {
  modals: any; // TODO: this is what type is for!
}

export interface IModalD2P {
  addEvent(e: Events.Any): Promise<any>;
  editEvent(e: Events.Any): Promise<any>;
  hideModal(): Action;
}
