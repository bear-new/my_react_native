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
import NewsList from '../components/NewsList';
import MyTabBar from '../components/TabBar';

export default class Home extends Component {
	
	render () {
		const { market } = this.props;
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 5}}><Slider/></View>
				<View style={{flex: 14}}><NewsList/></View>
				<View style={{flex: 2}}><MyTabBar navigateMarket={market}/></View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  
});
