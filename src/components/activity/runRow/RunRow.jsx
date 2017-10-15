/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import { deleteEvent } from '../../events/actions';

import { connect } from 'react-redux';

import { formatDate, formatDuration } from '../../../scripts/utils/dates';
import Optional from '../../optional/optional';

class RunRow extends React.Component {

  constructor(props) {
    super(props);
  }

  handleDelete() {
    this.props.deleteEvent(this.props.event['@id']);
  }

  render() {
    const event = this.props.event;
    return (
      <tr className="activity-run">
        <td className="data-date"><span className="value">{Optional(event.date).map(formatDate).orElse('-')}</span></td>
        <td className="data-icons"><span className="glyphicon glyphicon-road"/> <span className="glyphicon glyphicon-apple inactive"/></td>
        <td className="data-category"><span className="value">{Optional(event.category).orElse('-')}</span></td>
        <td className="data-distance"><span className="value">{Optional(event.distance).map(d => d + ' mi').orElse('-')}</span></td>
        <td className="data-duration"><span className="value">{Optional(event.duration).map(formatDuration).orElse('-')}</span></td>
        <td className="data-notes"><span className="value">{Optional(event.notes).orElse('-')}</span></td>
        <td className="data-actions">
          <a href="#" className="glyphicon glyphicon-heart-empty"/>
          <a href="#" className="glyphicon glyphicon-pencil"/>
          <a onClick={this.handleDelete.bind(this)} className="glyphicon glyphicon glyphicon-trash"/>
        </td>
      </tr>
    );
  }

}

export default connect(null, {deleteEvent})(RunRow);
