import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import gradientTable from '../assets/dataTables';

const AnimatedIconIonicons = Animatable.createAnimatableComponent(Ionicons);

export const screenW = Dimensions.get('window').width;
export const screenH = Dimensions.get('window').height;

const containers = {
    SunNMoon: tod => {
        return (
            <View style={styles.containerTop}>
            {animationAPIs[800]((tod == "Evening" || tod == "BeforeNight" || tod == "Midnight" || tod == "AfterNight") ? true : false)}
            </View>
        );
    },
    Message: msg => {
        return (
            <View style={styles.containerMiddle}>
            <Animatable.Text style={styles.message} animation='glowPulse' easing="linear" iterationCount='infinite'>{msg}</Animatable.Text>
            </View>
        );
    },
    Clouds: () => {
        return (
            <View style={styles.containerBottom}>
            <AnimatedIconIonicons style={styles.clouds} name={'ios-cloud'} size={50} animation='cloudTop' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.clouds} name={'ios-cloud'} size={60} animation='cloudLeft' delay={0} duration={12000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.clouds} name={'ios-cloud'} size={60} animation='cloudRight' delay={0} duration={15000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.clouds} name={'ios-cloud'} size={50} animation='cloudLeftTop' delay={0} duration={20000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.clouds} name={'ios-cloud'} size={50} animation='cloudRightBottom' delay={0} duration={20000} easing="linear" iterationCount='infinite' />
            </View>
        );
    },
}

/**
 * Loading Component
 * @param {*} props : times of day
 */
export default function Loading(props) {
    return (
        <LinearGradient colors={gradientTable[props.tod].gradient} style={styles.container}>
        {containers.SunNMoon(props.tod)}
        {containers.Message('Now Loading')}
        {containers.Clouds()}
        </LinearGradient>
    );
}

/* Components StypeSheet */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerTop: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerMiddle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerBottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    message: {
        color: 'black',
        fontSize: 26,
        opacity: 0.6,
        fontWeight: 'bold',
    },
    clouds: {
        position: "absolute",
        top: screenH/5,
        start: -(screenW/2 - 50),
        color: 'rgba(236, 245, 246, 0.8)',
    },
});
