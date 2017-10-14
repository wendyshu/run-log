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
    return (
      <EntryModal modal={MODAL_CROSS_TRAIN} title="Cross-Train">
        <p>Foo</p>
      </EntryModal>
    );
  }
}

export default connect(null, {})(CrossTrainModal);
