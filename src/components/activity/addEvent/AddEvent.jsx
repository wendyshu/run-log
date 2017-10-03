/*eslint-disable no-unused-vars*/
import React from 'react';
import { Modal } from 'react-bootstrap';
import { showModal, hideModal } from './actions';
/*eslint-enable no-unused-vars*/

import { connect } from 'react-redux';

class AddEvent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal show={this.props.addEvent.ui.showModal} onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Spoon</p>
          </Modal.Body>
        </Modal>
        <button onClick={this.props.showModal} type="button" className="btn btn-primary btn-lg">
          <span className="glyphicon glyphicon-plus"/>
          <span>Entry</span>
        </button>
      </div>
    );
  }

} // AddEntry

function mapStateToProps(state) {
  return {
    addEvent: state.addEvent
  };
}

export default connect(mapStateToProps, {showModal, hideModal})(AddEvent);
