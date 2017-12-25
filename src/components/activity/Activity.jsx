/*eslint-disable no-unused-vars*/
import React from 'react';
import RowWithRun from './row/RowWithRun';
import RowWithoutRun from './row/RowWithoutRun';
import AddEvent from './addEvent/AddEvent';
import FeaturedRun from 'run-log/components/featuredRun/FeaturedRun';
import ModalWithRun from './modals/ModalWithRun';
import ModalWithoutRun from './modals/ModalWithoutRun';
/*eslint-enable no-unused-vars*/

import './activity.scss';

import {
  MODAL_SHOES,
  MODAL_RUN,
  MODAL_RUN_CROSS_TRAIN,
  MODAL_CROSS_TRAIN
} from './modals/actions';
import { connect } from 'react-redux';

class Activity extends React.Component {
  constructor(props) {
    super(props);
  }

  filteredEvents(types) {
    return this.props.events.data.filter(e => types.includes(e['@type']));
  }

  runEvents() {
    return this.filteredEvents(['Run', 'Run+CrossTrain']);
  }

  fitnessEvents() {
    return this.filteredEvents([
      'Run',
      'Run+CrossTrain',
      'CrossTrain',
      'ChangeShoes'
    ]);
  }

  renderFitnessEvents() {
    return this.fitnessEvents().map(e => {
      switch (e['@type']) {
        case 'Run':
        case 'Run+CrossTrain':
          return <RowWithRun event={e} key={e['@id']} />;
        case 'CrossTrain':
        case 'ChangeShoes':
          return <RowWithoutRun event={e} key={e['@id']} />;
      }
    });
  }

  render() {
    return (
      <div className="activity">
        <div className="modals">
          <ModalWithRun
            modalType={MODAL_RUN}
            modalTitle="Run"
            eventType="Run"
          />
          <ModalWithRun
            modalType={MODAL_RUN_CROSS_TRAIN}
            modalTitle="Run + Cross-Train"
            eventType="Run+CrossTrain"
          />
          <ModalWithoutRun
            modalType={MODAL_CROSS_TRAIN}
            modalTitle="Cross-Train"
            eventType="CrossTrain"
          />
          <ModalWithoutRun
            modalType={MODAL_SHOES}
            modalTitle="Running Shoes"
            eventType="ChangeShoes"
          />
        </div>
        <div className="row">
          <div className="col-xs-12">
            <FeaturedRun events={this.runEvents()} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 global-actions">
            <AddEvent />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 entries">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="data-date">Date</th>
                  <th className="data-icons" />
                  <th className="data-category">Category</th>
                  <th className="data-distance">Distance</th>
                  <th className="data-duration">Duration</th>
                  <th className="data-notes">Notes</th>
                  <th className="data-actions">Actions</th>
                </tr>
              </thead>
              <tbody>{this.renderFitnessEvents()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } // render
} // Activity

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

Activity.propTypes = {};

export default connect(mapStateToProps, {})(Activity);
