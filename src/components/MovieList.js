import React, { PropTypes } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import palette from '../utils/palette.js';
import MovieItem from './MovieItem.js';


const MovieList = ({ list = [], goToMovie }) => {
  return (
    <ScrollView style={style.list}>
      {
        list.map((item, index) => (
          <MovieItem movie={item} key={index} goToMovie={goToMovie}/>
      ))
      }
    </ScrollView>
  );
}


const style = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: palette.DIVIDER
  },
})



export default MovieList;
