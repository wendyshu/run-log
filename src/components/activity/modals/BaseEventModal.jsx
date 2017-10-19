/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
/*eslint-enable no-unused-vars*/

import { hideModal } from './actions';
import { connect } from 'react-redux';

class BaseEventModal extends React.Component {

  constructor(props) {
    super(props);
  }

  hideModal() {
    this.props.hideModal();
  }

  shouldShow() {
    return this.props.modalType === this.props.modals.ui.showModal;
  }

  render() {
    return (
      <Modal show={this.shouldShow()} onHide={this.hideModal.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { this.props.children }
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

export default connect(mapStateToProps, {hideModal})(BaseEventModal);
