import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
const AnimatedIconIonicons = Animatable.createAnimatableComponent(Ionicons)
const AnimatedIconFontAwesome = Animatable.createAnimatableComponent(FontAwesome)

export default function Weather({data}) {
    // water (Entypo), minus (Entypo), tint (FontAwesome), minus (FontAwesome), flash (FontAwesome), md-snow (Ionicons), ios-star (Ionicons), star (AntDesign) 
    // dehaze (MaterialIcons), line-weight (MaterialIcons), ios-moon (Ionicons), ms-moon (Ionicons)
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
            <AnimatedIconIonicons style={styles.sunny} name={'ios-sunny'} size={100} animation='rotate' delay={0} duration={30000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={120} />
            <AnimatedIconIonicons style={styles.cloud} name={'ios-cloud'} size={50} animation='flow' delay={0} duration={10000} easing="linear" iterationCount='infinite' />
            {/*
            <AnimatedIconFontAwesome style={styles.flash} name={'flash'} size={50} animation='flashBig' easing="linear" iterationCount='infinite' />
            <AnimatedIconFontAwesome style={styles.flash} name={'flash'} size={50} animation='flashSmallL' easing="linear" iterationCount='infinite' />
            <AnimatedIconFontAwesome style={styles.flash} name={'flash'} size={50} animation='flashSmallR' easing="linear" iterationCount='infinite' />
            */}
            {/*
            <AnimatedIconFontAwesome style={styles.drop} name={'tint'} size={20} animation='raindrop' delay={0} duration={1000} easing="linear" iterationCount='infinite' />
            <AnimatedIconFontAwesome style={styles.drop} name={'tint'} size={20} animation='raindrop2' delay={300} duration={1000} easing="linear" iterationCount='infinite' />
            <AnimatedIconFontAwesome style={styles.drop} name={'tint'} size={20} animation='raindrop3' delay={600} duration={1000} easing="linear" iterationCount='infinite' />
            <AnimatedIconFontAwesome style={styles.drop} name={'tint'} size={20} animation='raindrop4' delay={900} duration={1000} easing="linear" iterationCount='infinite' />
            */}
            <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={20} animation='snowdrop' delay={0} duration={1000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={20} animation='snowdrop2' delay={250} duration={1000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={20} animation='snowdrop3' delay={500} duration={1000} easing="linear" iterationCount='infinite' />
            <AnimatedIconIonicons style={styles.drop} name={'md-snow'} size={20} animation='snowdrop4' delay={750} duration={1000} easing="linear" iterationCount='infinite' />
            <Text style={styles.temperature}>{data.temperature.current}&#176;</Text>
        </LinearGradient>
    );
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
            deg: PropTypes.number.isRequired,
            speed: PropTypes.number.isRequired,
        }),
        dt: PropTypes.shape({
            timezone: PropTypes.number.isRequired,
            forecast: PropTypes.instanceOf(Date).isRequired,
            sunrise: PropTypes.instanceOf(Date).isRequired,
            sunset: PropTypes.instanceOf(Date).isRequired,
        })
    }).isRequired
}

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#94CEF2',
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temperature: {
        color: 'white',
        fontSize: 70,
        fontWeight: 'bold',
        position: "absolute",
        top: screenH / 2 - 130
    },
    sunny: {
        position: "absolute",
        top: screenH / 2 - 250,
        start: screenW / 2 - 70,
        color: 'rgba(255, 168, 34, 0.8)'
    },
    cloud: {
        position: "absolute",
        top: screenH / 2 - 240,
        color: 'rgba(236, 245, 246, 0.8)'   // #ECF5F6
    },
    cloud2: {
        position: "absolute",
        top: screenH / 2 - 240,
        color: 'rgba(181, 199, 221, 0.8)'   // #B5C7DD
    },
    cloud3: {
        position: "absolute",
        top: screenH / 2 - 240,
        color: 'rgba(158, 169, 179, 0.9)'   // #9EA9B3
    },
    cloud4: {
        position: "absolute",
        top: screenH / 2 - 240,
        color: 'rgba(112, 125, 151, 0.9)'   // #707D97
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


