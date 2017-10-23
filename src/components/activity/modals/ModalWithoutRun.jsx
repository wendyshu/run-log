/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Text, Textarea } from 'react-form';
import BaseEventModal from './BaseEventModal.jsx';
/*eslint-enable no-unused-vars*/

import { get } from 'run-log/scripts/utils/utils';
import { hideModal } from './actions';
import { addEvent, editEvent } from 'run-log/components/events/actions';

import moment from 'moment';
import { connect } from 'react-redux';

class ModalWithoutRun extends React.Component {

  constructor(props) {
    super(props);
  }

  onSubmit({id, date, notes, favorite}) {
    const thisEvent = {
      '@id': id,
      '@type': this.props.eventType,
      date,
      notes,
      favorite
    };

    if (this.eventToEdit()) {
      this.props.editEvent(thisEvent);
    } else {
      this.props.addEvent(thisEvent);
    }

    this.props.hideModal();
  }

  validate({date}) {
    return {
      date: ! date ? 'Please select a date' : undefined
    };
  }

  defaultValues() {
    return {
      id: get(this.eventToEdit(), '@id'),
      date: get(this.eventToEdit(), 'date', moment().format('YYYY-MM-DD')),
      notes: get(this.eventToEdit(), 'notes'),
      favorite: get(this.eventToEdit(), 'favorite')
    };
  }

  eventToEdit() {
    return this.props.modals.editEvent;
  }

  formContents({submitForm}) {
    return (
      <form onSubmit={submitForm}>

        <div className='form-group'>
          <label htmlFor='category'>Date</label>
          <Text className='form-control' field='date' type='date' />
        </div>

        <div className='form-group'>
          <label htmlFor='notes'>Notes</label>
          <Textarea className='form-control' rows='2' field='notes' />
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }

  render() {
    const title = this.eventToEdit() ? `Edit ${this.props.modalTitle}` : `Edit ${this.props.modalTitle}`;
    return (
      <BaseEventModal modalType={this.props.modalType} modalTitle={title}>
        <Form defaultValues={this.defaultValues()} onSubmit={this.onSubmit.bind(this)} validate={this.validate}>
          {this.formContents.bind(this)}
        </Form>
      </BaseEventModal>
    );
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals
  };
}

export default connect(mapStateToProps, {hideModal, addEvent, editEvent})(ModalWithoutRun);
