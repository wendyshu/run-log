/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Select, Text, Textarea } from 'react-form';
import EntryModal from '../EntryModal.jsx';
/*eslint-enable no-unused-vars*/

import { hideModal } from '../actions';
import { MODAL_RUN } from './actions';
import { addEvent } from '../../../events/actions';

import moment from 'moment';
import { connect } from 'react-redux';

class RunModal extends React.Component {

  constructor(props) {
    super(props);
  }

  duration(hours, minutes, seconds) {
    if (hours || minutes || seconds) {
      return `PT${hours ? hours : '0'}H${minutes ? minutes : '00'}M${seconds ? seconds : '00'}S`;
    } else {
      return null;
    }
  }

  onSubmit({category, distance, hours, minutes, seconds, notes}) {
    const duration = this.duration(hours, minutes, seconds);
    const thisEvent = {
      '@type': 'Run',
      date: moment().format('YYYY-MM-DD'),
      category,
      distance: distance ? parseFloat(distance) : null,
      notes,
      duration
    };

    this.props.addEvent(thisEvent);

    this.props.hideModal();
  }

  validate({category}) {
    return {
      category: ! category ? 'Please select a category' : undefined
    };
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

  formContents({submitForm}) {
    return (
      <form onSubmit={submitForm}>

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
    return (
      <EntryModal modal={MODAL_RUN} title="Run">
        <Form onSubmit={this.onSubmit.bind(this)} validate={this.validate}>
          {this.formContents.bind(this)}
        </Form>
      </EntryModal>
    );
  }
}

export default connect(null, {hideModal, addEvent})(RunModal);
