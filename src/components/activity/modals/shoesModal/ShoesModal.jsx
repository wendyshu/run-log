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
    const title = this.props.modals.editEvent ? 'Edit Running Shoes' : 'Add Running Shoes';
    return (
      <EntryModal modal={MODAL_SHOES} title={title}>
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

export default connect(mapStateToProps, {})(ShoesModal);
