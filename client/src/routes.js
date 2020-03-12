import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/app';
import { createStore } from 'redux';
import todoApp from './reducers';
import { Provider } from 'react-redux'


let store = createStore(todoApp)
console.log(store.getState())
/**
 * Provider deliver created 'store' to inner components
 */
export default  (props) => (
<Provider store={store}>
  <Router {...props}>
    <Route path="/" component={App} />
  </Router>
</Provider>
);

