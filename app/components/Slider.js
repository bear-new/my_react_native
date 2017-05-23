import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
	View,
	Text,
	Image,
    StyleSheet,
} from 'react-native';

const dotElement = {};
export default class Slider extends Component {
	render() {
		return (
			<Swiper style={styles.wrapper}
					horizontal={true} 
					autoplay={true}
					autoplayTimeout={5}
					height={140}
					paginationStyle={{position: 'absolute', bottom: 5}}
					dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, }} />}
					activeDotStyle={{backgroundColor: 'rgba(255,255,255,.8)'}}
					showsPagination={true}
					nextButton={<Text style={styles.buttonText}>›</Text>}
					prevButton={<Text style={styles.buttonText}>‹</Text>}
					showsButtons={true}>
				<Image style={[styles.slide,]} source={require('../images/add1.jpg')}></Image>
        		<Image style={[styles.slide,]} source={require('../images/add2.jpg')}></Image>
        		<Image style={[styles.slide,]} source={require('../images/add3.png')}></Image>
        		<Image style={[styles.slide,]} source={require('../images/add4.jpg')}></Image>
			</Swiper>
		)
	}
}

const styles = StyleSheet.create({
    wrapper: {
    	height: 150,	
    },
    slide: {
    	width: 360,
    	height: 135,
    	resizeMode: Image.resizeMode.stretch,
    },
    buttonText: {
    	fontSize: 50,
    	color: 'rgb(255,255,255)',
    }
});