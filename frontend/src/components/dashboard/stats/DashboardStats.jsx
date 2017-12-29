/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

export default props => (
  <div className="widget-stat col-xs-4">
    <div className="name">{props.stats.name}</div>
    <div className="value">{props.stats.value}</div>
  </div>
);
