import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { screenH, screenW } from '../components/Loading';

const AnimatedIconIonicons = Animatable.createAnimatableComponent(Ionicons);
const AnimatedIconFontAwesome = Animatable.createAnimatableComponent(FontAwesome);

const getStyleSunNMoon = isNight => isNight?styles.moon:styles.sunny;
const getIconSunNMoon = isNight => isNight?'ios-moon':'ios-sunny';
const getAniSunNMoonC = isNight => ani = isNight?'moon':'sun';
const getAniSunNMoon = isNight => isNight?'moonRight':'sunLeft';
const getDurationSunMoon = isNight => isNight?10000:30000;

/** Icons
 *  water (Entypo), minus (Entypo), tint (FontAwesome), minus (FontAwesome), flash (FontAwesome), 
 *  md-snow (Ionicons), ios-star (Ionicons), star (AntDesign), dehaze (MaterialIcons), 
 *  line-weight (MaterialIcons), ios-moon (Ionicons), ms-moon (Ionicons)
 */
export default animationAPIs = {
    200: isNight => { // thunderstorm with light rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    201: isNight => { // thunderstorm with rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    202: isNight => { // thunderstorm with heavy rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    210: isNight => { // light thunderstorm
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    211: isNight => { // thunderstorm
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    212: isNight => { // heavy thunderstorm
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    221: isNight => { // ragged thunderstorm
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    230: isNight => { // thunderstorm with light drizzle
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    231: isNight => { // thunderstorm with drizzle
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    232: isNight => { // thunderstorm with heavy drizzle
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    300: isNight => { // light intensity drizzle
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    301: isNight => { // drizzle
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    302: isNight => { // heavy intensity drizzle
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    310: isNight => { // light intensity drizzle rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    311: isNight => { // drizzle rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    312: isNight => { // heavy intensity drizzle rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    313: isNight => { // shower rain and drizzle
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    314: isNight => { // heavy shower rain and drizzle
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    321: isNight => { // shower drizzle
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    500: isNight => { // light rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    501: isNight => { // moderate rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    502: isNight => { // heavy intensity rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    503: isNight => { // very heavy rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    504: isNight => { // extreme rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    511: isNight => { // freezing rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    520: isNight => { // light intensity shower rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    521: isNight => { // shower rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    522: isNight => { // heavy intensity shower rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    531: isNight => { // ragged shower rain
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    600: isNight => { // light snow
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    601: isNight => { // Snow
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    602: isNight => { // Heavy snow
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    611: isNight => { // Sleet
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    612: isNight => { // Light shower sleet
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    613: isNight => { // Shower sleet
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    615: isNight => { // Light rain and snow
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    616: isNight => { // Rain and snow
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    620: isNight => { // Light shower snow
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    621: isNight => { // Shower snow
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    622: isNight => { // Heavy shower snow
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    701: isNight => { // mist
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    711: isNight => { // Smoke
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    721: isNight => { // Haze
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    731: isNight => { // sand/ dust whirls
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    741: isNight => { // fog
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    751: isNight => { // sand
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    761: isNight => { // dust
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    762: isNight => { // volcanic ash
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    771: isNight => { // squalls
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    781: isNight => { // tornado
        return (
        <View style={styles.halfContainer}>
        </View>);
    },
    800: isNight => { // clear
        if(isNight) {
            return (
            <View style={styles.halfContainer}>
                <AnimatedIconIonicons style={getStyleSunNMoon(isNight)} name={getIconSunNMoon(isNight)} size={120} animation={getAniSunNMoonC(isNight)} delay={0} duration={getDurationSunMoon(isNight)} easing="linear" iterationCount='infinite' />
                <AnimatedIconIonicons style={styles.stars} name={'ios-star'} size={16} animation='stars1' delay={0} duration={6000} easing="linear" iterationCount='infinite' />
                <AnimatedIconIonicons style={styles.stars} name={'ios-star'} size={16} animation='stars2' delay={3000} duration={6000} easing="linear" iterationCount='infinite' />
            </View>);
        } else {
            return (
            <View style={styles.halfContainer}>
                <AnimatedIconIonicons style={getStyleSunNMoon(isNight)} name={getIconSunNMoon(isNight)} size={120} animation={getAniSunNMoonC(isNight)} delay={0} duration={getDurationSunMoon(isNight)} easing="linear" iterationCount='infinite' />
            </View>);
        }
    },
    801: isNight => { // few clouds 11-25%
        return (
        <View style={styles.halfContainer}>
            <AnimatedIconIonicons style={getStyleSunNMoon(isNight)} name={getIconSunNMoon(isNight)} size={100} animation={getAniSunNMoon(isNight)} delay={0} duration={getDurationSunMoon(isNight)} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
        </View>);
    },
    802: isNight => { // scattered clouds 25-50%
        return (
        <View style={styles.halfContainer}>
            <AnimatedIconIonicons style={getStyleSunNMoon(isNight)} name={getIconSunNMoon(isNight)} size={100} animation={getAniSunNMoon(isNight)} delay={0} duration={getDurationSunMoon(isNight)} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
            <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudTop' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={60} animation='cloudLeft' delay={0} duration={12000} easing="linear" iterationCount='infinite' />
        </View>);
    },
    803: isNight => { // broken clouds 51- 84%
        return (
        <View style={styles.halfContainer}>
            <AnimatedIconIonicons style={getStyleSunNMoon(isNight)} name={getIconSunNMoon(isNight)} size={100} animation={getAniSunNMoon(isNight)} delay={0} duration={getDurationSunMoon(isNight)} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
            <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudTop' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={60} animation='cloudLeft' delay={0} duration={12000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={60} animation='cloudRight' delay={0} duration={15000} easing="linear" iterationCount='infinite' />
        </View>);
    },
    804: isNight => { // overcast clouds 85-100%
        return (
        <View style={styles.halfContainer}>
            <AnimatedIconIonicons style={getStyleSunNMoon(isNight)} name={getIconSunNMoon(isNight)} size={100} animation={getAniSunNMoon(isNight)} delay={0} duration={getDurationSunMoon(isNight)} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
            <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudTop' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={60} animation='cloudLeft' delay={0} duration={12000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={60} animation='cloudRight' delay={0} duration={15000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudLeftTop' delay={0} duration={20000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudRightBottom' delay={0} duration={20000} easing="linear" iterationCount='infinite' />
        </View>);
    },
}

const styles = StyleSheet.create({
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    sunny: {
        position: "absolute",
        top: screenH / 2 - 250,
        //start: screenW / 2 - 70,
        color: 'rgba(250, 210, 70, 1)'
    },
    moon: {
        position: "absolute",
        top: screenH / 2 - 250,
        //start: screenW / 2,
        color: 'rgba(168, 168, 168, 0.8)'
    },
    stars: {
        position: "absolute",
        top: screenH / 2 - 250,
        color: 'rgba(168, 168, 168, 0.8)'
    },
    cloud: {
        position: "absolute",
        top: screenH / 2 - 240,
        color: 'rgba(255, 255, 255, 0.9)'
    },
    cloudSmall: {
        position: "absolute",
        top: screenH / 2 - 240,
        color: 'rgba(236, 245, 246, 0.8)'
    },
    flash: {
        position: "absolute",
        top: screenH / 2 - 180,
        color: 'yellow'
    },
    drop: {
        position: "absolute",
        top: screenH / 2 - 180
    }
});