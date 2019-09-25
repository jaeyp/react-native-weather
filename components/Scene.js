import React from 'react';
import { Alert, AsyncStorage, BackHandler } from 'react-native';
/* NOTE: shallowCompare is a legacy add-on. Use React.memo or React.PureComponent instead.
import shallowCompare from 'react-addons-shallow-compare';
*/
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

import registerAnimation from '../utilities/animations';
import CustomError, { ErrType } from '../utilities/errors';
import { geoTable } from '../assets/dataTables';

import Loading from './Loading';
import Weather from './Weather';
import Map, { MapHook } from './Map';

const API_KEY = 'weather_key_from_openweathermap.org';

const stateMachine = {
    initialState: 'loading',
    states: {
        loading: {},
        weather: {},
        map: {}
    }
}

/**
 * Scene Component (pure HOC)
 */
export default class Scene extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sceneState: stateMachine.initialState,
            regions: geoTable, // TODO: App will be started without any other region data but current location.
            weatherList: [],
            index: 0,
        };
        registerAnimation();
    }

    /**
     * Gets weather data from openweathermap.org
     * Check ./assets/sample.openweathermap.json for more details about this destructuring assignment
     * @param {*} geo : coordinates
     */
    _getWeather = async (geo) => {
        try{
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
            data.dt.tod = this._getTOD(data.dt);
            data.geocode = (geo.city==null)?{...geo, city:data.region}:geo;
    
            return data;
        } catch (e) {
            // breaking promise sequence
            throw new CustomError(ErrType.loadingWeather, e.message);
        }
    }
    /**
     * Gets geo-location of device
     * Check ./assets/sample.expo.json for more details
     */
    _getLocation = async () => {
        try {
            // Get device permission for location - Check ./assets/sample.expo.json for details
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                throw Error('Permission request was rejected.');
            }

            const { coords: { altitude: alt, latitude: lat, longitude: lon }, timestamp }
                = await Location.getCurrentPositionAsync(); // destructuring assignment

            return { city:null, lat, lon };
        } catch (e) {
            // breaking promise sequence
            throw new CustomError(ErrType.loadingLocation, e.message);
        }
    }
    /**
     * Rearranges weather items' order based on the time zone of the current location.
     * For Example, after sorting, it allows to navigate other region like below,
     *      here in Kitchener, Vancouver places in the left side for navigating
     *      while St. John's places in the right side for it.
     * @param {*} ctz : current location's timezone
     * @param {*} weatherList : weather data list
     */
    _sort = (ctz, weatherList) => {
        function compare(a, b) {
            let atz = (a.dt.timezone<ctz)?a.dt.timezone + 86400:a.dt.timezone;
            let btz = (b.dt.timezone<ctz)?b.dt.timezone + 86400:b.dt.timezone;
            let comparison = 0;

            if (atz > btz)
                comparison = 1;
            else if (atz < btz)
                comparison = -1;
            else { // if both are in the same timezone, follows alphabet order
                if (a.region > b.region)
                    comparison = 1;
                else
                    comparison = -1;
            }
            return comparison;
        }
        weatherList.sort(compare);
    }
    /**
     * Gets target place's time information in minutes form
     * @param {*} dt: datetime data 
     */
    _getLocalMinutes = (dt) => {
        // get local timezone offset
        const offset = new Date().getTimezoneOffset();
        // get target place's hours
        let hoursCurrent = (dt.forecast.getHours() + (dt.timezone / 3600) + (offset / 60) + 24) % 24;
        let hoursSunrise = (dt.sunrise.getHours() + (dt.timezone / 3600) + (offset / 60) + 24) % 24;
        let hoursSunset = (dt.sunset.getHours() + (dt.timezone / 3600) + (offset / 60) + 24) % 24;
        // get target place's minutes
        let minutesCurrent = hoursCurrent * 60 + dt.forecast.getMinutes();
        let minutesSunrise = hoursSunrise * 60 + dt.sunrise.getMinutes();
        let minutesSunset = hoursSunset * 60 + dt.sunset.getMinutes();
        // get localtime - to fix an half hour and 45 minutes time zone issue.
        let localHours = parseInt(minutesCurrent / 60);
        let localMinutes = minutesCurrent - localHours * 60;

        if (minutesSunrise < 0) minutesSunrise = minutesSunrise + 1440;
        if (minutesSunset < 0) minutesSunset = minutesSunset + 1440;
        dt.localtime = `${("0" + localHours).slice(-2)}:${("0" + localMinutes).slice(-2)}`;

        return { current: minutesCurrent, toSunrise: minutesSunrise - minutesCurrent, toSunset: minutesSunset - minutesCurrent };
    }
    /**
     * Gets Times of Day from time
     *  Background color is changed corresponding to 12 ToD types
     *  12 ToD: 
     *      Midnight > AfterNight > Dawn > Sunrise > 
     *      AfterSunrise > Morning > Noon > Afternoon > 
     *      BeforeSunset > Sunset > Dust > BeforeNight > Midnight
     *  cf. Dawn to Sunrise and Sunset to Dust periods depends on daily sunrise & sunset time.
     */
    _getTOD = (dt) => {
        let min = this._getLocalMinutes(dt);
        let tod = '';

        if (min.current >=180 && min.current < 660) {
            if (min.toSunrise >= 60) tod = 'AfterNight';
            else if (min.toSunrise < 60 && min.toSunrise >= 0) tod = 'Dawn';
            else if (min.toSunrise < 0 && min.toSunrise >= -60) tod = 'Sunrise';
            else if (min.toSunrise < -60 && min.toSunrise >= -180) tod = 'AfterSunrise';
            else tod = 'Morning';
        } 
        else if (min.current >= 660 && min.current < 780) tod = 'Noon';
        else if (min.current >= 780 && min.current < 1320) {
            if (min.toSunset >= 180) tod = 'Afternoon';
            else if (min.toSunset < 180 && min.toSunset >= 60) tod = 'BeforeSunset';
            else if (min.toSunset < 60 && min.toSunset >= 0) tod = 'Sunset';
            else if (min.toSunset < 0 && min.toSunset >= -60) tod = 'Dust';
            else if (min.toSunset < -60 && min.toSunset >= -180) tod = 'Evening';
            else tod = 'BeforeNight';
        }
        else tod = 'Midnight';

        return tod;
    };
    /**
     * This function was deprecated in favor of _loadDataList()
     */
    _loadData = (currentTod) => {
        // Sets isLoading true here for reloading feature
        if (currentTod != undefined)
            this.setState({ isLoading: true, tod: currentTod });
        else
            this.setState({ isLoading: true });

        // Loads weather data
        this._getLocation()          // 1. Get Location data
            .then(this._getWeather)  // 2. Get Weather data
            .catch(e => console.log(e.message));
    }
    /**
     * Gets the weather data of given location list (Step 1 to 6)
     */
    _loadDataList = async () => {
        let local;  // weather information for current location
        let otherRegions = [];  // weather information for other regions
        let promises = [];
        let geoList = this.state.regions;

        /**
         * If we include the request of the current location into promises for Promise.all() 
         *  and run all the request concurrently, data loading performance would be better.
         * However, I separate the request here in order to practice and understand
         *  more complex sequential promises situation making use of spread operator.
         */
        return this._getLocation()   // Step-1. Get current location
            .then(this._getWeather)  // Step-2. Get weather data for current location
            .then(w => {
                local = {...w}; // copy local weather

                // TODO: get geoList from AsyncStorage 

                // Step-3. Create promises for other regions
                geoList.forEach(geo => {
                    promises.push(
                        this._getWeather(geo)
                            .then(data => {
                                otherRegions.push(data);
                            })
                            .catch(e => console.log(`error: ${e.message}`))
                    )
                });
                // Step-4. Get weather data for other regions concurrently
                return Promise.all(promises)
                    .then(() => {
                        // Step-5. Sort the other regions' weather data based on its timezone.
                        this._sort(local.dt.timezone, otherRegions);
                        // Step-6. Merge all weather data (local & other regions) and Do rendering Weather Component.
                        // local data is always placed at first.
                        this.setState({ sceneState: 'weather', weatherList: [local, ...otherRegions] });
                    })
                    .catch(e => console.log(`error: ${e.message}`));
            })
            .catch(e => {
                console.log(`[${e.name}] code:${e.code} - ${e.desc} (${e.date.toString()})\n${e.message}`);
                Alert.alert(
                    `${e.desc}`,
                    `Do you want to exit?`,
                    [
                        {text: 'Retry', onPress: ()=> this._loadDataList(), style: 'cancel'},
                        {text: 'Yes', onPress: ()=> BackHandler.exitApp()},
                    ],
                    { cancelable: false });
            });
    }
    _addRegion = geo => {
        this.state.regions.push(geo);
        this.setState({ sceneState: 'loading'});
        this._loadDataList();
    }
    _removeRegion = dest => {
        let weatherList = this.state.weatherList;
        let regionList = this.state.regions;
        let pos = this.state.index;

        // Remove weather data
        weatherList.forEach((item, index, obj) => {
            if(item.geocode.city == dest) {
                obj.splice(index, 1);
                if(index >= obj.length) pos--; // if we removed last item, moves back the current position.
            }
        })
        // Remove region data
        regionList.forEach((item, index, obj) => {
            if(item.city == dest) {
                obj.splice(index, 1);
            }
        })         
        this.setState({ sceneState: 'weather', index: pos, weatherList: [...weatherList], regions: [...regionList] });
    }
    /**
     * Switchs the current scene according to sceneState.
     */
    _scene = () => { 
        let scene; 
        let w = this.state.weatherList[this.state.index];

        switch(this.state.sceneState) {
            case 'loading':
                scene = <Loading tod={'Morning'} />;
                break;
            case 'weather':
                scene = <Weather
                    index={this.state.index}
                    data={this.state.weatherList}
                    fnReload={this._loadDataList}
                    fnPrev={prev => this.setState({ index: prev })}
                    fnNext={next => this.setState({ index: next })}
                    fnMap={() => this.setState({sceneState: 'map'})}
                    fnRemove={this._removeRegion}
                />;
                break;
            case 'map':
                scene = <MapHook // or Map
                    style={{flex: 1}} 
                    geo={w.geocode}
                    fnAdd={this._addRegion}
                    fnCancel={() => this.setState({sceneState: 'weather'})}
                />
                break;
            default:
                break;
        }
        return scene;
    }

    /* NOTE: componentWillMount was deprecated in React v16 and will be removed after v17
    componentWillMount() {
        // Step.1 - Registers weather animations
        registerAnimation();

        // Step.2 - Sets default region info
        // TODO: App will be started without any other region data but current location.
        this.state.regions = geoTable;

        // Step.3 - Loads weather data
        // TODO: retry loading if return false
        this._loadDataList();
    }
    */

    /* NOTE: shallowCompare is a legacy add-on. Use React.memo or React.PureComponent instead.
    shouldComponentUpdate(nextProps, nextState) {
        // This shallowCompare method returns true when the values of a key in each object
        //      are not strictly equal by iterating on the keys of the objects.
        // Check ./utilities/tools.js for more details.
        return shallowCompare(this, nextProps, nextState);
    }
    */

    render() {
        return (
            this._scene()
        );
    }

    componentDidMount() {
        this._loadDataList();
    }
}
