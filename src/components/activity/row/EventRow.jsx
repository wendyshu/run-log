/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import { deleteEvent } from '../../events/actions';

import { connect } from 'react-redux';

class EventRow extends React.Component {

  constructor(props) {
    super(props);
  }

  handleDelete() {
    this.props.deleteEvent(this.props.event['@id']);
  }

  render() {
    return this.props.children({
      handleDelete: this.handleDelete.bind(this)
    });
  }

}

export default connect(null, {deleteEvent})(EventRow);
