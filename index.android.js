/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieView from './src/views/Detail';
import DiscoverView from './src/views/Discover';


const App = StackNavigator({
  Main: {
    screen: DiscoverView,
  },
  Movie: {
    screen: MovieView
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
