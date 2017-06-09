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
import { StackNavigator } from 'react-navigation';
import HomeHeader from '../pages/HomeHeader.js';
import MarketHeader from '../pages/MarketHeader.js';

import Slider from '../components/Slider';
import NewsList from '../components/NewsList';

class HomePart extends Component {
	render () {
		return (
			<View style={{flex: 19}}>
				<View style={{flex: 5}}><Slider/></View>
	      		<View style={{flex: 14}}><NewsList/></View>
			</View>
		)
	}
}


class Market extends Component {

	render () {
		return (
			<View style={{flex: 19}}>
				<Text>hello market</Text>
			</View>
		)
	}
}

class Home extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	      homeStatus: true,
	      marketStatus: false,
	      navigationStatus: false,
	      myStatus: false,
	      renderScreen: <HomePart />,
	    };
  	}

  	static navigationOptions = {
    	header: <MarketHeader />,
  	}

  	static defaultProps={

  	}

  	static propTypes={

  	}

  	navigateHome () {
  		this.setState({
  			renderScreen: <HomePart />,
  		})
  	}

  	navigateMarket () {
  		this.setState({
  			renderScreen: <Market />,
  		})
  		this.navigationOptions = {
  			header: <HomeHeader />,
  		}
  	}

  	navigateNavigation () {

  	}

  	navigateMy () {

  	}

	render () {
		const { renderScreen } = this.state;
		const { market } = this.props;
		return (
			<View style={{flex: 1}}>
				{ renderScreen }
				<View style={{flex: 2}}>
					<MyTabBar navigateHome={ this.navigateHome.bind(this) } 
					navigateMarket={ this.navigateMarket.bind(this) } 
					navigateNavigation={ this.navigateNavigation.bind(this) }
					navigateMy={ this.navigateMy.bind(this) }/>
				</View>
			</View>
		)
	}
}

const HomeScreen = StackNavigator({
  	Home: { screen: Home }
});

const styles = StyleSheet.create({
  
});

export default HomeScreen;
