/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import EntryModal from '../EntryModal.jsx';
/*eslint-enable no-unused-vars*/

import { MODAL_CROSS_TRAIN } from './actions';

import { connect } from 'react-redux';

class CrossTrainModal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.modals.editEvent ? 'Edit Cross-Train' : 'Add Cross-Train';
    return (
      <EntryModal modal={MODAL_CROSS_TRAIN} title={title}>
        <p>Coming soon...</p>
      </EntryModal>
    );
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals
  };
}

export default connect(mapStateToProps, {})(CrossTrainModal);
