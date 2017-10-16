/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Text, Textarea } from 'react-form';
import EntryModal from '../EntryModal.jsx';
/*eslint-enable no-unused-vars*/

import { get } from '../../../../scripts/utils/utils';
import { hideModal } from '../actions';
import { MODAL_SHOES } from './actions';
import { addEvent, editEvent } from '../../../events/actions';

import moment from 'moment';
import { connect } from 'react-redux';

class ShoesModal extends React.Component {

  constructor(props) {
    super(props);
  }

  onSubmit({id, date, notes}) {
    const thisEvent = {
      '@id': id,
      '@type': 'ChangeShoes',
      date,
      notes
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
      notes: get(this.eventToEdit(), 'notes')
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
    const title = this.eventToEdit() ? 'Edit Running Shoes' : 'Add Running Shoes';
    return (
      <EntryModal modal={MODAL_SHOES} title={title}>
        <Form defaultValues={this.defaultValues()} onSubmit={this.onSubmit.bind(this)} validate={this.validate}>
          {this.formContents.bind(this)}
        </Form>
      </EntryModal>
    );
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals
  };
}

export default connect(mapStateToProps, {hideModal, addEvent, editEvent})(ShoesModal);
