import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { screenH } from '../components/Loading';

const AnimatedIconIonicons = Animatable.createAnimatableComponent(Ionicons);
const AnimatedIconFontAwesome = Animatable.createAnimatableComponent(FontAwesome);
const AnimatedIconFeather = Animatable.createAnimatableComponent(Feather);

const getStyleSunNMoon = isNight => isNight?styles.moon:styles.sunny;
const getIconSunNMoon = isNight => isNight?'ios-moon':'ios-sunny';
const getAniSunNMoonC = isNight => ani = isNight?'moon':'sun';
const getAniSunNMoon = isNight => isNight?'moonRight':'sunLeft';
const getDurationSunMoon = isNight => isNight?10000:30000;

/**
 * animation APIs
 *  It draws weather animation according to given weather information id from openweathermap.org
 */
export default animationAPIs = {
    200: isNight => { // thunderstorm with light rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.lightThunder(50)}
            {animation.lightRain(24)}
            </Fragment>);
    },
    201: isNight => { // thunderstorm with rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.lightThunder(50)}
            {animation.moderateRain(24)}
            </Fragment>);
    },
    202: isNight => { // thunderstorm with heavy rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.moderateThunder(40)}
            {animation.heavyRain(24)}
            </Fragment>);
    },
    210: isNight => { // light thunderstorm
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.lightThunder(50)}
            </Fragment>);
    },
    211: isNight => { // thunderstorm
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.moderateThunder(50)}
            </Fragment>);
    },
    212: isNight => { // heavy thunderstorm
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.heavyThunder(50)}
            </Fragment>);
    },
    221: isNight => { // ragged thunderstorm
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.heavyThunder(50)}
            </Fragment>);
    },
    230: isNight => { // thunderstorm with light drizzle
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.lightThunder(50)}
            {animation.lightDrizzle(24)}
            </Fragment>);
    },
    231: isNight => { // thunderstorm with drizzle
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.lightThunder(50)}
            {animation.moderateDrizzle(28)}
            </Fragment>);
    },
    232: isNight => { // thunderstorm with heavy drizzle
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.moderateThunder(40)}
            {animation.heavyDrizzle(32)}
            </Fragment>);
    },
    300: isNight => { // light intensity drizzle
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.lightDrizzle(24)}
            </Fragment>);
    },
    301: isNight => { // drizzle
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.moderateDrizzle(28)}
            </Fragment>);
    },
    302: isNight => { // heavy intensity drizzle
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.heavyDrizzle(32)}
            </Fragment>);
    },
    310: isNight => { // light intensity drizzle rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.lightDrizzle(24)}
            {animation.lightRain(20)}
            </Fragment>);
    },
    311: isNight => { // drizzle rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.lightDrizzle(28)}
            {animation.lightRain(24)}
            </Fragment>);
    },
    312: isNight => { // heavy intensity drizzle rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.lightDrizzle(32)}
            {animation.lightRain(28)}
            </Fragment>);
    },
    313: isNight => { // shower rain and drizzle
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.moderateDrizzle(28)}
            {animation.lightRain(24)}
            </Fragment>);
    },
    314: isNight => { // heavy shower rain and drizzle
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.moderateDrizzle(32)}
            {animation.lightRain(28)}
            </Fragment>);
    },
    321: isNight => { // shower drizzle
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.showerDrizzle(32)}
            </Fragment>);
    },
    500: isNight => { // light rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.lightRain(24)}
            </Fragment>);
    },
    501: isNight => { // moderate rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.moderateRain(24)}
            </Fragment>);
    },
    502: isNight => { // heavy intensity rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.heavyRain(24)}
            </Fragment>);
    },
    503: isNight => { // very heavy rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.heavyRain(28)}
            </Fragment>);
    },
    504: isNight => { // extreme rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.heavyRain(32)}
            </Fragment>);
    },
    511: isNight => { // freezing rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.moderateRain(24)}
            {animation.moderateSnow(18)}
            </Fragment>);
    },
    520: isNight => { // light intensity shower rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.heavyRain(20)}
            </Fragment>);
    },
    521: isNight => { // shower rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.heavyRain(24)}
            </Fragment>);
    },
    522: isNight => { // heavy intensity shower rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.heavyRain(28)}
            </Fragment>);
    },
    531: isNight => { // ragged shower rain
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.heavyRain(32)}
            </Fragment>);
    },
    600: isNight => { // light snow
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.lightSnow(18)}
            </Fragment>);
    },
    601: isNight => { // Snow
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.moderateSnow(18)}
            </Fragment>);
    },
    602: isNight => { // Heavy snow
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.heavySnow(18)}
            </Fragment>);
    },
    611: isNight => { // Sleet
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.lightSnow(12)}
            </Fragment>);
    },
    612: isNight => { // Light shower sleet
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.moderateSnow(12)}
            </Fragment>);
    },
    613: isNight => { // Shower sleet
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.heavySnow(12)}
            </Fragment>);
    },
    615: isNight => { // Light rain and snow
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.lightRain(24)}
            {animation.lightSnow(18)}
            </Fragment>);
    },
    616: isNight => { // Rain and snow
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.moderateRain(24)}
            {animation.moderateSnow(18)}
            </Fragment>);
    },
    620: isNight => { // Light shower snow
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsScattered}
            {animation.lightShowerSnow(14)}
            </Fragment>);
    },
    621: isNight => { // Shower snow
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.moderateShowerSnow(14)}
            </Fragment>);
    },
    622: isNight => { // Heavy shower snow
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.heavyShowerSnow(14)}
            </Fragment>);
    },
    701: isNight => { // mist
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsOvercast}
            {animation.mist(60)}
            </Fragment>);
    },
    711: isNight => { // Smoke
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsOvercast}
            {animation.haze(60)}
            </Fragment>);
    },
    721: isNight => { // Haze
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsOvercast}
            {animation.haze(60)}
            </Fragment>);
    },
    731: isNight => { // sand/ dust whirls
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsOvercast}
            {animation.dust(60)}
            </Fragment>);
    },
    741: isNight => { // fog
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsOvercast}
            {animation.mist(60)}
            </Fragment>);
    },
    751: isNight => { // sand
        return (
                <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsOvercast}
            {animation.dust(60)}
            </Fragment>);
    },
    761: isNight => { // dust
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsOvercast}
            {animation.dust(60)}
            </Fragment>);
    },
    762: isNight => { // volcanic ash
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsOvercast}
            {animation.haze(60)}
            </Fragment>);
    },
    771: isNight => { // squalls
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsOvercast}
            {animation.heavyShowerSnow(14)}
            </Fragment>);
    },
    781: isNight => { // tornado
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.rainCloudsBroken}
            {animation.tornado(60)}
            </Fragment>);
    },
    800: isNight => { // clear
        return(
            <Fragment>
            {animation.clearSunNMoon(isNight)}
            {isNight?animation.stars:null}
            </Fragment>);
    },
    801: isNight => { // few clouds 11-25%
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsFew}
            </Fragment>);
    },
    802: isNight => { // scattered clouds 25-50%
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsScattered}
            </Fragment>);
    },
    803: isNight => { // broken clouds 51- 84%
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsBroken}
            </Fragment>);
    },
    804: isNight => { // overcast clouds 85-100%
        return (
            <Fragment>
            {animation.sunNMoon(isNight)}
            {animation.cloudsOvercast}
            </Fragment>);
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
        color: 'rgba(250, 204, 72, 1)',
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
    cloudGray: {
        position: "absolute",
        top: screenH / 2 - 240,
        color: 'rgba(182, 182, 182, 0.8)'
    },
    cloudDark: {
        position: "absolute",
        top: screenH / 2 - 240,
        color: 'rgba(138, 138, 138, 0.7)'
    },
    cloudSmall: {
        position: "absolute",
        top: screenH / 2 - 240,
        color: 'rgba(236, 245, 246, 0.8)'
    },
    cloudSmallGray: {
        position: "absolute",
        top: screenH / 2 - 240,
        color: 'rgba(196, 196, 196, 0.7)'
    },
    cloudSmallDark: {
        position: "absolute",
        top: screenH / 2 - 240,
        color: 'rgba(152, 152, 152, 0.6)'
    },
    flash: {
        position: "absolute",
        top: screenH / 2 - 180,
        color: 'yellow'
    },
    drop: {
        position: "absolute",
        top: screenH / 2 - 180
    },
    haze: {
        position: "absolute",
        top: screenH / 2 - 180,
        color: 'rgba(64, 64, 64, 0.5)'
    },
    mist: {
        position: "absolute",
        top: screenH / 2 - 180,
        color: 'rgba(128, 128, 128, 0.5)'
    },
    dust: {
        position: "absolute",
        top: screenH / 2 - 180,
        color: 'rgba(191, 131, 78, 0.5)'
    },
    tornado: {
        position: "absolute",
        top: screenH / 2 - 180,
        color: 'rgba(32, 32, 32, 0.5)'
    },
});


