import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

import Loading from './components/Loading';
import Weather from './components/Weather';

import registerAnimation from './assets/animations';
import { geoTable } from './assets/dataTables';

const API_KEY = 'c787ac53f8cd62c85720a5e465fbdc2e';
const TEST_MODE = false;

export default class App extends React.Component {
    geoIndex = 0;
    state = {
        isLoading: true,
        weatherList: [],
        index: 0,
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
        if (minutesSunrise < 0) minutesSunrise = minutesSunrise + 1440;
        let minutesSunset = hoursSunset * 60 + dt.sunset.getMinutes();
        if (minutesSunset < 0) minutesSunset = minutesSunset + 1440;
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
        if (min.toSunrise < 60 && min.toSunrise >= 0) tod = 'Dawn';
        else if (min.toSunrise < 0 && min.toSunrise >= -60) tod = 'Sunrise';
        else if (min.toSunrise < -60 && min.current < 660) tod = 'Morning';
        else if (min.current >= 660 && min.current < 780) tod = 'Noon';
        else if (min.current >= 780 && min.toSunset >= 60) tod = 'Afternoon';
        else if (min.toSunset < 60 && min.toSunset >= 0) tod = 'Sunset';
        else if (min.toSunset < 0 && min.toSunset >= -60) tod = 'Dust';
        else if (min.current < 120 || min.current >= 1320) tod = 'Midnight';
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
        const data = {
            country,
            region,
            altitude: parseInt(geo.alt),
            weather: { main, id, description },
            temperature: {},
            humidity,
            cloudiness, // % (percent)
            visibility: visibility / 1000, // kilo-meter
            wind,       // speed: meter/sec, deg: direction
            dt: { timezone }
        };
        data.temperature.current = Math.round(temp);
        data.temperature.min = temp_min;    // Maximum temperature at the moment. This is deviation from current temp.
        data.temperature.max = temp_max;    // Minimum temperature at the moment. This is deviation from current temp.
        data.dt.forecast = new Date(forecast * 1000);
        data.dt.sunrise = new Date(sunrise * 1000);
        data.dt.sunset = new Date(sunset * 1000);
        data.dt.tod = this.getTOD(data.dt);
        console.log(`forecasted Time: ${data.dt.forecast.toString()} (${forecast})
Sunrise Time:    ${data.dt.sunrise.toString()} (${sunrise})
Sunset Time:     ${data.dt.sunset.toString()} (${sunset})
Time of Day:     ${data.dt.tod}`);

        // Update Component to quit Loading screen
        // jaey. test weather list - this.setState({ isLoading: false, weather: { ...data } }); // using spread operator for deep-copy
        return data;
    }
    getLocation = async () => {
        const d = new Date();
        console.log(`invoked getLocation() - ${d.toString()}`);
        try {
            // Get device permission for location - Check ./assets/sample.expo.json for details
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                ``
                throw Error('Permission request was rejected.');
            }

            // Get geo-location of device - Check ./assets/sample.expo.json for details
            const { coords: { altitude: alt, latitude: lat, longitude: lon }, timestamp }
                = await Location.getCurrentPositionAsync(); // destructuring assignment
            console.log(`altitude: ${alt} latitude: ${lat} longitude: ${lon} ts: ${timestamp}`);

            if (!TEST_MODE) {
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
        if (currentTod != undefined)
            this.setState({ isLoading: true, tod: currentTod });
        else
            this.setState({ isLoading: true });

        // Loads weather data
        this.getLocation()          // 1. Get Location data
            .then(this.getWeather)  // 2. Get Weather data
            .then(w => {console.log('Got weather data successfully:')})
            .catch(e => console.log(e.message));
    }
    sort = weatherList => {
        function compare(a, b) {
            let comparison = 0;
            if (a.dt.timezone > b.dt.timezone)
                comparison = 1;
            else if (a.dt.timezone < b.dt.timezone)
                comparison = -1;
            else {
                if (a.region > b.region)
                    comparison = 1;
                else
                    comparison = -1;
            }
            return comparison;
        }
        weatherList.sort(compare);
    }
    loadDataList = async (geoList) => {
        let local;  // weather information for current location
        let otherRegions = [];  // weather information for other regions
        let promises = [];

        return this.getLocation()   // Step-1. Get current location
            .then(this.getWeather)  // Step-2. Get weather data for current location
            .then(w => {
                console.log('Got weather data successfully:');
                local = {...w}; 

                // TODO: get geoList from AsyncStorage 

                // Step-3. Create promises for other regions
                geoList.forEach(geo => {
                    promises.push(
                        this.getWeather(geo)
                            .then(data => {
                                console.log(`Got ${geo.city}'s weather info.----------------------------`);
                                //console.log(data);
                                otherRegions.push(data);
                            })
                            .catch(e => console.log(`error: ${e.message}`))
                    )
                });
                // Step-4. Get weather data for other regions concurrently
                return Promise.all(promises)
                    .then(() => {
                        console.log(`Got weather list succesffully`);
                        // Step-5. Sort the other regions' weather data based on its timezone.
                        this.sort(otherRegions);
                        // Step-6. Merge all weather data (local & other regions) - local data is always placed at first.
                        this.setState({ isLoading: false, weatherList: [local, ...otherRegions] });
                    })
                    .catch(e => console.log(`error: ${e.message}`));
            })
            .catch(e => console.log(e.message));
    }
    componentWillMount() {
        registerAnimation();
        //this.loadData();
        this.loadDataList(geoTable);
    }
    render() {
        const { isLoading, weatherList, index, tod } = this.state;
        console.log(weatherList[index]);
        return (
            //isLoading ? <Loading tod={tod}/> : <Weather data={weathers[index]} fnReload={this.loadData} fnPrev={prev=>this.setState({index: prev})} fnNext={next=>this.setState({index: next})}/>  // reload: passing function for reloading weather info.
            isLoading ? <Loading tod={tod} /> :
                <Weather
                    //data={weathers[index]} 
                    index={index}
                    data={weatherList}
                    fnReload={this.loadDataList}
                    fnPrev={prev => this.setState({ index: prev })}
                    fnNext={next => this.setState({ index: next })}
                />
            //isLoading ? <Loading tod={tod}/> : <Weather data={weather} fnReload={this.loadDataList(geoTable)} fnPrev={(()=>{})()} fnNext={(()=>{})()}/>  // reload: passing function for reloading weather info.
        );
    }
    componentWillUnmount() {
    }
}
