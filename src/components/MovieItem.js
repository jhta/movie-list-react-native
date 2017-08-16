import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';

const MovieItem = ({ movie, goToMovie }) => {

  const { poster_path, title, overview, vote_average } = movie;
  const pick = {
    uri: `https://image.tmdb.org/t/p/w300${poster_path}`
  };

  return (
    <View style={style.container}>
      <Image source={pick} style={style.image}/>
      <View style={style.content}>
        <View style={style.description}>
          <Text style={style.title}>{title.slice(0, 40).toUpperCase()}</Text>
          <Text>{`${overview.slice(0,90)}...`}</Text>
        </View>
        <View style={style.meta}>
          <View style={style.metaOption}>
            <Text style={style.metaText}>{`${vote_average}/10`}</Text>
          </View>
          <TouchableHighlight underlayColor="white" onPress={() => { goToMovie(movie) }}>
            <View style={style.metaOption}>
              <Text style={style.metaText}>More info</Text>
            </View>
        </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 210,
    marginTop: 4
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    borderColor: '#ccc',
    borderLeftWidth: 1
  },
  description: {
    padding: 16,
    alignSelf: 'stretch'
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold'
  },
  image: {
    width: 140,
    height: 209,
    borderRightWidth: 1,
    borderColor: '#ccc'
  },
  meta: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignSelf: 'stretch'
  },
  metaOption: {
    flex: 0.5,
    borderRightColor: '#ddd',
    borderRightWidth: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  metaText: {
    fontSize: 16
  }

})

export default MovieItem;
