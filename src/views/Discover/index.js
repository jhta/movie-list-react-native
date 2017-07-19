import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieList from '../../components/MovieList.js';
import Form from '../../components/Form.js';

class DiscoverView extends Component {

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
      <View style={{flex: 1}}>
        <Form />
        <MovieList
          list={this.state.list}
          goToMovie={this.goToMovie}
        />
      </View>
    );
  }
}

export default DiscoverView;
