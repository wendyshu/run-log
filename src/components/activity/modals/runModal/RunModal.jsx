/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Select, Text, Textarea } from 'react-form';
import EntryModal from '../EntryModal.jsx';
/*eslint-enable no-unused-vars*/

import { durationToComponents } from '../../../../scripts/utils/dates';
import { hideModal } from '../actions';
import { MODAL_RUN } from './actions';
import { addEvent, editEvent } from '../../../events/actions';

import moment from 'moment';
import { connect } from 'react-redux';

class RunModal extends React.Component {

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

  // TODO: move to dates.js and test
  duration(hours, minutes, seconds) {
    if (hours || minutes || seconds) {
      return `PT${hours ? hours : '0'}H${minutes ? minutes : '00'}M${seconds ? seconds : '00'}S`;
    } else {
      return null;
    }
  }

  onSubmit({id, category, date, distance, hours, minutes, seconds, notes}) {
    const duration = this.duration(hours, minutes, seconds);
    const thisEvent = {
      '@id': id,
      '@type': 'Run',
      date,
      category,
      distance: distance ? parseFloat(distance) : null,
      notes,
      duration
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

  // TODO: use Underscore or move to utils and test
  get(obj, prop, defaultVal) {
    return obj ? obj[prop] : defaultVal;
  }

  defaultValues() {

    const duration = this.get(this.eventToEdit(), 'duration');
    var time = {};
    if (duration) {
      time = durationToComponents(duration);
    }

    return {
      id: this.get(this.eventToEdit(), '@id'),
      date: this.get(this.eventToEdit(), 'date', moment().format('YYYY-MM-DD')),
      category: this.get(this.eventToEdit(), 'category'),
      distance: this.get(this.eventToEdit(), 'distance'),
      notes: this.get(this.eventToEdit(), 'notes'),
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
    const title = this.eventToEdit() ? 'Edit Run' : 'Add Run';
    return (
      <EntryModal modal={MODAL_RUN} title={title}>
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

export default connect(mapStateToProps, {hideModal, addEvent, editEvent})(RunModal);
