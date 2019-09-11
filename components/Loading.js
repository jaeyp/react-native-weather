import React, { Fragment } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import gradientTable from '../assets/dataTables';

const AnimatedIconIonicons = Animatable.createAnimatableComponent(Ionicons);

export const screenW = Dimensions.get('window').width;
export const screenH = Dimensions.get('window').height;

/**
 * Loading Components
 * @param {*} data 
 */
export default function Loading(data) {
    if(data.tod=="Evening" || data.tod=="Midnight") {
        return (
            <LinearGradient colors={gradientTable[data.tod].gradient} style={styles.container}>
            {items.moon}
            {items.message}
            {items.clouds}
            </LinearGradient>
        );  
    } else {
        return (
            <LinearGradient colors={gradientTable[data.tod].gradient} style={styles.container}>
            {items.sun}
            {items.message}
            {items.clouds}
            </LinearGradient>
        );  
    }
}

/* Components StypeSheet */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: 'black',
        fontSize: 26,
        opacity: 0.6,
        fontWeight: 'bold',
    },
    loading: {
        position: "absolute",
        top: screenH / 2 - 180,
        color: 'rgba(250, 210, 70, 1)'
    },
    sunny: {
        position: "absolute",
        top: screenH / 2 - 250,
        color: 'rgba(250, 210, 70, 1)'
    },
    moon: {
        position: "absolute",
        top: screenH / 2 - 250,
        color: 'rgba(168, 168, 168, 0.8)'
    },
    stars: {
        position: "absolute",
        top: screenH / 2 - 250,
        color: 'rgba(168, 168, 168, 0.8)'
    },
    cloudSmall: {
        position: "absolute",
        top: screenH / 2 + 240,
        start: screenW / 2 - 130,
        color: 'rgba(236, 245, 246, 0.8)'
    },
});

/* Component fragmentation */
const items = {
    sun: (
        <Fragment>
        <AnimatedIconIonicons style={styles.sunny} name={'ios-sunny'} size={120} animation={'sun'} delay={0} duration={10000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    moon: (
		<Fragment>	    
        <AnimatedIconIonicons style={styles.moon} name={'ios-moon'} size={120} animation={'moon'} delay={0} duration={20000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.stars} name={'ios-star'} size={16} animation='stars1' delay={0} duration={6000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.stars} name={'ios-star'} size={16} animation='stars2' delay={3000} duration={6000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
	clouds: (
		<Fragment>	    
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudTop' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={60} animation='cloudLeft' delay={0} duration={12000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={60} animation='cloudRight' delay={0} duration={15000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudLeftTop' delay={0} duration={20000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudRightBottom' delay={0} duration={20000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    message: (
		<Fragment>	  
        <Animatable.Text style={styles.text} animation='glowPulse' easing="linear" iterationCount='infinite'>Now Loading</Animatable.Text>
        </Fragment>
    ),
}