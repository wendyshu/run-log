/*eslint-disable no-unused-vars*/
import React from 'react';
import BaseEventRow from './BaseEventRow';
/*eslint-enable no-unused-vars*/

import { formatDate } from 'run-log/scripts/utils/dates';
import { Option } from 'run-log/components/option/option';

const isChangeShoes = event => event['@type'] === 'ChangeShoes';

function getCategory(event) {
  return isChangeShoes(event) ? 'Change Shoes' : 'Cross-training';
}

function getAppleClasses(event) {
  return isChangeShoes(event)
    ? 'glyphicon glyphicon-apple inactive'
    : 'glyphicon glyphicon-apple';
}

function getPiggyBankClasses(event) {
  return isChangeShoes(event)
    ? 'glyphicon glyphicon-piggy-bank'
    : 'glyphicon glyphicon-piggy-bank inactive';
}

function getHeartClasses(event) {
  return event.favorite
    ? 'glyphicon glyphicon-heart'
    : 'glyphicon glyphicon-heart-empty';
}

export default ({ event }) => (
  <BaseEventRow event={event}>
    {({ handleDelete, handleEdit, handleFavorite }) => {
      return (
        <tr className="activity-cross-train">
          <td className="data-date">
            {Option(event.date)
              .map(formatDate)
              .orElse('-')}
          </td>
          <td className="data-icons">
            <span className="glyphicon glyphicon-road inactive" />
            <span className={getAppleClasses(event)} />
            <span className={getPiggyBankClasses(event)} />
          </td>
          <td className="data-category">
            <span className="value">{getCategory(event)}</span>
          </td>
          <td className="data-run-details" colSpan="3">-</td>
          <td className="data-notes">{Option(event.notes).orElse('-')}</td>
          <td className="data-actions">
            <a onClick={handleFavorite} className={getHeartClasses(event)} />
            <a onClick={handleEdit} className="glyphicon glyphicon-pencil" />
            <a
              onClick={handleDelete}
              className="glyphicon glyphicon glyphicon-trash"
            />
          </td>
        </tr>
      );
    }}
  </BaseEventRow>
);
