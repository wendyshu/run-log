/*eslint-disable no-unused-vars*/
import React from 'react';
import { DropdownButton, MenuItem, Modal } from 'react-bootstrap';
import { showModal, hideModal } from './actions';
/*eslint-enable no-unused-vars*/

import { connect } from 'react-redux';

class AddEvent extends React.Component {

  constructor(props) {
    super(props);
  }

  eventTypeSelected(eventKey, event) {
    console.log(`DEBUG: ${eventKey}`, event);
  }

  render() {
    return (
      <div>
        <Modal show={this.props.addEvent.ui.showModal} onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DropdownButton title="Select entry type" id="select-event-type" onSelect={this.eventTypeSelected}>
              <MenuItem eventKey="1">Run</MenuItem>
              <MenuItem eventKey="2">Cross-Train</MenuItem>
              <MenuItem eventKey="3">Run + Cross-Train</MenuItem>
              <MenuItem eventKey="4">Change Running Shoes</MenuItem>
            </DropdownButton>
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
