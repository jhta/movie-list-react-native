import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    const { onSearch } = this.props;
    const { text } = this.state;
    return (
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Wonderwoman"
          underlineColorAndroid="transparent"
          value={text}
          onChangeText={text => { this.setState({ text }) }}
        />
        <TouchableHighlight onPress={e => { onSearch(this.state.text) }}>
          <View style={styles.search}>
            <Icon name="search" size={22} color="#ccc"/>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    padding: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 20,
    borderBottomWidth: 0
  },
  search: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Form;
