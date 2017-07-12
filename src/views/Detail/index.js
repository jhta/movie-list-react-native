import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class MovieView extends Component {

  static navigationOptions = {
    title: 'Movie',
  };

  get year() {
    const {
      release_date
    } = this.props.navigation.state.params;
    return release_date.split('-')[0];
  }

  render() {
    const {
      backdrop_path,
      title,
      overview,
      vote_average
    } = this.props.navigation.state.params;
    const pick = {
      uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`
    };

    return (
      <View style={styles.container}>
      <View >
        <FitImage
          resizeMode="contain"
          source={pick}
        />
      </View>
      <View style={{flex: 2, padding: 16}}>
        <Text style={styles.text}>
          {`${title.toUpperCase()} (${this.year})`}
        </Text>
        <Text style={styles.text}>{ overview }</Text>
        <Text style={styles.text}> Average: </Text>
        <Text style={styles.vote}>{ vote_average }</Text>
      </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  image: {
    flex: 2,
    top: 0,
    alignSelf: 'stretch'
  },
  text: {
    fontSize: 16,
    marginTop: 16
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  vote: {
    fontSize: 40,
    marginTop: 16,
    flex: 2,
    alignSelf: 'flex-start',
  }

})

export default MovieView;
