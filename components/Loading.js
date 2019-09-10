import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading() {
    return (
        <LinearGradient colors={['#F2C2D4', '#D3C4F2', '#6289D9']} style={styles.container}>
            <Text style={styles.text}>
                Loading...
            </Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
        /*
        backgroundColor: '#fdf6aa',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        */
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
});