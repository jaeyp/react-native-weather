import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import animationAPIs from '../assets/animationAPIs';
import gradientTable from '../assets/dataTables';
import { screenH } from './Loading';


const getAnimaion = d => {
    return animationAPIs[d.weather.id]((d.dt.tod=="Evening" || d.dt.tod=="Midnight") ? true : false);
}
const getTemperature = d => {
    return (<Text style={styles.temperature}>{d.temperature.current}&#176;</Text>);
}
const getTextContainer = (d, fn) => {
    let fsize = (d.weather.description.length > 23)?22:28
    return (
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            {/* Supports touch screen */}
            <TouchableOpacity style={styles.button} onPress={() => fn(d.dt.tod)}>
                <MaterialCommunityIcons name={'reload'} size={42} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.region}>{d.region}, {d.country}</Text>
            <Text style={{...styles.description, fontSize:fsize}}>{d.weather.description}</Text>
            <Text style={styles.wind}>{d.wind.speed} meter/sec</Text>
        </View>
    );
}
const getScreen = (data, fn) => {
    return (
        <LinearGradient colors={gradientTable[data.dt.tod].gradient} style={styles.container}>
            {getAnimaion(data)}
            {getTemperature(data)}
            {getTextContainer(data, fn)}
        </LinearGradient>
    );
}

//export default function Weather({data}) {
export default class Weather extends React.Component {
    _onPressReload = (tod) => {
        // reload: passing function for reloading weather info.
        // this function should be an arrow function to avoid this binding since arrow function never change its binding.
        this.props.fnReload(tod);
    }
    render() {
        return getScreen(this.props.data, this._onPressReload);
        /**
         * If _onPressReload() is not an arrow function but a normal function,
         * We must bind 'this' to access current this inside of the function. 
         * Like this,
         * return getScreen(this.props.data, this._onPressButton.bind(this));
         */
    }
}

Weather.propTypes = {
    data: PropTypes.shape({
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
    }).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        paddingHorizontal: 20
    },
    button: {
        opacity: 0.2,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 6,
        marginTop: 32,
        marginBottom: 32,
        borderRadius: 30,
    },
    temperature: {
        color: 'white',
        fontSize: 70,
        fontWeight: 'bold',
        position: "absolute",
        top: screenH / 2 - 130
    },
    region: {
        color: 'white',
        fontSize: 24,
        opacity: 0.5,
        fontWeight: 'bold',
        top: screenH / 4,
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
    }
});


