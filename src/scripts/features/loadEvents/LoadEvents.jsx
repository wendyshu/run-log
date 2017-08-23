/*eslint-disable no-unused-vars*/
import React from 'react';
import { loadActivity } from './actions';
/*eslint-enable no-unused-vars*/

import { connect } from 'react-redux';

class LoadEvents extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadActivity();
  }

  render() {
    return (
      <div className="load-events-wrapper">
        {this.props.children}
      </div>
    );
  }

}; // LoadEvents

function mapStateToProps(state) {
  return {
    activity: state.activity
  };
}

export default connect(mapStateToProps, { loadActivity })(LoadEvents);
