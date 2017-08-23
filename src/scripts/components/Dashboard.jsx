/*eslint-disable no-unused-vars*/
import React from 'react';
import { selectDashboardTab } from '../actions';
/*eslint-enable no-unused-vars*/

import { connect } from 'react-redux';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard">

        <div className="row">
          <div className="col-xs-12">
            <div className="jumbotron">
              <h1>Featured Distance Run</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ex, imperdiet non pulvinar sit amet, finibus non justo. Ut et rutrum quam. Sed dignissim arcu bibendum tortor lobortis ultrices.</p>
            </div>
          </div>
        </div> {/* .row */}

        <div className="row">
          <div className="col-sm-12">
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a onClick={() => this.props.selectDashboardTab('7d')}>7 day</a></li>
              <li role="presentation"><a onClick={() => this.props.selectDashboardTab('30d')}>30 day</a></li>
              <li role="presentation"><a onClick={() => this.props.selectDashboardTab('365d')}>365 day</a></li>
              <li role="presentation"><a onClick={() => this.props.selectDashboardTab('all')}>All</a></li>
            </ul>
          </div>
        </div> {/* .row */}

        <div className="row">
          <div className="col-md-6">
            <h2><div className="label label-info">Distance</div></h2>
            <div className="widget-stub col-xs-12">(chart)</div>
          </div>
          <div className="col-md-6">
            <h2><div className="label label-info">This Week</div></h2>
            <div className="widget-stats">
              <div className="widget-stat col-xs-4">(chart)</div>
              <div className="widget-stat col-xs-4">(chart)</div>
              <div className="widget-stat col-xs-4">(chart)</div>
            </div>
          </div>
        </div> {/* .row */}

        <div className="row">
          <div className="col-md-6">
            <h2><div className="label label-info">Breakdown</div></h2>
            <div className="widget-stub col-xs-12">(chart)</div>
          </div>
          <div className="col-md-6">
            <h2><div className="label label-info">Shoes</div></h2>
            <div className="widget-stats">
              <div className="widget-stat col-xs-4">(chart)</div>
              <div className="widget-stat col-xs-4">(chart)</div>
              <div className="widget-stat col-xs-4">(chart)</div>
            </div>
          </div>
        </div> {/* .row */}

      </div>
    );
  }
} // Dashboard

function mapStateToProps(state) {
  console.log('DEBUG:', state);
  return {
    ui: state.dashboard.ui
  };
}

export default connect(mapStateToProps, { selectDashboardTab })(Dashboard);
