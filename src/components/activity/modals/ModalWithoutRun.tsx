/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Text, Textarea } from 'react-form';
import BaseEventModal from './BaseEventModal';
/*eslint-enable no-unused-vars*/

import moment from 'moment';
import { FormApi } from 'react-form';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { addEvent, editEvent } from 'run-log/components/events/actions';
import Events from 'run-log/components/events/events';
import { get } from 'run-log/scripts/utils/utils';
import { hideModal } from './actions';
import { IModalD2P, IModalProps, IModalS2P } from './props';

interface IFormInput {
  id: string;
  date: string;
  notes: string;
  favorite: boolean;
}

class ModalWithoutRun extends React.Component<IModalProps & IModalS2P & IModalD2P, {}> {

  public render() {
    const title = this.eventToEdit() ? `Edit ${this.props.modalTitle}` : `Edit ${this.props.modalTitle}`;
    return (
      <BaseEventModal modalType={this.props.modalType} modalTitle={title}>
        <Form defaultValues={this.defaultValues()} onSubmit={this.onSubmit.bind(this)} validate={this.validate}>
          {this.formContents.bind(this)}
        </Form>
      </BaseEventModal>
    );
  }

  private onSubmit({id, date, notes, favorite}: IFormInput) {

    //
    // TODO: events should be typed
    //
    const thisEvent = {
      '@id': id,
      '@type': this.props.eventType,
      date,
      favorite,
      notes,
    };

    if (this.eventToEdit()) {
      this.props.editEvent(thisEvent);
    } else {
      this.props.addEvent(thisEvent);
    }

    this.props.hideModal();
  }

  private validate({date}: IFormInput) {
    return {
      date: ! date ? 'Please select a date' : undefined,
    };
  }

  private defaultValues() {
    return {
      date: get(this.eventToEdit(), 'date', moment().format('YYYY-MM-DD')),
      favorite: get(this.eventToEdit(), 'favorite'),
      id: get(this.eventToEdit(), '@id'),
      notes: get(this.eventToEdit(), 'notes'),
    };
  }

  private eventToEdit() {
    return this.props.modals.editEvent;
  }

  private formContents({submitForm}: FormApi) {
    return (
      <form onSubmit={submitForm}>

        <div className='form-group'>
          <label htmlFor='category'>Date</label>
          <Text className='form-control' field='date' type='date' />
        </div>

        <div className='form-group'>
          <label htmlFor='notes'>Notes</label>
          <Textarea className='form-control' field='notes' />
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state: any, ownProps: {}): IModalS2P { // TODO: state type
  return {
    modals: state.modals,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>): IModalD2P {
  return {
    addEvent: (e) => dispatch(addEvent(e)),
    editEvent: (e) => dispatch(editEvent(e)),
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect<IModalS2P, IModalD2P, {}>(mapStateToProps, mapDispatchToProps)(ModalWithoutRun);
