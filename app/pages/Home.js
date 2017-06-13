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
/*components*/
import { StackNavigator } from 'react-navigation';
import MyTabBar from '../components/TabBar';
import navigateStatus from '../reducers/index.js';

import HomeHeader from '../pages/HomeHeader.js'
import MarketHeader from '../pages/MarketHeader.js'
import HomePage from '../pages/HomePage.js'
import MarketPage from '../pages/MarketPage.js'
/*redux*/
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NavigateActions from '../actions'

const store = createStore(navigateStatus)

class Home extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	      	header: <HomeHeader />,
	      	page: <HomePage />
	    };
  	}

  	static navigationOptions = {
    	header: this.state.header,
  	}

	render () {
		return (
			<View style={{flex: 1}}>
				{ this.state.page }
				<View style={{flex: 2}}>
					<MyTabBar />
				</View>
			</View>
		)
	}
}

const HomeScreen = StackNavigator({
  	Home: { screen: Home }
});

const mapStateToProps = state => ({
  navigates: state.navigates
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(NavigateActions, dispatch)
})

export default HomeScreen;