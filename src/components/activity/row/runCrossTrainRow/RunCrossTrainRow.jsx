/*eslint-disable no-unused-vars*/
import React from 'react';
import EventRow from '../EventRow.jsx';
/*eslint-enable no-unused-vars*/

import { formatDate, formatDuration } from '../../../../scripts/utils/dates';
import Optional from '../../../optional/optional';

export default ({event}) => (
  <EventRow event={event}>
    {
      ({handleDelete, handleEdit}) => {
        return (
          <tr className="activity-run">
            <td className="data-date"><span className="value">{Optional(event.date).map(formatDate).orElse('-')}</span></td>
            <td className="data-icons">
              <span className="glyphicon glyphicon-road"/>
              <span className="glyphicon glyphicon-apple"/>
              <span className="glyphicon glyphicon-piggy-bank inactive" />
            </td>
            <td className="data-category"><span className="value">{Optional(event.category).orElse('-')}</span></td>
            <td className="data-distance"><span className="value">{Optional(event.distance).map(d => d + ' mi').orElse('-')}</span></td>
            <td className="data-duration"><span className="value">{Optional(event.duration).map(formatDuration).orElse('-')}</span></td>
            <td className="data-notes"><span className="value">{Optional(event.notes).orElse('-')}</span></td>
            <td className="data-actions">
              <a href="#" className="glyphicon glyphicon-heart-empty"/>
              <a onClick={handleEdit} className="glyphicon glyphicon-pencil"/>
              <a onClick={handleDelete} className="glyphicon glyphicon glyphicon-trash"/>
            </td>
          </tr>
        );
      }
    }
  </EventRow>
);
