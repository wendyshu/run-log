/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

export default (props) => (
  <div className="widget-stats">
    <div className="widget-stat col-xs-4">
      <div className="name">{props.stats[0].name}</div>
      <div className="value">{props.stats[0].value}</div>
    </div>
    <div className="widget-stat col-xs-4">
      <div className="name">{props.stats[1].name}</div>
      <div className="value">{props.stats[1].value}</div>
    </div>
    <div className="widget-stat col-xs-4">
      <div className="name">{props.stats[2].name}</div>
      <div className="value">{props.stats[2].value}</div>
    </div>
  </div>
);
