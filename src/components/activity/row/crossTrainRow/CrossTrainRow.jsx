/*eslint-disable no-unused-vars*/
import React from 'react';
import EventRow from '../EventRow.jsx';
/*eslint-enable no-unused-vars*/

import { formatDate } from '../../../../scripts/utils/dates';
import Optional from '../../../optional/optional';

export default ({event}) => (
  <EventRow event={event}>
    {
      ({handleDelete, handleEdit}) => {
        return (
          <tr className="activity-cross-train">
            <td className="data-date">{Optional(event.date).map(formatDate).orElse('-')}</td>
            <td className="data-icons">
              <span className="glyphicon glyphicon-road inactive"/>
              <span className="glyphicon glyphicon-apple"/>
              <span className="glyphicon glyphicon-piggy-bank inactive" />
            </td>
            <td className="data-category"><span className="value">Cross-training</span></td>
            <td className="data-distance">-</td>
            <td className="data-duration">-</td>
            <td className="data-notes">{Optional(event.notes).orElse('-')}</td>
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
