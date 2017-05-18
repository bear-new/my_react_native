import React, { Component } from 'react';
import TabBarItem from './TabBarItem';
import {
  View,
} from 'react-native';
/* eslint global-require: 0 */

export default class MyTabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  static defaultProps={

  }

  static propTypes={

  }

  render() {
    return (
      <View>
        <TabBarItem title='首页'
                    badge='1'
                    selectedIcon={require('../ant-design-icons/秒杀.svg')}
                    icon={require('../ant-design-icons/tabbar/koubei_action.svg')}
                    selected={true}
        />
      </View>
    )
  }
}
