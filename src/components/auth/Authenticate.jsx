/*eslint-disable no-unused-vars*/
import React from 'react';
import Loader from 'react-loader';
/*eslint-enable no-unused-vars*/

import './authenticate.scss';

import {login} from './actions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Text } from 'react-form';

class Authenticate extends React.Component {

  constructor(props) {
    super(props);
  }

  onSubmit({username, password}) {
    this.props.login(username, password);
  }

  validate({username, password}) {
    return {
      username: ! username ? 'Please specify username' : undefined,
      password: ! password ? 'Please specify password' : undefined,
    };
  }

  formContents({submitForm}) {
    return (
      <form onSubmit={submitForm}>

        <div className='form-group'>
          <label htmlFor='category'>Username</label>
          <Text className='form-control' field='username' type='text' />
        </div>

        <div className='form-group'>
          <label htmlFor='category'>Password</label>
          <Text className='form-control' field='password' type='password' />
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  } // formContents

  render() {
    if (this.props.authenticate.authenticated) {
      return this.props.children;
    } else {
      return (
        <div className="authenticate">
          <Form onSubmit={this.onSubmit.bind(this)} validate={this.validate}>
            {this.formContents.bind(this)}
          </Form>
        </div>
      );
    }
  }

}; // Authenticate

function mapStateToProps(state) {
  return {
    authenticate: state.authenticate
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user, pw) => dispatch(login(user, pw))
  };
}

Authenticate.propType = {
  children: PropTypes.element.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
