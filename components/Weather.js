import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import animationAPIs from '../utilities/animationAPIs';
import gradientTable, { geoTable } from '../assets/dataTables';

import * as Animatable from 'react-native-animatable';

const AnimatedIconMCI = Animatable.createAnimatableComponent(MaterialCommunityIcons);

const containers = { // pure functions
    Animation: d => {
        return (
            <View style={styles.containerAnimation}>
                {animationAPIs[d.weather.id]((d.dt.tod == "Evening" || d.dt.tod == "BeforeNight" || d.dt.tod == "Midnight" || d.dt.tod == "AfterNight") ? true : false)}
            </View>
        );
    },
    Temperature: d => {
        return (
            <View style={styles.containerTemperature}>
                <Text style={styles.temperature}>{d.temperature.current}&#176;</Text>
            </View>
        );
    },
    ButtonReload: (fn) => {
        return (
            <View style={styles.containerButton}>
                {/* Supports touch screen */}
                <TouchableOpacity style={styles.buttonLeft} onPress={() => {}}>
                    <Entypo name={'chevron-left'} size={42} color={'black'} />
                </TouchableOpacity>
                <TouchableHighlight style={styles.buttonReload} onPress={() => fn.reload()}>
                    <AnimatedIconMCI name={'reload'} size={42} color={'black'} animation='rotate' delay={0} duration={4000} easing="linear" iterationCount='infinite' />
                </TouchableHighlight>
                <TouchableOpacity style={styles.buttonRight} onPress={() => {}}>
                    <Entypo name={'chevron-right'} size={42} color={'black'} />
                </TouchableOpacity>
            </View>
        );
    },
    Button: (fn) => {
        return (
            <View style={styles.containerButton}>
                {/* Supports touch screen */}
                <TouchableOpacity style={styles.buttonLeft} onPress={() => fn.prev()}>
                    <Entypo name={'chevron-left'} size={42} color={'black'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => fn.reload(geoTable)}>
                    <MaterialCommunityIcons name={'reload'} size={42} color={'black'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRight} onPress={() => fn.next()}>
                    <Entypo name={'chevron-right'} size={42} color={'black'} />
                </TouchableOpacity>
            </View>
        );
    },
    Description: (d) => {
        const len = d.weather.description.length;
        let size = len <= 16 ? 32 : (len > 23 ? 24 : 28);
        return (
            <View style={{ ...styles.containerDescription, ...styles.containerText }}>
                <Text style={{ ...styles.description, fontSize: size }}>{d.weather.description}</Text>
                <Text style={styles.wind}>{d.wind.speed} meter/sec</Text>
                {/*<Text style={styles.wind}>{d.dt.tod}</Text>*/}
            </View>
        );
    },
    Region: (d, fn) => {
        return (
            <View style={{ ...styles.containerRegion }}>
                <TouchableOpacity style={styles.buttonMap} onPress={() => fn()}>
                    <Text style={styles.region}>{d.geocode.city}, {d.country}</Text>
                </TouchableOpacity>
            </View>
        );
    },
    Menu2: (d, fn) => {
        return (
            <View style={{ ...styles.containerRegion }}>
                <TouchableOpacity style={styles.buttonMap} onPress={() => fn.add()}>
                    <Text style={styles.region}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMap} onPress={() => fn.cancel()}>
                    <Text style={styles.region}>Cancel</Text>
                </TouchableOpacity>
            </View>
        );
    },
    Menu3: (d, fn) => {
        return (
            <View style={{ ...styles.containerRegion }}>
                <TouchableOpacity style={styles.buttonMap} onPress={() => fn.add()}>
                    <Text style={styles.region}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMap} onPress={() => fn.remove(d.geocode.city)}>
                    <Text style={styles.region}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMap} onPress={() => fn.cancel()}>
                    <Text style={styles.region}>Cancel</Text>
                </TouchableOpacity>
            </View>
        );
    },
}

//export default function Weather({data}) {
export default class Weather extends React.Component {
    state = {
        isLoading: false,
        isEditing: false,
    }
    
