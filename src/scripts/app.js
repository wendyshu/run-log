require('es6-promise').polyfill();

/*eslint-disable no-unused-vars*/
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/App.jsx';
/*eslint-enable no-unused-vars*/

// lib
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// custom
import rootReducer from './reducers';

// assets
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const root = document.getElementById('root');
const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>, root);
