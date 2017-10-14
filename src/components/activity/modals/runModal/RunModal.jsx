/*eslint-disable no-unused-vars*/
import React from 'react';
import { DropdownButton, MenuItem, Modal } from 'react-bootstrap';
/*eslint-enable no-unused-vars*/

import { MODAL_RUN, hideModal } from '../actions';

import { connect } from 'react-redux';

class RunModal extends React.Component {

  constructor(props) {
    super(props);
  }

  hideModal() {
    this.props.hideModal();
  }

  shouldShow() {
    return MODAL_RUN === this.props.modals.ui.showModal;
  }

  render() {
    return (
      <Modal show={this.shouldShow()} onHide={this.hideModal.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Run</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Foo</p>
        </Modal.Body>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals
  };
}

export default connect(mapStateToProps, {hideModal})(RunModal);
