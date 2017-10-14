/*eslint-disable no-unused-vars*/
import React from 'react';
import { DropdownButton, MenuItem, Modal } from 'react-bootstrap';
import RunModal from '../modals/runModal/RunModal.jsx';
/*eslint-enable no-unused-vars*/

import { MODAL_RUN, MODAL_CROSS_TRAIN, MODAL_RUN_CROSS_TRAIN, MODAL_SHOES, showModal } from '../modals/actions';

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
      <div>
        <RunModal />
        <DropdownButton onSelect={this.eventTypeSelected.bind(this)} title="Add Entry" id="select-event-type" className="btn btn-primary btn-lg">
          <MenuItem eventKey={MODAL_RUN}>Run</MenuItem>
          <MenuItem eventKey={MODAL_CROSS_TRAIN}>Cross-Train</MenuItem>
          <MenuItem eventKey={MODAL_RUN_CROSS_TRAIN}>Run + Cross-Train</MenuItem>
          <MenuItem eventKey={MODAL_SHOES}>Change Running Shoes</MenuItem>
        </DropdownButton>
      </div>
    );
  }

} // AddEntry

export default connect(null, {showModal})(AddEvent);
