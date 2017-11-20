/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
/*eslint-enable no-unused-vars*/

import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { RootState } from 'run-log/scripts/reducers';
import { hideModal } from './actions';
import { ModalsState } from './reducer';

interface IProps {
  modalType: string;
  modalTitle: string;
}

interface IStateToProps {
  modals: ModalsState;
}

interface IDispatchToProps {
  hideModal(): Action;
}

class BaseEventModal extends React.Component<IProps & IStateToProps & IDispatchToProps, {}> {

  public shouldShow() {
    return this.props.modalType === this.props.modals.ui.showModal;
  }

  public hideModal() {
    this.props.hideModal();
  }

  public render() {
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

function mapStateToProps(state: RootState, ownProps: {}): IStateToProps {
  return {
    modals: state.modals,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>): IDispatchToProps {
  return {
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect<IStateToProps, IDispatchToProps, {}>(mapStateToProps, mapDispatchToProps)(BaseEventModal);
