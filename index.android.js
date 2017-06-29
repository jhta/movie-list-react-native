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
import MovieList from './src/components/MovieList.js';

class AwesomeProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.goToMovie = this.goToMovie.bind(this);
  }

  static navigationOptions = {
    title: 'WATCHLIST',
  };

  componentWillMount() {

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=461db800c27fdda30417dbf9e3f33b67&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(response => response.json())
      .then((json) => {
        this.setState({list: json.results});
      });
  }

  goToMovie(movie) {
    const { navigate } = this.props.navigation;
    navigate('Movie', movie);
  }

  render() {
    return (
      <MovieList
        list={this.state.list}
        goToMovie={this.goToMovie}
      />
    );
  }
}

class Movie extends Component {
  static navigationOptions = {
    title: 'Movie',
  };
  render() {
    return (
      <View ><Text>hello bitches</Text></View>
    );
  }
}


const App = StackNavigator({
  Main: {
    screen: AwesomeProject,
  },
  Movie: {
    screen: Movie
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
