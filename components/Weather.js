import React from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert } from "react-native";
import PropTypes from "prop-types";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import animationAPIs from '../assets/animationAPIs';
import gradientTable from '../assets/dataTables';
import { screenH, screenW } from './Loading';

const AnimatedIconIonicons = Animatable.createAnimatableComponent(Ionicons)
const AnimatedIconFontAwesome = Animatable.createAnimatableComponent(FontAwesome)

const getAniSnow = id => {
    switch(id) {
        default:
            return (
            <View>
                <AnimatedIconIonicons style={styles.sunny} name={'ios-sunny'} size={100} animation='rotate' delay={0} duration={30000} easing="linear" iterationCount='infinite' />
                <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} />
                <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={50} animation='flow' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
                <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={20} animation='snowdrop' delay={0} duration={1000} easing="linear" iterationCount='infinite' />
                <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={20} animation='snowdrop2' delay={200} duration={1000} easing="linear" iterationCount='infinite' />
                <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={20} animation='snowdrop3' delay={400} duration={1000} easing="linear" iterationCount='infinite' />
            </View>
            );
            break;
    }
}
const getAniAtmosphere = id => {
    switch(id) {
        default:
            return (
            <View>
                <AnimatedIconIonicons style={styles.sunny} name={'ios-sunny'} size={100} animation='rotate' delay={0} duration={30000} easing="linear" iterationCount='infinite' />
                <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} />
                <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={50} animation='flow' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
            </View>
            );
            break;
    }
}
const getAniError = id => {
    switch(id) {
        default:
            return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <AnimatedIconIonicons style={styles.sunny} name={'ios-sunny'} size={100} animation='rotate' delay={0} duration={30000} easing="linear" iterationCount='infinite' />
                <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} />
                <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={50} animation='flow' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
                <Text style={styles.temperature}>{data.temperature.current}&#176;</Text>
            </LinearGradient>
            );
    }
}

const getAnimaion = d => {
    return animationAPIs[d.weather.id]((d.dt.tod=="Evening" || d.dt.tod=="Midnight") ? true : false);
}
const getTemperature = temp => {
    return (<Text style={styles.temperature}>{temp}&#176;</Text>);
}
const getScreen = (data, fn) => {
    return (
        <LinearGradient colors={gradientTable[data.dt.tod].gradient} style={styles.container}>
            {getAnimaion(data)}
            {getTemperature(data.temperature.current)}
            
            <View style={styles.halfContainer}>
                {/* Supports touch screen */}
                <TouchableOpacity style={styles.button} onPress={() => fn(data.dt.tod)}>
                    <MaterialCommunityIcons name={'reload'} size={42} color={'black'} />
                </TouchableOpacity>
                <Text style={styles.region}>{data.region}, {data.country}</Text>
                <Text style={styles.description}>{data.weather.description}</Text>
                <Text style={styles.wind}>{data.wind.speed} meter/sec</Text>
            </View>
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


