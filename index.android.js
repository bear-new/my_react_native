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
import { StackNavigator } from 'react-navigation';
import HomeHeader from './app/pages/HomeHeader.js';
import Home from './app/pages/Home.js';
import ChatScreen from './app/pages/ChatScreen.js';
import { Icon } from 'antd-mobile';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: <HomeHeader />,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Home />
      </View>)
  }
}

const my_react_native = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('my_react_native', () => my_react_native);
