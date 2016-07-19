/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

let QuickLook = require('react-native-quick-look');

class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          QuickLook Demo!
        </Text>
        <View style={{ flex: 1, backgroundColor: 'green', margin: 30 }}>
          <QuickLook style={{ flex: 1 }} assetFileName={ 'Demo.pdf' } />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingTop: 40
  }
});

AppRegistry.registerComponent('Example', () => Example);
