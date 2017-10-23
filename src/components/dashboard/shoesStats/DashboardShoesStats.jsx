/*eslint-disable no-unused-vars*/
import React from 'react';
import DashboardStats from 'run-log/components/dashboard/stats/DashboardStats.jsx';
/*eslint-enable no-unused-vars*/

function dummyStats() {
  return { name:'Lorem Ipsum', value:'N/A' };
}

export default (props) => {
  console.log('Change shoes events', props.events); // TODO:
  return (
    <div>
      <DashboardStats stats={dummyStats()}/>
      <DashboardStats stats={dummyStats()}/>
      <DashboardStats stats={dummyStats()}/>
    </div>
  );
};
