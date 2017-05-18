import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
/* eslint global-require: 0 */
import SvgUri from 'react-native-svg-uri';

export default class TabBarItem extends Component {

  constructor(props) {
    super(props);
    console.log(this)
    this.state = {
      selected: this.props.selected,
      tintColor: '#F25C29',
      unselectedTintColor: '#333',
    };
  }

  static defaultProps={
    
  }

  static propTypes={
      badge: React.PropTypes.string,
  }

  test() {
    console.log(111)
  }

  onPress() {
    let selected = this.state.selected;
    this.setState({
      selected: !selected
    })
  }

  render() {
    const { title, badge, selectedIcon, icon } = this.props;
    const { selected, tintColor, unselectedTintColor } = this.state;
    return (
      <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
        <View style={{}}>
          <View style={styles.barIconbox}>
            <SvgUri
              width="30"
              height="30"
              fill={selected ? '#000':'#000'}
              source={selected ? selectedIcon : icon}
            />
            <Text>{ badge ? badge : '' }</Text>
          </View>
          <Text style={[ styles.barItemTitle, { color: selected ? tintColor : unselectedTintColor }]}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  barItem: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barIconbox: {
    flexDirection: 'row',
  },
  barIcon: {
    width: 20,
    height: 20
  },
  barItemTitle: {

  }
});
