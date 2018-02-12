/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import PropTypes from 'prop-types';

import {
  showModal,
  MODAL_INTERVALS_RUN,
  MODAL_INTERVALS_RUN_CROSS_TRAIN,
  MODAL_STEADY_STATE_RUN,
  MODAL_STEADY_STATE_RUN_CROSS_TRAIN,
  MODAL_CROSS_TRAIN,
  MODAL_SHOES,
} from 'run-log/components/activity/modals/actions';
import { deleteEvent, setFavorite } from 'run-log/components/events/actions';

import { connect } from 'react-redux';

class BaseEventRow extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete() {
    if (confirm('Really delete?')) {
      this.props.deleteEvent(this.props.event['@id']);
    }
  }

  runType() {
    return this.props.event.run && this.props.event.run['@type'];
  }

  handleEdit() {
    const type = this.props.event['@type'];
    if ('Run' === type && this.runType() === 'SteadyStateRun') {
      this.props.showModal(MODAL_STEADY_STATE_RUN, this.props.event);
    } else if ('Run' === type && this.runType() === 'Intervals') {
      this.props.showModal(MODAL_INTERVALS_RUN, this.props.event);
    } else if ('Run+CrossTrain' === type && this.runType() === 'SteadyStateRun') {
      this.props.showModal(MODAL_STEADY_STATE_RUN_CROSS_TRAIN, this.props.event);
    } else if ('Run+CrossTrain' === type && this.runType() === 'Intervals') {
      this.props.showModal(MODAL_INTERVALS_RUN_CROSS_TRAIN, this.props.event);
    } else if ('CrossTrain' === type) {
      this.props.showModal(MODAL_CROSS_TRAIN, this.props.event);
    } else if ('ChangeShoes' === type) {
      this.props.showModal(MODAL_SHOES, this.props.event);
    } else {
      console.error(`Unrecognized event type: ${type}`);
    }
  }

  handleFavorite() {
    this.props.setFavorite(this.props.event['@id'], !this.props.event.favorite);
  }

  render() {
    return this.props.children({
      handleDelete: this.handleDelete.bind(this),
      handleEdit: this.handleEdit.bind(this),
      handleFavorite: this.handleFavorite.bind(this),
    });
  }
} // BaseEventRow

BaseEventRow.propTypes = {
  event: PropTypes.object.isRequired,
};

export default connect(null, { deleteEvent, showModal, setFavorite })(
  BaseEventRow
);
