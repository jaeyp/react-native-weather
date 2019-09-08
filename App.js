import React from 'react';
import { Alert } from 'react-native';
import Loading from './components/Loading';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
//import axios from 'axios';

const API_KEY = 'c787ac53f8cd62c85720a5e465fbdc2e';

export default class App extends React.Component {
    state = {
        isLoading: true,
    }
    getWeather = async (lat, lon) => {
        //const { data } = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`);
        //console.log(data);
    }
	getLocation = async () => {
		try {
            // Get device permission for location
			let { status } = await Permissions.askAsync(Permissions.LOCATION); // destructuring assignment - 'status' is one property of the return object.
			if (status !== 'granted') {
				throw Error('Permission request was rejected.');
            }

            // Get geo-location of device
            const { coords: { altitude: alt, latitude: lat, longitude: lon } } 
                = await Location.getCurrentPositionAsync(); // destructuring assignment
            console.log(`altitude: ${alt} latitude: ${lat} longitude: ${lon}`);
            this.getWeather(lat, lon);
            this.setState({ isLoading: false });

            // Send to API and Get weather

		} catch (e) {
			console.log(e.message);
			Alert.alert(`Can't find you.\nSo sad.`);
		}
	}
	componentDidMount() {
		this.getLocation();
	}
	render() {
        const { isLoading } = this.state;
		return (
            isLoading ? <Loading /> : null
		);
	}
}
