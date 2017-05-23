import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
/* eslint global-require: 0 */
import SvgUri from '../svg/SvgUri/index.js';

export default class TabBarItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tintColor: '#F25C29',
      unselectedTintColor: 'rgb(148, 148, 148)',
    };
  }

  static defaultProps={
    
  }

  static propTypes={
      badge: React.PropTypes.string,
  }

  render() {
    const { selected, title, badge, selectedIcon, icon, onPress } = this.props;
    const { tintColor, unselectedTintColor } = this.state;
    const badgeNum = badge ? badge : '';
    const badgeStyle = badge ? styles.badge : '';
    return (
      <View style={styles.barItem}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View>
            <View style={styles.barIconbox}>
              <SvgUri
                width="30"
                height="30"
                fill={selected ? tintColor : unselectedTintColor}
                source={icon}
              />
              <Text style={ badgeStyle }>{ badgeNum }</Text>
            </View>
            <Text style={[ styles.barItemTitle, { color: selected ? tintColor : unselectedTintColor }]}>
              {title}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barItem: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barIconbox: {
    flexDirection: 'row',
  },
  badge: {
    color: '#FFF',
    backgroundColor: '#F25C29',
    width: 15,
    height: 15,
    lineHeight: 15,
    fontSize: 10,
    textAlign: 'center',
    borderRadius: 50,

  },
  barItemTitle: {
    fontSize: 12,
    paddingLeft: 4
  },
});
