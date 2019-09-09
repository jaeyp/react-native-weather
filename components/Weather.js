import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

export default function Weather({data}) {
    return (
        <View style={styles.container}>
            <Text>{data.temperature.current}</Text>
        </View>
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
/*
Weather.propTypes = {
    temp: PropTypes.number.isRequired
};
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});


