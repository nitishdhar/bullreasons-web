import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';

// Provider is a top-level component that wrapps our entire application, including
// the Router.
ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);
