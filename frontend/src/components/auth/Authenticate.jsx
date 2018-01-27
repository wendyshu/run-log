/*eslint-disable no-unused-vars*/
import React from 'react';
import Loader from 'react-loader';
import { Form, Text } from 'react-form';
/*eslint-enable no-unused-vars*/

import './authenticate.scss';

import { checkSession, login } from './actions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Authenticate extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.checkSession();
  }

  onSubmit({ username, password }) {
    this.props.login(username, password);
  }

  validate({ username, password }) {
    return {
      username: !username ? 'Please specify username' : undefined,
      password: !password ? 'Please specify password' : undefined,
    };
  }

  hint(e) {
    alert('Pssst: demo/demo');
    e.preventDefault();
  }

  formContents({ submitForm }) {
    return (
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="category">Username</label>
          <Text className="form-control" field="username" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="category">Password</label>
          <Text className="form-control" field="password" type="password" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <a className="hint" onClick={this.hint}>
          <span className="glyphicon glyphicon-question-sign" />
        </a>
      </form>
    );
  } // formContents

  render() {
    if (this.props.authenticate.authenticated) {
      return this.props.children;
    } else if (this.props.authenticate.loading) {
      return <Loader />;
    } else {
      const msg = this.props.authenticate.message;
      const alert = msg ? (
        <div className="alert alert-danger" role="alert">
          {msg}
        </div>
      ) : null;

      return (
        <div className="authenticate">
          {alert}
          <Form onSubmit={this.onSubmit.bind(this)} validate={this.validate}>
            {this.formContents.bind(this)}
          </Form>
        </div>
      );
    }
  }
} // Authenticate

function mapStateToProps(state) {
  return {
    authenticate: state.authenticate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user, pw) => dispatch(login(user, pw)),
    checkSession: () => dispatch(checkSession()),
  };
}

Authenticate.propType = {
  children: PropTypes.element.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
