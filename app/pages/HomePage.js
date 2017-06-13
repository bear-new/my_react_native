import React, { Component } from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';

import Slider from '../components/Slider';
import NewsList from '../components/NewsList';

export default class HomePage extends React.Component {
	render () {
		return (
			<View style={{flex: 19}}>
				<View style={{flex: 5}}><Slider/></View>
	      		<View style={{flex: 14}}><NewsList/></View>
			</View>
		)
	}
}