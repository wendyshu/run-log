/*eslint-disable no-unused-vars*/
import React from 'react';
import RowWithRun from './row/RowWithRun.jsx';
import RowWithoutRun from './row/RowWithoutRun.jsx';
import AddEvent from './addEvent/AddEvent.jsx';
import FeaturedRun from '../featuredRun/FeaturedRun.jsx';
import CrossTrainModal from './modals/crossTrainModal/CrossTrainModal.jsx';
import RunCrossTrainModal from './modals/runCrossTrainModal/RunCrossTrainModal.jsx';
import RunModal from './modals/runModal/RunModal.jsx';
import ShoesModal from './modals/shoesModal/ShoesModal.jsx';
/*eslint-enable no-unused-vars*/

import { connect } from 'react-redux';

class Activity extends React.Component {

  constructor(props) {
    super(props);
  }

  filteredEvents(types) {
    return this.props.events.data
      .filter(e => types.includes(e['@type']));
  }

  runEvents() {
    return this.filteredEvents(['Run','Run+CrossTrain']);
  }

  fitnessEvents() {
    return this.filteredEvents(['Run','Run+CrossTrain','CrossTrain', 'ChangeShoes']);
  }

  renderFitnessEvents() {
    return this.fitnessEvents().map(e => {
      switch(e['@type']) {
      case 'Run':
      case 'Run+CrossTrain':
        return ( <RowWithRun event={e} key={e['@id']} /> );
      case 'CrossTrain':
      case 'ChangeShoes':
        return ( <RowWithoutRun event={e} key={e['@id']} /> );
      }
    });
  }

  render() {
    return (
      <div className="activity">
        <div className='modals'>
          <RunModal />
          <CrossTrainModal />
          <RunCrossTrainModal />
          <ShoesModal />
        </div>
        <div className="row">
          <div className="col-xs-12">
            <FeaturedRun events={this.runEvents()}/>
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
                  <th className="data-icons"></th>
                  <th className="data-category">Category</th>
                  <th className="data-distance">Distance</th>
                  <th className="data-duration">Duration</th>
                  <th className="data-notes">Notes</th>
                  <th className="data-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.renderFitnessEvents() }
              </tbody>
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

export default connect(mapStateToProps, {})(Activity);
