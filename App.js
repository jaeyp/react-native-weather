import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class App extends React.Component {
    state = {
        isLoading: true,
    }
	getLocation = async () => {
		try {
            // Get device permission for location
			let { status } = await Permissions.askAsync(Permissions.LOCATION); // destructuring assignment - 'status' is one property of the return object.
			if (status !== 'granted') {
				throw Error('Permission request was rejected.');
            }

            // Get geo-location of device
            const { coords: { altitude: alt, latitude: lat, longitude: long } } 
                = await Location.getCurrentPositionAsync(); // destructuring assignment
            console.log(`altitude: ${alt} latitude: ${lat} longitude: ${long}`);
            this.setState({ isLoading: false });

            // Send to API and Get weather

		} catch (e) {
			console.log(e.message);
			Alert.alert(`Can't find you.\nSo sad.`);
		}
	}
	componentDidMount() {
		this.getLocation();
	}
	render() {
        const { isLoading } = this.state;
		return (
            isLoading ? <Loading /> : null
		);
	}
}
