/*eslint-disable no-unused-vars*/
import React from 'react';
import CrossTrainRow from './row/crossTrainRow/CrossTrainRow.jsx';
import RunCrossTrainRow from './row/runCrossTrainRow/RunCrossTrainRow.jsx';
import RunRow from './row/runRow/RunRow.jsx';
import AddEvent from './addEvent/AddEvent.jsx';
import FeaturedRun from '../featuredRun/FeaturedRun.jsx';
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
    return this.filteredEvents(['Run','Run+CrossTrain','CrossTrain']);
  }

  renderFitnessEvents() {
    return this.fitnessEvents().map(e => {
      switch(e['@type']) {
      case 'Run':
        return ( <RunRow event={e} key={e['@id']} /> );
      case 'Run+CrossTrain':
        return ( <RunCrossTrainRow event={e} key={e['@id']} /> );
      case 'CrossTrain':
        return ( <CrossTrainRow event={e} key={e['@id']} /> );
      }
    });
  }

  render() {
    return (
      <div className="activity">
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
