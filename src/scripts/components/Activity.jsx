/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

export default () => (
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
            <tr>
              <td>2017-08-19</td>
              <td>Casual</td>
              <td>5.23mi</td>
              <td>51min 30sec</td>
              <td>Ann Arbor: Stadium to TJ to Washtenaw to South U</td>
              <td className="actions">
                <a href="#" className="glyphicon glyphicon-pencil"/>
                <a href="#" className="glyphicon glyphicon glyphicon-trash"/>
              </td>
            </tr>
            <tr>
              <td>2017-08-16</td>
              <td>Casual</td>
              <td>2.67mi</td>
              <td>-</td>
              <td>-</td>
              <td className="actions">
                <a href="#" className="glyphicon glyphicon-pencil"/>
                <a href="#" className="glyphicon glyphicon glyphicon-trash"/>
              </td>
            </tr>
            <tr>
              <td>2017-08-15</td>
              <td>Casual</td>
              <td>4.39mi</td>
              <td>-</td>
              <td>Ann Arbor: Main to Stadium to mall.</td>
              <td className="actions">
                <a href="#" className="glyphicon glyphicon-pencil"/>
                <a href="#" className="glyphicon glyphicon glyphicon-trash"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
