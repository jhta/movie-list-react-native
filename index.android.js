/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieView from './src/views/Detail';
import DiscoverView from './src/views/Discover';
import reducer from './src/reducers/movies.js';
import createSagaMiddleware from 'redux-saga';
import moviesSaga from './src/sagas/movies.js';

const AppNavigation = StackNavigator({
  Main: {
    screen: DiscoverView,
  },
  Movie: {
    screen: MovieView
  }
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(moviesSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
