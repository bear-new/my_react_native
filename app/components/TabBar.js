import React, { Component } from 'react';
import TabBarItem from './TabBarItem';
import {
  View,
  StyleSheet
} from 'react-native';
/* eslint global-require: 0 */

export default class MyTabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homeStatus: true,
      marketStatus: false,
      navigationStatus: false,
      myStatus: false,
    };
  }

  static defaultProps={

  }

  static propTypes={

  }

  onPress(status) {
    const { homeStatus, marketStatus, navigationStatus, myStatus } = this.state;
    this.setState({
      homeStatus: false,
      marketStatus: false,
      navigationStatus: false,
      myStatus: false
    })
    switch(status){
      case 'homeStatus':
        this.setState({homeStatus: true});
        break;
      case 'marketStatus':
        this.setState({marketStatus: true});
        break;
      case 'navigationStatus':
        this.setState({navigationStatus: true});
        break;
      case 'myStatus':
        this.setState({myStatus: true});
        break;
    }
  }

  render() {
    const { homeStatus, marketStatus, navigationStatus, myStatus } = this.state;
    return (
      <View style={styles.tabs}>
        <TabBarItem title='首页'
                    icon={require('../svg/SvgImage/home.svg')}
                    selected={homeStatus}
                    onPress={()=>{this.onPress('homeStatus')}}
        />
        <TabBarItem title='商城'
                    badge='1'
                    icon={require('../svg/SvgImage/market.svg')}
                    selected={marketStatus}
                    onPress={()=>{this.onPress('marketStatus')}}
        />
        <TabBarItem title='导航'
                    icon={require('../svg/SvgImage/navigation.svg')}
                    selected={navigationStatus}
                    onPress={()=>{this.onPress('navigationStatus')}}
        />
        <TabBarItem title='我的'
                    icon={require('../svg/SvgImage/my.svg')}
                    selected={myStatus}
                    onPress={()=>{this.onPress('myStatus')}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
  },
});