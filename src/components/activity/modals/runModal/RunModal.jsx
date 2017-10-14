/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import EntryModal from '../EntryModal.jsx';
/*eslint-enable no-unused-vars*/

import { MODAL_RUN } from './actions';

import { connect } from 'react-redux';

class RunModal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <EntryModal modal={MODAL_RUN} title="Run">
        <p>Foo</p>
      </EntryModal>
    );
  }
}

export default connect(null, {})(RunModal);
