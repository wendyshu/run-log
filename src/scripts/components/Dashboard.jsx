/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

export default () => (
  <div className="dashboard">
    <div className="row">
      <div className="col-xs-12">
        <div className="jumbotron">
          <h1>Featured Distance Run</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu ex, imperdiet non pulvinar sit amet, finibus non justo. Ut et rutrum quam. Sed dignissim arcu bibendum tortor lobortis ultrices.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="container-fluid">
          <nav className="row">
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">30 day</a></li>
              <li role="presentation"><a href="#">All</a></li>
            </ul>
          </nav>
          <div className="row">
            <div className="widget-stub col-xs-12">(chart)</div>
          </div> {/* .row */}
        </div>
      </div>
      <div className="col-md-6">
        <div className="container-fluid">
          <div className="row">
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">30 day</a></li>
              <li role="presentation"><a href="#">All</a></li>
            </ul>
          </div>
          <div className="row widget-stats">
            <div className="widget-stat col-xs-4">(chart)</div>
            <div className="widget-stat col-xs-4">(chart)</div>
            <div className="widget-stat col-xs-4">(chart)</div>
          </div>
        </div> {/* .row */}
      </div>
    </div> {/* .row */}
    <div className="row">
      <div className="col-md-6">
        <div className="container-fluid">
          <nav className="row">
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">30 day</a></li>
              <li role="presentation"><a href="#">All</a></li>
            </ul>
          </nav>
          <div className="row">
            <div className="widget-stub col-xs-12">(chart)</div>
          </div> {/* .row */}
        </div>
      </div>
      <div className="col-md-6">
        <div className="container-fluid">
          <div className="row">
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">Shoes</a></li>
            </ul>
          </div>
          <div className="row widget-stats">
            <div className="widget-stat col-xs-4">(chart)</div>
            <div className="widget-stat col-xs-4">(chart)</div>
            <div className="widget-stat col-xs-4">(chart)</div>
          </div>
        </div> {/* .row */}
      </div>
    </div> {/* .row */}
  </div>
);
