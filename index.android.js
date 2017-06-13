/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

/*redux*/
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './app/reducers';

/*components*/
import HomeScreen from './app/pages/Home.js';

const store = createStore(reducers)

class my_react_native extends React.Component {

  render() {
    return (
      <View>
        <HomeScreen />
      </View>
    )
  }
}

AppRegistry.registerComponent('my_react_native', () => my_react_native);