    _sleep = amount => {
        return new Promise((resolve, reject) => setTimeout(resolve, amount));
    }
    _onPressReload = async () => {
        // reload: passing function for reloading weather info.
        // this function should be an arrow function to avoid this binding since arrow function never change its binding.
        this.setState({isLoading: true});
        //await this._sleep(0);
        this.props.fnReload()
            .then(()=>this.setState({isLoading: false, isEditing: false}));
    }
    _onPressPrev = () => {
        const prev = (this.props.index + this.props.data.length - 1) % this.props.data.length;
        this.state.isEditing = false;
        this.props.fnPrev(prev);
    }
    _onPressNext = () => {
        const next = (this.props.index + 1) % this.props.data.length;
        this.state.isEditing = false;
        this.props.fnNext(next);
    }
    _onPressRegion = () => {
        this.setState({isEditing: true});
    }
    _onPressAdd = () => {
        this.props.fnMap();
    }
    _onPressRemove = (region) => {
        this.setState({isLoading: false, isEditing: false})
        this.props.fnRemove(region);
    }
    _onPressCancel = () => {
        this.setState({isEditing: false});
    }
    /**
     * If _onPressReload() is not an arrow function but a normal function,
     * We must bind 'this' to access current this inside of the function. 
     * Like this,
     * return getScreen(this.props.data, this._onPressButton.bind(this));
     */
    render() {
        const { isLoading, isEditing } = this.state;
        const { index, data } = this.props;
        const fnNavigation = {reload:this._onPressReload, prev: this._onPressPrev, next: this._onPressNext};
        const fnMenu = {add:this._onPressAdd, remove:this._onPressRemove, cancel:this._onPressCancel};
        //console.log(data[index]);
        return (
            <LinearGradient colors={gradientTable[data[index].dt.tod].gradient} style={styles.container}>
                {containers.Animation(data[index])}
                {containers.Temperature(data[index])}
                {isLoading?containers.ButtonReload(fnNavigation):containers.Button(fnNavigation)}
                {containers.Description(data[index])}
                {isEditing?((index==0)?containers.Menu2(data[index], fnMenu):containers.Menu3(data[index], fnMenu)):containers.Region(data[index], this._onPressRegion)}
            </LinearGradient>
        );
    }
}

Weather.propTypes = {
    /* React PropTypes - in case of an array of objects with shape() */
    data: PropTypes.arrayOf(PropTypes.shape({
        country: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        altitude: PropTypes.number.isRequired,
        weather: PropTypes.shape({
            main: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
        }),
        temperature: PropTypes.shape({
            current: PropTypes.number.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        }),
        humidity: PropTypes.number.isRequired,
        cloudiness: PropTypes.number.isRequired,
        visibility: PropTypes.number.isRequired,
        wind: PropTypes.shape({
            deg: PropTypes.number,
            speed: PropTypes.number.isRequired,
        }),
        dt: PropTypes.shape({
            timezone: PropTypes.number.isRequired,
            forecast: PropTypes.instanceOf(Date).isRequired,
            sunrise: PropTypes.instanceOf(Date).isRequired,
            sunset: PropTypes.instanceOf(Date).isRequired,
            tod: PropTypes.string.isRequired,
        })
    })).isRequired
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerAnimation: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerTemperature: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center"
    },
    containerButton: {
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    containerDescription: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center"
    },
    containerRegion: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    containerText: {
        paddingHorizontal: 20
    },
    button: {
        opacity: 0.3,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 6,
        marginTop: 32,
        marginBottom: 32,
        borderRadius: 30,
    },
    buttonReload: {
        opacity: 0.7,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 6,
        marginTop: 32,
        marginBottom: 32,
        borderRadius: 30,
    },
    buttonLeft: {
        opacity: 0.08,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginRight: 100,
    },
    buttonRight: {
        opacity: 0.08,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginLeft: 100,
    },
    buttonMap: {
        opacity: 0.4,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 4,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 10,
        marginHorizontal: 8,
    },
    temperature: {
        color: 'white',
        fontSize: 70,
        fontWeight: 'bold',
    },
    time: {
        color: 'white',
        fontSize: 14,
        opacity: 0.5,
        fontWeight: 'bold',
    },
    description: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    wind: {
        color: 'white',
        fontSize: 18,
        opacity: 0.5,
        fontWeight: 'bold',
        marginBottom: 60,
    },
    region: {
        color: 'black',
        fontSize: 20,
        opacity: 1,
        fontWeight: 'bold',
    },
});


