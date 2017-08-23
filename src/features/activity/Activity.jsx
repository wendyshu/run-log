/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import { connect } from 'react-redux';

class Activity extends React.Component {

  constructor(props) {
    super(props);
  }

  renderEvent(event) {
    return (
      <tr key={event['@id']}>
        <td>{event.date}</td>
        <td>{event.category}</td>
        <td>{event.distance ? event.distance : '-'}</td>
        <td>{event.duration ? event.duration : '-'}</td>
        <td>{event.notes ? event.notes : '-'}</td>
        <td className="actions">
          <a href="#" className="glyphicon glyphicon-pencil"/>
          <a href="#" className="glyphicon glyphicon glyphicon-trash"/>
        </td>
      </tr>
    );
  }

  renderRunEvents() {
    const runEvents = this.props.events.data
      .filter(e => e['@type'] === 'Run');

    if (runEvents.length) {
      return runEvents.map(e => this.renderEvent(e));
    } else {
      return (
        <tr>
          <td colSpan="6">Loading...</td>
        </tr>
      );
    }
  }

  render() {
    return (
      <div className="activity">
        <div className="row">
          <div className="col-xs-12">
            <div className="jumbotron">
              <h1>Featured Speed Run</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ex, imperdiet non pulvinar sit amet, finibus non justo. Ut et rutrum quam. Sed dignissim arcu bibendum tortor lobortis ultrices.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 global-actions">
            <button type="button" className="btn btn-primary btn-lg">
              <span className="glyphicon glyphicon-plus"/>
              <span>Entry</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 entries">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Distance</th>
                  <th>Duration</th>
                  <th>Notes</th>
                  <th className="actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.renderRunEvents() }
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
