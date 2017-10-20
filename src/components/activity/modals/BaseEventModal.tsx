/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
/*eslint-enable no-unused-vars*/

import { hideModal } from './actions';
import { connect } from 'react-redux';

import { Action, Dispatch } from 'redux';

interface Props {
  modalType: string,
  modalTitle: string
}

interface StateToProps {
  modals: any // TODO: this is what type is for!
}

interface DispatchToProps {
  hideModal(): Action
}

class BaseEventModal extends React.Component<Props & StateToProps & DispatchToProps, {}> {

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
} // BaseEventModal

function mapStateToProps(state: any, ownProps: {}): StateToProps {
  return {
    modals: state.modals
  };
}

function mapDispatchToProps (dispatch: Dispatch<Action>): DispatchToProps {
  return {
    hideModal: () => dispatch(hideModal())
  };
}

export default connect<StateToProps, DispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(BaseEventModal);
