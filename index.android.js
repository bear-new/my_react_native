/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Index from './pages/Index';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

export default class my_react_native extends Component {
    renderScene (route, navigator) {
      return <route.component navigator={navigator} />
    }
    render() {
        return ( 
          <Navigator 
            style={styles.container}
            renderScene={this.renderScene.bind(this)}
            initialRoute={{
              title: '首页',
              component: Index,
            }}
          />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});

AppRegistry.registerComponent('my_react_native', () => my_react_native);
