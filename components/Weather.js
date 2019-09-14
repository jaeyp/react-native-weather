import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import animationAPIs from '../assets/animationAPIs';
import gradientTable, { geoTable } from '../assets/dataTables';

import * as Animatable from 'react-native-animatable';

const AnimatedIconMCI = Animatable.createAnimatableComponent(MaterialCommunityIcons);

const containers = {
    Animation: d => {
        return (
            <View style={styles.containerAnimation}>
                {animationAPIs[d.weather.id]((d.dt.tod == "Evening" || d.dt.tod == "Midnight") ? true : false)}
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
                <TouchableHighlight style={styles.buttonReload} onPress={() => fn.reload(geoTable)}>
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
    Description: d => {
        const len = d.weather.description.length;
        let size = len <= 16 ? 32 : (len > 23 ? 22 : 28);
        return (
            <View style={{ ...styles.containerDescription, ...styles.containerText }}>
                <Text style={{ ...styles.description, fontSize: size }}>{d.weather.description}</Text>
                <Text style={styles.wind}>{d.wind.speed} meter/sec</Text>
                <Text style={styles.region}>{d.region}, {d.country}</Text>
            </View>
        );
    },
}

//export default function Weather({data}) {
export default class Weather extends React.Component {
    state = {
        isLoading: false,
    }
    
    _sleep = amount => {
        return new Promise((resolve, reject) => setTimeout(resolve, amount));
    }
    _onPressReload = async (geoList) => {
        // reload: passing function for reloading weather info.
        // this function should be an arrow function to avoid this binding since arrow function never change its binding.
        this.setState({isLoading: true});
        //await this._sleep(0);
        this.props.fnReload(geoList)
            .then(()=>this.setState({isLoading: false}));
    }
    _onPressPrev = () => {
        const prev = (this.props.index + this.props.data.length - 1) % this.props.data.length;
        this.props.fnPrev(prev);
    }
    _onPressNext = () => {
        const next = (this.props.index + 1) % this.props.data.length;
        this.props.fnNext(next);
    }
    /**
     * If _onPressReload() is not an arrow function but a normal function,
     * We must bind 'this' to access current this inside of the function. 
     * Like this,
     * return getScreen(this.props.data, this._onPressButton.bind(this));
     */
    render() {
        const { isLoading } = this.state;
        const { index, data } = this.props;
        const fn = {reload:this._onPressReload, prev: this._onPressPrev, next: this._onPressNext};
        //console.log(data[index]);
        return (
            <LinearGradient colors={gradientTable[data[index].dt.tod].gradient} style={styles.container}>
                {containers.Animation(data[index])}
                {containers.Temperature(data[index])}
                {isLoading?containers.ButtonReload(fn):containers.Button(fn)}
                {containers.Description(data[index])}
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
        flex: 1.2,
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
        marginBottom: 80,
    },
    region: {
        color: 'white',
        fontSize: 20,
        opacity: 0.5,
        fontWeight: 'bold',
    },
});


