import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet
} from 'react-native';


const Spinner = (props) =>
  <ActivityIndicator
    animating
    style={styles.base}
    size="large"
  />;


const styles = StyleSheet.create({
  base: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Spinner;
