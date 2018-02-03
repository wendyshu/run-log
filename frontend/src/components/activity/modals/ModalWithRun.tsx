/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Select, Text, Textarea } from 'react-form';
import BaseEventModal from './BaseEventModal';
/*eslint-enable no-unused-vars*/

import moment from 'moment';
import { FormApi } from 'react-form';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { addEvent, editEvent } from 'run-log/components/events/actions';
import { RootState } from 'run-log/scripts/reducers';
import { durationToComponents, toDuration } from 'run-log/scripts/utils/dates';
import { get } from 'run-log/scripts/utils/utils';
import { hideModal } from './actions';
import { IModalD2P, IModalProps, IModalS2P } from './props';

interface IFormInput {
  id: string;
  category: string; // TODO: enum
  date: string;
  distance: string;
  hours: number;
  minutes: number;
  seconds: number;
  notes: string;
  favorite: boolean;
}

class ModalWithRun extends React.Component<
  IModalProps & IModalS2P & IModalD2P,
  {}
> {
  public render() {
    const title = this.props.modals.editEvent
      ? `Edit ${this.props.modalTitle}`
      : `Add ${this.props.modalTitle}`;
    return (
      <BaseEventModal modalType={this.props.modalType} modalTitle={title}>
        <Form
          defaultValues={this.defaultValues()}
          onSubmit={this.onSubmit.bind(this)}
          validate={this.validate}
        >
          {this.formContents.bind(this)}
        </Form>
      </BaseEventModal>
    );
  }

  private categoryOptions() {
    return [
      {
        label: 'Casual',
        value: 'casual',
      },
      {
        label: 'Distance',
        value: 'distance',
      },
      {
        label: 'Speed',
        value: 'speed',
      },
    ];
  }

  private onSubmit({
    id,
    category,
    date,
    distance,
    hours,
    minutes,
    seconds,
    notes,
    favorite,
  }: IFormInput) {
    const duration = toDuration(hours, minutes, seconds);
    const thisEvent: Events.WithRunning = {
      '@id': id,
      '@type': this.props.eventType,
      category,
      date,
      distance: distance ? parseFloat(distance) : undefined,
      duration,
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

  private validate({ category, date }: IFormInput) {
    return {
      category: !category ? 'Please select a category' : undefined,
      date: !date ? 'Please select a date' : undefined,
    };
  }

  private defaultValues() {
    const duration = get(this.eventToEdit(), 'duration');
    let time = {};
    if (duration) {
      time = durationToComponents(duration);
    }

    return {
      category: get(this.eventToEdit(), 'category'),
      date: get(this.eventToEdit(), 'date', moment().format('YYYY-MM-DD')),
      distance: get(this.eventToEdit(), 'distance'),
      favorite: get(this.eventToEdit(), 'favorite'),
      id: get(this.eventToEdit(), '@id'),
      notes: get(this.eventToEdit(), 'notes'),
      ...time,
    };
  }

  private eventToEdit() {
    return this.props.modals.editEvent;
  }

  private formContents({ submitForm }: FormApi) {
    return (
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="category">Date</label>
          <Text className="form-control" field="date" type="date" />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <Select field="category" options={this.categoryOptions()} />
        </div>

        <div className="form-group">
          <label htmlFor="distance">Distance</label>
          <div className="input-group">
            <Text className="form-control" field="distance" type="number" />
            <div className="input-group-addon">miles</div>
          </div>
        </div>

        <div className="form-group">
          <label>Duration</label>
          <div className="row">
            <div className="col-xs-4">
              <div className="input-group">
                <Text
                  className="form-control"
                  field="hours"
                  type="number"
                  step="1"
                  min="0"
                  max="59"
                />
                <div className="input-group-addon">hr</div>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="input-group">
                <Text
                  className="form-control"
                  field="minutes"
                  type="number"
                  step="1"
                  min="0"
                  max="59"
                />
                <div className="input-group-addon">min</div>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="input-group">
                <Text
                  className="form-control"
                  field="seconds"
                  type="number"
                  step="1"
                  min="0"
                  max="59"
                />
                <div className="input-group-addon">sec</div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <Textarea className="form-control" field="notes" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
} // ModalWithRun

function mapStateToProps(state: RootState, ownProps: {}): IModalS2P {
  return {
    modals: state.modals,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>): IModalD2P {
  return {
    addEvent: e => dispatch(addEvent(e)),
    editEvent: e => dispatch(editEvent(e)),
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect<IModalS2P, IModalD2P, {}>(
  mapStateToProps,
  mapDispatchToProps
)(ModalWithRun);
