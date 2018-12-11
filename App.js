
import React from 'react';
import { AppRegistry } from 'react-native';
import ListView from './src/ListView';
import {Platform, StyleSheet, Text, View} from 'react-native';

class TodoApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ListView></ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  }
});

AppRegistry.registerComponent('TodoApp', () => TodoApp);

export default TodoApp;
