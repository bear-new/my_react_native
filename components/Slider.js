import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
	View,
	Text,
	Image,
    StyleSheet,
} from 'react-native';

const sliderImgs = [
	'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

const dotElement = {};
export default class Slider extends Component {
	render() {
		return (
			<Swiper style={styles.wrapper}
					horizontal={true} 
					autoplay={true}
					autoplayTimeout={3}
					height={70}
					paginationStyle={{position: 'absolute', bottom: 5}}
					dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, }} />}
					activeDotStyle={{backgroundColor: 'rgba(255,255,255,.8)'}}
					showsPagination={true}
					nextButton={<Text style={styles.buttonText}>›</Text>}
					prevButton={<Text style={styles.buttonText}>‹</Text>}
					showsButtons={true}>
				<Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
        		<Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
        		<Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
			</Swiper>
		)
	}
}

const styles = StyleSheet.create({
    wrapper: {
    	height: 80,	
    },
    slide: {
    	height: 80,
    	resizeMode: Image.resizeMode.contain,
    },
    buttonText: {
    	fontSize: 50,
    	color: 'rgb(255,255,255)',
    }
});