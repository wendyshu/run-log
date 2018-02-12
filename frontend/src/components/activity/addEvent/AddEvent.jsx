/*eslint-disable no-unused-vars*/
import React from 'react';
import { DropdownButton, MenuItem, Modal } from 'react-bootstrap';

/*eslint-enable no-unused-vars*/

import {
  showModal,
  MODAL_INTERVALS_RUN,
  MODAL_INTERVALS_RUN_CROSS_TRAIN,
  MODAL_STEADY_STATE_RUN,
  MODAL_CROSS_TRAIN,
  MODAL_STEADY_STATE_RUN_CROSS_TRAIN,
  MODAL_SHOES,
} from 'run-log/components/activity/modals/actions';

import { connect } from 'react-redux';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  eventTypeSelected(eventKey) {
    this.props.showModal(eventKey);
  }

  render() {
    return (
      <DropdownButton
        onSelect={this.eventTypeSelected.bind(this)}
        title="Add Entry"
        id="select-event-type"
        className="btn btn-primary btn-lg"
      >
        <MenuItem eventKey={MODAL_STEADY_STATE_RUN}>Run</MenuItem>
        <MenuItem eventKey={MODAL_STEADY_STATE_RUN_CROSS_TRAIN}>Run + Cross-Train</MenuItem>
        <MenuItem eventKey={MODAL_INTERVALS_RUN}>Intervals</MenuItem>
        <MenuItem eventKey={MODAL_INTERVALS_RUN_CROSS_TRAIN}>Intervals + Cross-Train</MenuItem>
        <MenuItem eventKey={MODAL_CROSS_TRAIN}>Cross-Train</MenuItem>
        <MenuItem eventKey={MODAL_SHOES}>Change Running Shoes</MenuItem>
      </DropdownButton>
    );
  }
} // AddEvent

AddEvent.propTypes = {};

export default connect(null, { showModal })(AddEvent);
