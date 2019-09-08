import React from 'react';
import { Alert } from 'react-native';
import Loading from './components/Loading';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

const API_KEY = 'c787ac53f8cd62c85720a5e465fbdc2e';

export default class App extends React.Component {
    state = {
        isLoading: true,
    }
    getWeather = async (lat, lon) => {
        // Get weather data from openweathermap.org - check ./assets/sample.openweathermap.json for details about destructuring assignment
        const { data: { name: city, 
                        clouds: { all: cloudiness }, 
                        main: { humidity, temp, temp_max, temp_min }, 
                        dt: forecast, 
                        timezone,
                        sys: { country, sunrise, sunset },
                        visibility,
                        weather: [{ description, main: weather }], 
                        wind: { speed: wind } } } 
            = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`);

        // reconstruct an weather object
        const data = { country, 
                        city, 
                        weather, 
                        description, 
                        temp: {},
                        humidity, 
                        cloudiness, 
                        visibility, 
                        wind, 
                        dt: { timezone } };
        data.temp.current = temp;
        data.temp.max = temp_max;
        data.temp.min = temp_min;
        data.dt.forecast = new Date(forecast*1000);
        data.dt.sunrize = new Date(sunrise*1000);
        data.dt.sunset = new Date(sunset*1000);
        console.log(`forecasted Time:\t${data.dt.forecast.toString()} (${forecast})\n
                    Sunrise Time:\t${data.dt.sunrize.toString()} (${sunrise})\n
                    Sunset Time:\t${data.dt.sunset.toString()} (${sunset})`);
        console.log(data);
    }
	getLocation = async () => {
		try {
            // Get device permission for location - Check ./assets/sample.expo.json for details
			let { status } = await Permissions.askAsync(Permissions.LOCATION);
			if (status !== 'granted') {
				throw Error('Permission request was rejected.');
            }

            // Get geo-location of device - Check ./assets/sample.expo.json for details
            const { coords: { altitude: alt, latitude: lat, longitude: lon }, timestamp } 
                = await Location.getCurrentPositionAsync(); // destructuring assignment
            console.log(`altitude: ${alt} latitude: ${lat} longitude: ${lon} ts: ${timestamp}`);
            
            // Send to API and Get weather
            this.getWeather(lat, lon);
            
            // Update Component to quit Loading screen
            this.setState({ isLoading: false });
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
