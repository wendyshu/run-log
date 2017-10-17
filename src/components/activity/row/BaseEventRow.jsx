/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import { MODAL_RUN } from '../modals/runModal/actions';
import { MODAL_CROSS_TRAIN } from '../modals/crossTrainModal/actions';
import { MODAL_RUN_CROSS_TRAIN } from '../modals/runCrossTrainModal/actions';
import { MODAL_SHOES } from '../modals/shoesModal/actions';
import { deleteEvent, setFavorite } from '../../events/actions';
import { showModal } from '../modals/actions';

import { connect } from 'react-redux';

class EventRow extends React.Component {

  constructor(props) {
    super(props);
  }

  handleDelete() {
    if (confirm('Really delete?')) {
      this.props.deleteEvent(this.props.event['@id']);
    }
  }

  handleEdit() {
    const type = this.props.event['@type'];
    if ('Run' === type) {
      this.props.showModal(MODAL_RUN, this.props.event);
    } else if ('CrossTrain' === type) {
      this.props.showModal(MODAL_CROSS_TRAIN, this.props.event);
    } else if ('Run+CrossTrain' === type) {
      this.props.showModal(MODAL_RUN_CROSS_TRAIN, this.props.event);
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
      handleFavorite: this.handleFavorite.bind(this)
    });
  }

}

export default connect(null, {deleteEvent, showModal, setFavorite})(EventRow);
