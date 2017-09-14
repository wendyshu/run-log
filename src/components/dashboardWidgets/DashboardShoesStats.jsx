/*eslint-disable no-unused-vars*/
import React from 'react';
import DashboardStats from './DashboardStats.jsx';
/*eslint-enable no-unused-vars*/

export default (props) => {
  console.log('Change shoes events...', props.events); // TODO:
  return (
    <DashboardStats title={props.title} stats={[
      { name:'Lorem Ipsum', value:'N/A' },
      { name:'Lorem Ipsum', value:'N/A' },
      { name:'Lorem Ipsum', value:'N/A' }
    ]}/>
  );
};
