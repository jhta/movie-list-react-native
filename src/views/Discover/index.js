import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieList from '../../components/MovieList.js';
import Spinner from '../../components/Spinner.js';
import Form from '../../components/Form.js';
import { fetchMovies as fetchMoviesAction } from '../../actions';


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
    this.props.load();
  }

  goToMovie(movie) {
    const { navigate } = this.props.navigation;
    navigate('Movie', movie);
  }

  render() {
    const { isLoading, error, movies } = this.props;
    return (
      <View style={{flex: 1}}>
        <Text>{ error ? "paila socio" : null}</Text>
        <Form />
        {
          isLoading ?
            <Spinner />
            :
            <MovieList
              list={movies}
              goToMovie={this.goToMovie}
            />
        }
      </View>
    );
  }
}

const mapStateToProps = ({ movies, isLoading, error })=> ({
  movies,
  isLoading,
  error
});

const mapDispatchToProps = dispatch => ({
  load() {
    dispatch(fetchMoviesAction())
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverView);
