import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MovieItem = ({ movie, goToMovie }) => {

  const { poster_path, title, overview, vote_average } = movie;
  const pick = {
    uri: `https://image.tmdb.org/t/p/w300${poster_path}`
  };

  return (
    <TouchableHighlight underlayColor="white" onPress={() => { goToMovie(movie) }}>
      <View style={style.container}>
        <Image source={pick} style={style.image}/>
        <View style={style.content}>
          <View style={style.description}>
            <Text style={style.title}>{title.slice(0, 40).toUpperCase()}</Text>
            <Text>{`${overview.slice(0,90)}...`}</Text>
          </View>
          <View style={style.meta}>
            <TouchableHighlight onPress={() => { console.log("_______+++::::::____") }}>
            <View style={{padding: 10, borderColor: "#ccc", borderWidth: 1}}>
              <Icon name="plus" size={20} color="#ccc" />
            </View>
          </TouchableHighlight>
            <View style={style.metaOption}>
              <Text style={style.metaText}>{`${vote_average}/10`}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
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
    height: 180,
    marginTop: 4
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    borderColor: '#ccc',
    borderLeftWidth: 1
  },
  description: {
    padding: 10,
    alignSelf: 'stretch'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    width: 126,
    height: 178,
    borderRightWidth: 1,
    borderColor: '#ccc'
  },
  meta: {
    flexDirection: 'row',
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
