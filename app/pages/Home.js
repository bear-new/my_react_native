import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	TouchableHighlight,
	ScrollView,
} from 'react-native';
import Slider from '../components/Slider';
import MyTabBar from '../components/TabBar';
import SvgUri from 'react-native-svg-uri';

export default class Home extends Component {
	
	render () {
		return (
			<View>
				<Slider />
				<MyTabBar />
			</View>
		)
	}
}

const styles = StyleSheet.create({
    svgStyle: {
      width: 60,
      height: 60
    }
});
