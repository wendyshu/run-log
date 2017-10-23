/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Select, Text, Textarea } from 'react-form';
import BaseEventModal from './BaseEventModal.jsx';
/*eslint-enable no-unused-vars*/

import { get } from 'run-log/scripts/utils/utils';
import { durationToComponents, toDuration } from 'run-log/scripts/utils/dates';
import { hideModal } from './actions';
import { addEvent, editEvent } from 'run-log/components/events/actions';

import moment from 'moment';
import { connect } from 'react-redux';

class ModalWithRun extends React.Component {

  constructor(props) {
    super(props);
  }

  categoryOptions() {
    return [{
      label: 'Casual',
      value: 'casual'
    },{
      label: 'Distance',
      value: 'distance'
    },{
      label: 'Race',
      value: 'race'
    },{
      label: 'Speed',
      value: 'speed'
    }];
  }

  onSubmit({id, category, date, distance, hours, minutes, seconds, notes, favorite}) {
    const duration = toDuration(hours, minutes, seconds);
    const thisEvent = {
      '@id': id,
      '@type': this.props.eventType,
      date,
      category,
      distance: distance ? parseFloat(distance) : null,
      notes,
      duration,
      favorite
    };

    if (this.eventToEdit()) {
      this.props.editEvent(thisEvent);
    } else {
      this.props.addEvent(thisEvent);
    }

    this.props.hideModal();
  }

  validate({category, date}) {
    return {
      category: ! category ? 'Please select a category' : undefined,
      date: ! date ? 'Please select a date' : undefined
    };
  }

  defaultValues() {

    const duration = get(this.eventToEdit(), 'duration');
    var time = {};
    if (duration) {
      time = durationToComponents(duration);
    }

    return {
      id: get(this.eventToEdit(), '@id'),
      date: get(this.eventToEdit(), 'date', moment().format('YYYY-MM-DD')),
      category: get(this.eventToEdit(), 'category'),
      distance: get(this.eventToEdit(), 'distance'),
      notes: get(this.eventToEdit(), 'notes'),
      favorite: get(this.eventToEdit(), 'favorite'),
      ...time
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
          <label htmlFor='category'>Category</label>
          <Select field='category' options={this.categoryOptions()} />
        </div>

        <div className='form-group'>
          <label htmlFor='distance'>Distance</label>
          <div className='input-group'>
            <Text className='form-control' field='distance' type='number' />
            <div className='input-group-addon'>miles</div>
          </div>
        </div>

        <div className='form-group'>
          <label>Duration</label>
          <div className='row'>
            <div className='col-xs-4'>
              <div className='input-group'>
                <Text className='form-control' field='hours' type='number' step='1' min='0' max='59' />
                <div className='input-group-addon'>hr</div>
              </div>
            </div>
            <div className='col-xs-4'>
              <div className='input-group'>
                <Text className='form-control' field='minutes' type='number' step='1' min='0' max='59' />
                <div className='input-group-addon'>min</div>
              </div>
            </div>
            <div className='col-xs-4'>
              <div className='input-group'>
                <Text className='form-control' field='seconds' type='number' step='1' min='0' max='59' />
                <div className='input-group-addon'>sec</div>
              </div>
            </div>
          </div>
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
    const title = this.props.modals.editEvent ? `Edit ${this.props.modalTitle}` : `Add ${this.props.modalTitle}`;
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

export default connect(mapStateToProps, {hideModal, addEvent, editEvent})(ModalWithRun);