/* Component fragmentation */
const animation = {
    sunNMoon: isNight => (
		<Fragment>
        <AnimatedIconIonicons style={getStyleSunNMoon(isNight)} name={getIconSunNMoon(isNight)} size={100} animation={getAniSunNMoon(isNight)} delay={0} duration={getDurationSunMoon(isNight)} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    clearSunNMoon: isNight => (
		<Fragment>
        <AnimatedIconIonicons style={getStyleSunNMoon(isNight)} name={getIconSunNMoon(isNight)} size={120} animation={getAniSunNMoonC(isNight)} delay={0} duration={getDurationSunMoon(isNight)} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    stars: (
		<Fragment>
        <AnimatedIconIonicons style={styles.stars} name={'ios-star'} size={16} animation='stars1' delay={0} duration={6000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.stars} name={'ios-star'} size={16} animation='stars2' delay={0} duration={6000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    cloudsFew: (
		<Fragment>
        <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
        </Fragment>
    ),
    cloudsScattered: (
		<Fragment>
        <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudTop' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    cloudsBroken: (
		<Fragment>
        <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudTop' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={60} animation='cloudLeft' delay={0} duration={12000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={60} animation='cloudRight' delay={0} duration={15000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    cloudsOvercast: (
		<Fragment>
        <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudTop' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={60} animation='cloudLeft' delay={0} duration={12000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={60} animation='cloudRight' delay={0} duration={15000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudLeftTop' delay={0} duration={20000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmall} name={'ios-cloud'} size={50} animation='cloudRightBottom' delay={0} duration={20000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    rainCloudsFew: (
		<Fragment>
        <AnimatedIconIonicons style={styles.cloudGray} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
        </Fragment>
    ),
    rainCloudsScattered: (
		<Fragment>
        <AnimatedIconIonicons style={styles.cloudGray} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
        <AnimatedIconIonicons style={styles.cloudSmallGray} name={'ios-cloud'} size={50} animation='cloudTop' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    rainCloudsBroken: (
		<Fragment>
        <AnimatedIconIonicons style={styles.cloudDark} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
        <AnimatedIconIonicons style={styles.cloudSmallDark} name={'ios-cloud'} size={50} animation='cloudTop' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmallDark} name={'ios-cloud'} size={60} animation='cloudLeft' delay={0} duration={12000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmallDark} name={'ios-cloud'} size={60} animation='cloudRight' delay={0} duration={15000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    rainCloudsOvercast: (
		<Fragment>
        <AnimatedIconIonicons style={styles.cloudDark} name={'ios-cloud'} size={120} animation="pulse" duration={4000} easing="ease-out" iterationCount="infinite" />
        <AnimatedIconIonicons style={styles.cloudSmallDark} name={'ios-cloud'} size={50} animation='cloudTop' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmallDark} name={'ios-cloud'} size={60} animation='cloudLeft' delay={0} duration={12000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmallDark} name={'ios-cloud'} size={60} animation='cloudRight' delay={0} duration={15000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmallDark} name={'ios-cloud'} size={50} animation='cloudLeftTop' delay={0} duration={20000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.cloudSmallDark} name={'ios-cloud'} size={50} animation='cloudRightBottom' delay={0} duration={20000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    lightRain: size => (
        <Fragment>
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropMidSmall' delay={0} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropLeftSmall' delay={200} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropRightSmall' delay={400} duration={1200} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    moderateRain: size => (
        <Fragment>
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropMid' delay={0} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropLeft' delay={200} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropRight' delay={400} duration={1200} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    heavyRain: size => (
        <Fragment>
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropMid' delay={0} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropLeft' delay={200} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropRight' delay={400} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropMidSmall' delay={0} duration={600} easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropLeftSmall' delay={200} duration={600} easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.drop} name={'minus'} size={size} animation='raindropRightSmall' delay={400} duration={600} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    lightThunder: size => (
        <Fragment>
        <AnimatedIconFontAwesome style={styles.flash} name={'flash'} size={size} animation='thunderSmall' easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    moderateThunder: size => (
        <Fragment>
        <AnimatedIconFontAwesome style={styles.flash} name={'flash'} size={size} animation='thunderSmall' easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.flash} name={'flash'} size={50} animation='thunderSmallL' easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.flash} name={'flash'} size={50} animation='thunderSmallR' easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    heavyThunder: size => (
        <Fragment>
        <AnimatedIconFontAwesome style={styles.flash} name={'flash'} size={size} animation='thunderBig' easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.flash} name={'flash'} size={size} animation='thunderSmallL' easing="linear" iterationCount='infinite' />
        <AnimatedIconFontAwesome style={styles.flash} name={'flash'} size={size} animation='thunderSmallR' easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    lightDrizzle: size => (
        <Fragment>
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropMidSmall' delay={0} duration={2400} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropLeftSmall' delay={200} duration={2400} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropRightSmall' delay={400} duration={2400} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    moderateDrizzle: size => (
        <Fragment>
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropMid' delay={0} duration={2400} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropLeft' delay={200} duration={2400} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropRight' delay={400} duration={2400} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    heavyDrizzle: size => (
        <Fragment>
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropMid' delay={0} duration={2400} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropLeft' delay={200} duration={2400} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropRight' delay={400} duration={2400} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size-4} animation='raindropMidLeft' delay={600} duration={2400} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size-4} animation='raindropMidRight' delay={800} duration={2400} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    showerDrizzle: size => (
        <Fragment>
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropMid' delay={0} duration={2400} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropLeft' delay={200} duration={2400} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropRight' delay={400} duration={2400} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropMidSmall' delay={0} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropLeftSmall' delay={200} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconFeather style={styles.drop} name={'more-horizontal'} size={size} animation='raindropRightSmall' delay={400} duration={1200} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    lightSnow: size => (
        <Fragment>
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size-4} animation='snowdropMid' delay={0} duration={1800} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size-4} animation='snowdropLeftSmall' delay={600} duration={1800} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size-4} animation='snowdropRightSmall' delay={1200} duration={1800} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    moderateSnow: size => (
        <Fragment>
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropMid' delay={0} duration={1800} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size-4} animation='snowdropLeft' delay={600} duration={1800} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size-4} animation='snowdropRight' delay={1200} duration={1800} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    heavySnow: size => (
        <Fragment>
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropMid' delay={0} duration={2000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropLeft' delay={700} duration={2000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropRight' delay={1400} duration={2000} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropMidSmall' delay={0} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropLeftSmall' delay={800} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropRightSmall' delay={400} duration={1200} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    lightShowerSnow: size => (
        <Fragment>
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size-2} animation='snowdropMidSmall' delay={0} duration={800} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size-2} animation='snowdropLeftSmall' delay={200} duration={800} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size-2} animation='snowdropRightSmall' delay={400} duration={800} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    moderateShowerSnow: size => (
        <Fragment>
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropMidSmall' delay={0} duration={800} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropLeftSmall' delay={200} duration={800} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropRightSmall' delay={400} duration={800} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    heavyShowerSnow: size => (
        <Fragment>
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropMidSmall' delay={0} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropLeftSmall' delay={400} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropRightSmall' delay={800} duration={1200} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropMidSmall' delay={0} duration={800} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropLeftSmall' delay={400} duration={800} easing="linear" iterationCount='infinite' />
        <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={size} animation='snowdropRightSmall' delay={200} duration={800} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    haze: size => (
        <Fragment>
        <AnimatedIconFeather style={styles.haze} name={'align-center'} size={size} animation='haze' delay={0} duration={4000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    mist: size => (
        <Fragment>
        <AnimatedIconFeather style={styles.mist} name={'align-center'} size={size} animation='haze' delay={0} duration={4000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    dust: size => (
        <Fragment>
        <AnimatedIconFeather style={styles.dust} name={'align-center'} size={size} animation='haze' delay={0} duration={4000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    tornado: size => (
        <Fragment>
        <AnimatedIconFeather style={styles.tornado} name={'chrome'} size={size} animation='tornado' delay={0} duration={1000} easing="linear" iterationCount='infinite' />
        </Fragment>
    ),
    
}