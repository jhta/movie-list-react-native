import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieList from '../../components/MovieList.js';
import Form from '../../components/Form.js';
import API from '../../api.js';

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
    console.log(API)
    console.log(API.discover)
    API.discover()
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        console.log('error:', response.status);
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
