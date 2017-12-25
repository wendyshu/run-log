/*eslint-disable no-unused-vars*/
import React from 'react';
import { loadEvents } from './actions';
import Loader from 'react-loader';
/*eslint-enable no-unused-vars*/

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class LoadEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadEvents();
  }

  render() {
    return (
      <Loader loaded={!this.props.events.loading}>{this.props.children}</Loader>
    );
  }
} // LoadEvents

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

LoadEvents.propType = {
  children: PropTypes.element.isRequired
};

export default connect(mapStateToProps, { loadEvents })(LoadEvents);
