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
import HomeHeader from './app/components/HomeHeader.js';
import MyTabBar from './app/components/TabBar';
import Home from './app/pages/Home.js';
import ChatScreen from './app/pages/ChatScreen.js';
import { Icon } from 'antd-mobile';

class my_react_native extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <Home />
      </View>)
  }
}

AppRegistry.registerComponent('my_react_native', () => my_react_native);
