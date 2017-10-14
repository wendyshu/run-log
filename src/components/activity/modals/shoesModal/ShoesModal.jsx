/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import EntryModal from '../EntryModal.jsx';
/*eslint-enable no-unused-vars*/

import { MODAL_SHOES } from './actions';

import { connect } from 'react-redux';

class ShoesModal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <EntryModal modal={MODAL_SHOES} title="Change Running Shoes">
        <p>Foo</p>
      </EntryModal>
    );
  }
}

export default connect(null, {})(ShoesModal);
