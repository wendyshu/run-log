/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import EntryModal from '../EntryModal.jsx';
/*eslint-enable no-unused-vars*/

import { MODAL_RUN_CROSS_TRAIN } from './actions';

import { connect } from 'react-redux';

class RunCrossTrainModal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <EntryModal modal={MODAL_RUN_CROSS_TRAIN} title="Run + Cross-Train">
        <p>Coming soon...</p>
      </EntryModal>
    );
  }
}

export default connect(null, {})(RunCrossTrainModal);
