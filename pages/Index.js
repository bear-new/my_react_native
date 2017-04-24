import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	ScrollView,
} from 'react-native';
import Slider from '../components/Slider';

export default class Index extends Component {
	render () {
		return (
			<View>
				<Slider />
			</View>
		)
	}
}
