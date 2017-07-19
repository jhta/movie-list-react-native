import React from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';


const Form = (props) => {

  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="wonder woman" />
      <Button title="search" onPress={e => console.log(e)} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 20
  }
})

export default Form;
