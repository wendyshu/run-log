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
  count: number;
  date: string;
  favorite: boolean;
  intervalMinutes: number;
  intervalSeconds: number;
  intervalSpeed: number;
  notes: string;
  restMinutes: number;
  restSeconds: number;
}

interface TimeComponents {
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;
}

class ModalWithIntervalsRun extends React.Component<
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
        label: 'Intervals',
        value: 'intervals',
      },
      {
        label: 'Hills',
        value: 'hills',
      }
    ];
  }

  private onSubmit({
    id,
    category,
    count,
    date,
    favorite,
    intervalMinutes,
    intervalSeconds,
    intervalSpeed,
    notes,
    restMinutes,
    restSeconds,
  }: IFormInput) {
    const intervalDuration = toDuration(undefined, intervalMinutes, intervalSeconds);
    const restDuration = toDuration(undefined, intervalMinutes, intervalSeconds);
    const thisEvent: Events.WithIntervals = {
      '@id': id,
      '@type': this.props.eventType,
      date,
      favorite,
      notes,
      run: {
        '@type': 'Intervals',
        category,
        count,
        intervalDuration,
        intervalSpeed,
        restDuration,
      },
    };

    if (this.eventToEdit()) {
      this.props.editEvent(thisEvent);
    } else {
      this.props.addEvent(thisEvent);
    }

    this.props.hideModal();
  }

  private validate({ category, date, count }: IFormInput) {
    return {
      category: !category ? 'Please select a category' : undefined,
      count: !count ? 'Please specify count' : undefined,
      date: !date ? 'Please select a date' : undefined,
    };
  }

  private getOptionalDurationComponents(key: string, event: Events.WithIntervals): TimeComponents {
    if (event && event.run) {
      const duration = event.run[key] as string | undefined;
      if (duration) {
        return durationToComponents(duration) as TimeComponents;
      }
    }
    return {
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    };
  }

  private defaultValues() {
    const event = this.eventToEdit() as Events.WithIntervals;
    const intervalTime = this.getOptionalDurationComponents('intervalDuration', event);
    const restTime = this.getOptionalDurationComponents('restDuration', event);

    return {
      category: event && event.run && event.run.category,
      count: event && event.run && event.run.count,
      date: get(event, 'date', moment().format('YYYY-MM-DD')),
      favorite: get(event, 'favorite'),
      id: get(event, '@id'),
      intervalMinutes: intervalTime.minutes,
      intervalSeconds: intervalTime.seconds,
      intervalSpeed: event && event.run && event.run.intervalSpeed,
      notes: get(event, 'notes'),
      restDuration: event && event.run && event.run.restDuration,
      restMinutes: restTime.minutes,
      restSeconds: restTime.seconds,
    };
  }

  private eventToEdit() {
    return this.props.modals.editEvent;
  }

  private formContents({ submitForm }: FormApi) {
    return (
      <form onSubmit={submitForm}>

        { /* date */ }
        <div className="form-group">
          <label htmlFor="category">Date</label>
          <Text className="form-control" field="date" type="date" />
        </div>

        { /* category */ }
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <Select field="category" options={this.categoryOptions()} />
        </div>

        { /* count */ }
        <div className="form-group">
          <label htmlFor="count">Intervals Count</label>
          <Text className="form-control" field="count" type="number" />
        </div>

        { /* intervalDuration */ }
        <div className="form-group">
          <label htmlFor="intervalDuration">Interval Duration</label>
          <div className="row">
          <div className="col-xs-6">
            <div className="input-group">
              <Text
                className="form-control"
                field="intervalMinutes"
                type="number"
                step="1"
                min="0"
                max="59"
              />
              <div className="input-group-addon">min</div>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="input-group">
              <Text
                className="form-control"
                field="intervalSeconds"
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

        { /* intervalSpeed */ }
        <div className="form-group">
          <label htmlFor="intervalSpeed">Interval Speed</label>
          <div className="input-group">
            <Text className="form-control" field="intervalSpeed" type="number" />
            <div className="input-group-addon">mph</div>
          </div>
        </div>

        { /* restDuration */ }
        <div className="form-group">
          <label htmlFor="restDuration">Rest Duration</label>
          <div className="row">
          <div className="col-xs-6">
            <div className="input-group">
              <Text
                className="form-control"
                field="restMinutes"
                type="number"
                step="1"
                min="0"
                max="59"
              />
              <div className="input-group-addon">min</div>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="input-group">
              <Text
                className="form-control"
                field="restSeconds"
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

        { /* notes */ }
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
} // ModalWithIntervalsRun

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
)(ModalWithIntervalsRun);
