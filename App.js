import React from 'react';
import { Alert } from 'react-native';
import Loading from './components/Loading';
import Weather from './components/Weather';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

import Animations from './assets/animations';
import * as Animatable from 'react-native-animatable';

const API_KEY = 'c787ac53f8cd62c85720a5e465fbdc2e';

export default class App extends React.Component {
    state = {
        isLoading: true,
        weather: {},
    }
    getWeather = async (geo) => {
        // Get weather data from openweathermap.org - check ./assets/sample.openweathermap.json for details about destructuring assignment
        const { data: { name: region, 
                        clouds: { all: cloudiness }, 
                        main: { humidity, temp, temp_max, temp_min }, 
                        dt: forecast, 
                        timezone,
                        sys: { country, sunrise, sunset },
                        visibility,
                        weather: [{ description, main, id }], 
                        wind } } 
            = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&APPID=${API_KEY}&units=metric`);

        // reconstruct an weather object
        const data = { country, 
                        region, 
                        altitude: parseInt(geo.alt),
                        weather: { main, id, description }, 
                        temperature: {},
                        humidity, 
                        cloudiness, // % (percent)
                        visibility: visibility / 1000, // kilo-meter
                        wind,       // speed: meter/sec, deg: direction
                        dt: { timezone } };
        data.temperature.current = Math.round(temp);
        data.temperature.min = temp_min;    // Maximum temperature at the moment. This is deviation from current temp.
        data.temperature.max = temp_max;    // Minimum temperature at the moment. This is deviation from current temp.
        data.dt.forecast = new Date(forecast*1000);
        data.dt.sunrise = new Date(sunrise*1000);
        data.dt.sunset = new Date(sunset*1000);
        console.log(`forecasted Time:\t${data.dt.forecast.toString()} (${forecast})\n
                    Sunrise Time:\t${data.dt.sunrise.toString()} (${sunrise})\n
                    Sunset Time:\t${data.dt.sunset.toString()} (${sunset})`);

        // Update Component to quit Loading screen
        this.setState({ isLoading: false, weather: { ...data } }); // using spread operator for deep-copy
        return data;
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
            
            return { alt, lat, lon };
		} catch (e) {
			console.log(e.message);
			Alert.alert(`Can't find you.\nSo sad.`);
		}
	}
	componentDidMount() {
        Animatable.initializeRegistryWithDefinitions({
            glow: Animations.glow,
            rotate: Animations.rotate
        });

        this.getLocation()          // 1. Get Location data
            .then(this.getWeather)  // 2. Get Weather data
            .then(w => { console.log('Got weather data successfully:'); console.log(w); })
            .catch(e => console.log(e.message));
	}
	render() {
        const { isLoading, weather } = this.state;
		return (
            isLoading ? <Loading /> : <Weather data={weather}/>
		);
	}
}
