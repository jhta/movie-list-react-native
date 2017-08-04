import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieList from '../../components/MovieList.js';
import Form from '../../components/Form.js';
import { fetchMovies } from '../../api.js';

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
    fetchMovies()
      .then(response => {
        if (!response.ok) {
          throw Error(`status: ${response.status}, ${response.responseText}`)
        }
        return response.json();
      })
      .then((json) => {
        this.setState({list: json.results});
      })
      .catch((error) => console.log("the error:", error));
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
