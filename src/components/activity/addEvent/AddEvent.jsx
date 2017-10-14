/*eslint-disable no-unused-vars*/
import React from 'react';
import { DropdownButton, MenuItem, Modal } from 'react-bootstrap';
import CrossTrainModal from '../modals/crossTrainModal/CrossTrainModal.jsx';
import RunCrossTrainModal from '../modals/runCrossTrainModal/RunCrossTrainModal.jsx';
import RunModal from '../modals/runModal/RunModal.jsx';
import ShoesModal from '../modals/shoesModal/ShoesModal.jsx';
/*eslint-enable no-unused-vars*/

import { MODAL_RUN } from '../modals/runModal/actions';
import { MODAL_CROSS_TRAIN } from '../modals/crossTrainModal/actions';
import { MODAL_RUN_CROSS_TRAIN } from '../modals/runCrossTrainModal/actions';
import { MODAL_SHOES } from '../modals/shoesModal/actions';
import { showModal } from '../modals/actions';

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
        <CrossTrainModal />
        <RunCrossTrainModal />
        <ShoesModal />
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
