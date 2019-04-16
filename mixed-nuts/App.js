import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Home from './components/Home';
import Request from './components/Request';
import reducers from './reducers';
import CurrentPosition from './components/CurrentPosition';

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <Home />
        <CurrentPosition />
        <Request/>
      </Provider>
    );
  }
}
