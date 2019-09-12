import React from 'react';
import { Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

import Loading from './components/Loading';
import Weather from './components/Weather';

import Animations from './assets/animations';
import { geoTable } from './assets/dataTables';

const API_KEY = 'c787ac53f8cd62c85720a5e465fbdc2e';
const TEST_MODE = false;

export default class App extends React.Component {
    geoIndex = 0;
    state = {
        isLoading: true,
        weather: {},
        image: require('./assets/background.png'),
        tod: 'Morning', // Times of Day
    }
    /* Expo doesn’t currently support background task functionality.
    timer = () => setTimeout(()=>{this.getLocation() // 1. Get Location data
        .then(this.getWeather) // 2. Get Weather data
        .then(w => { console.log('Got weather data successfully:'); console.log(w); })
        .catch(e => console.log(e.message));},
        60000);
    */
    
    /**
     * Convert target place's time to minutes
     * e.i. We can get the local minutes of Seoul, Korea from Kitchener, Canada
     * @param {*} dt: datetime data 
     */
    getLocalMinutes = (dt) => {
        // get local timezone offset
        const offset = new Date().getTimezoneOffset();
        // get target place's hours
        let hoursCurrent = (dt.forecast.getHours() + (dt.timezone / 3600) + (offset / 60)) % 24;
        let hoursSunrise = (dt.sunrise.getHours() + (dt.timezone / 3600) + (offset / 60)) % 24;
        let hoursSunset = (dt.sunset.getHours() + (dt.timezone / 3600) + (offset / 60)) % 24;
        // get target place's minutes
        let minutesCurrent = hoursCurrent * 60 + dt.forecast.getMinutes();
        let minutesSunrise = hoursSunrise * 60 + dt.sunrise.getMinutes();
        if(minutesSunrise < 0) minutesSunrise = minutesSunrise + 1440;
        let minutesSunset = hoursSunset * 60 + dt.sunset.getMinutes();
        if(minutesSunset < 0) minutesSunset = minutesSunset + 1440;
        // get time to sunrise & sunset
        let toSunrise = minutesSunrise - minutesCurrent;
        let toSunset = minutesSunset - minutesCurrent;

        console.log(`Current Time: ${hoursCurrent}:${dt.forecast.getMinutes()}`);
        console.log(`minutesCurrent(${minutesCurrent}) minutesSunrise(${minutesSunrise}) minutesSunset(${minutesSunset})`);
        console.log(`toSunrise(${toSunrise}) toSunset(${toSunset})`);
        return { current: minutesCurrent, toSunrise, toSunset };
    }
    getTOD = (dt) => {  // get time of day
        let min = this.getLocalMinutes(dt);
        let tod = ''; // Times of Day
        if(min.toSunrise < 60 && min.toSunrise >=0 ) tod = 'Dawn';
        else if(min.toSunrise < 0 && min.toSunrise >= -60) tod = 'Sunrise';
        else if(min.toSunrise < -60 && min.current < 660) tod = 'Morning';
        else if(min.current >= 660 && min.current < 780) tod = 'Noon';
        else if(min.current >= 780 && min.toSunset >= 60) tod = 'Afternoon';
        else if(min.toSunset < 60 && min.toSunset >= 0) tod = 'Sunset';
        else if(min.toSunset < 0 && min.toSunset >= -60) tod = 'Dust';
        else if(min.current < 120 || min.current >= 1320) tod = 'Midnight';
        else tod = 'Evening';
    
        console.log(`Times of Day: ${tod}`);
        return tod;
    };
    getWeather = async (geo) => {
        // Get weather data from openweathermap.org - check ./assets/sample.openweathermap.json for details about this destructuring assignment
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
        data.dt.tod = this.getTOD(data.dt);
        console.log(`forecasted Time:\t${data.dt.forecast.toString()} (${forecast})\n
                    Sunrise Time:\t${data.dt.sunrise.toString()} (${sunrise})\n
                    Sunset Time:\t${data.dt.sunset.toString()} (${sunset})\n
                    Time of Day:\t${data.dt.tod}`);

        // Update Component to quit Loading screen
        this.setState({ isLoading: false, weather: { ...data } }); // using spread operator for deep-copy
        return data;
    }
	getLocation = async () => {
        const d = new Date();
        console.log(`invoked getLocation() - ${d.toString()}`);
		try {
            // Get device permission for location - Check ./assets/sample.expo.json for details
			let { status } = await Permissions.askAsync(Permissions.LOCATION);
			if (status !== 'granted') {``
				throw Error('Permission request was rejected.');
            }

            // Get geo-location of device - Check ./assets/sample.expo.json for details
            const { coords: { altitude: alt, latitude: lat, longitude: lon }, timestamp } 
                = await Location.getCurrentPositionAsync(); // destructuring assignment
            console.log(`altitude: ${alt} latitude: ${lat} longitude: ${lon} ts: ${timestamp}`);
            
            if(!TEST_MODE) {
                return { alt, lat, lon };
            } else {
                /* Iterating different regions from geoTable */
                const max = geoTable.length;
                this.geoIndex = (this.geoIndex + 1) % max;
                return { alt, lat: geoTable[this.geoIndex].lat, lon: geoTable[this.geoIndex].lon };
            }
		} catch (e) {
			console.log(e.message);
			Alert.alert(`Can't find you.\nSo sad.`);
		}
    }
    loadData = (currentTod) => {
        // Sets isLoading true here for reloading feature
        if(currentTod != undefined)
            this.setState({isLoading: true, tod: currentTod}); 
        else
            this.setState({isLoading: true});

        // Loads weather data
        this.getLocation()          // 1. Get Location data
            .then(this.getWeather)  // 2. Get Weather data
            .then(w => { console.log('Got weather data successfully:'); console.log(w); })
            .catch(e => console.log(e.message));
    }
	componentWillMount() {
        Animatable.initializeRegistryWithDefinitions({
            glow: Animations.glow,
            glowPulse: Animations.glowPulse,
            sun: Animations.sun,
            sunTop: Animations.sunTop,
            sunLeft: Animations.sunLeft,
            sunRight: Animations.sunRight,
            moon: Animations.moon,
            moonTop: Animations.moonTop,
            moonLeft: Animations.moonLeft,
            moonRight: Animations.moonRight,
            stars1: Animations.stars1,
            stars2: Animations.stars2,
            cloudTop: Animations.cloudTop,
            cloudLeft: Animations.cloudLeft,
            cloudRight: Animations.cloudRight,
            cloudLeftTop: Animations.cloudLeftTop,
            cloudRightBottom: Animations.cloudRightBottom,
            thunderBig: Animations.thunderBig,
            thunderSmall: Animations.thunderSmall,
            thunderSmallL: Animations.thunderSmallL,
            thunderSmallR: Animations.thunderSmallR,
            raindropMid: Animations.raindropMid,
            raindropLeft: Animations.raindropLeft,
            raindropRight: Animations.raindropRight,
            raindropMidSmall: Animations.raindropMidSmall,
            raindropLeftSmall: Animations.raindropLeftSmall,
            raindropRightSmall: Animations.raindropRightSmall,
            raindropMidLeft: Animations.raindropMidLeft,
            raindropMidRight: Animations.raindropMidRight,
            snowdropMid: Animations.snowdropMid,
            snowdropLeft: Animations.snowdropLeft,
            snowdropRight: Animations.snowdropRight,
            snowdropMidSmall: Animations.snowdropMidSmall,
            snowdropLeftSmall: Animations.snowdropLeftSmall,
            snowdropRightSmall: Animations.snowdropRightSmall,
            snowdropMidLeft: Animations.snowdropMidLeft,
            snowdropMidRight: Animations.snowdropMidRight,
            haze: Animations.haze,
            tornado: Animations.tornado,
        });

        this.loadData();
    }
	render() {
        const { isLoading, weather, image, tod } = this.state;
		return (
            isLoading ? <Loading tod={tod}/> : <Weather data={weather} fnReload={this.loadData}/>  // reload: passing function for reloading weather info.
		);
    }
    componentWillUnmount() {
    }
}
