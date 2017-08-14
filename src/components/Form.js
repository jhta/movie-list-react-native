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
          underlayColor="black"
          value={text}
          onChangeText={text => { this.setState({ text }) }}
        />
        <TouchableHighlight onPress={e => { onSearch(text) }}>
          <View style={styles.search}>
            <Icon name="search" size={30} color="#000"/>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 20
  },
  search: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Form;
