import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Alert,
} from 'react-native';
import MapView, { MAP_TYPES, ProviderPropType } from 'react-native-maps';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import * as Location from 'expo-location';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

/**
 * Map Component
 */
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            region: {
                latitude: this.props.geo.lat,
                longitude: this.props.geo.lon,
                latitudeDelta: LATITUDE_DELTA * 32,
                longitudeDelta: LONGITUDE_DELTA * 32,
            },
        };
    }

    _onRegionChange = region => {
        this.setState({ region });
    }
    _addLocation = () => {
        this._reverseGeocoding();
    }
    _removeLocation = () => {
        this.props.fnRemove();
    }
    _cancel = () => {
        this.props.fnCancel();
    }
    _zoomInCoordinate = () => {
        const region = this.state.region;
        return {
            latitudeDelta:
                region.latitudeDelta / 8,
            longitudeDelta:
                region.longitudeDelta / 8,
        };
    }
    _zoomInRegion = () => {
        return {
            ...this.state.region,
            ...this._zoomInCoordinate(),
        };
    }
    _zoomIn = () => {
        this.map.animateToRegion(this._zoomInRegion());
    }
    _zoomOutCoordinate = () => {
        const region = this.state.region;
        return {
            latitudeDelta:
                region.latitudeDelta * 8,
            longitudeDelta:
                region.longitudeDelta * 8,
        };
    }
    _zoomOutRegion = () => {
        return {
            ...this.state.region,
            ...this._zoomOutCoordinate(),
        };
    }
    _zoomOut = () => {
        this.map.animateToRegion(this._zoomOutRegion());
    }
    _reverseGeocoding = async () => {
        let location = { latitude: this.state.region.latitude, longitude: this.state.region.longitude };
        let result = await Location.reverseGeocodeAsync(location);
        let region = result[0].city;
        let countryCode = result[0].isoCountryCode;
        let street = result[0].street;
        
        Alert.alert(
            'Do you want to add this location?',
            `${(region == null) ? street : region}, ${countryCode}\n(${this.state.region.latitude.toPrecision(7)}, ${this.state.region.longitude.toPrecision(7)})`,
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.props.fnAdd({ city: region, lat: location.latitude, lon: location.longitude }) },
            ],
            { cancelable: false },
        );
    }

    render() {
        return (
            <View style={styles.targetLine}>
                <View style={styles.container}>
                    <MapView
                        provider={this.props.provider}
                        ref={ref => {
                            this.map = ref;
                        }}
                        mapType={MAP_TYPES.TERRAIN}
                        style={styles.map}
                        initialRegion={this.state.region}
                        onRegionChange={region => this._onRegionChange(region)}
                    />
                    {/*
                    <View style={[styles.square, styles.latlng]}>
                        <Text style={styles.centeredText}>
                        {`${this.state.region.latitude.toPrecision(7)}, ${this.state.region.longitude.toPrecision(7)}`}
                        </Text>
                    </View>
                    */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => this._zoomIn()}
                            style={[styles.bubble, styles.buttonSmall]}
                        >
                            <AntDesign style={styles.buttonZoom} name='pluscircleo' size={24} color='black' />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this._addLocation()}
                            style={[styles.square, styles.buttonBig]}
                        >
                            <Text style={styles.buttonText}>Add</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this._cancel()}
                            style={[styles.square, styles.buttonBig]}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this._zoomOut()}
                            style={[styles.bubble, styles.buttonSmall]}
                        >
                            <AntDesign style={styles.buttonZoom} name='minuscircleo' size={24} color='black' />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* TODO: reloading animation */}
                <MaterialCommunityIcons name='target' size={32} color='black' />
            </View>
        );
    }
}

Map.propTypes = {
    provider: ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    targetLine: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 4,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 0,
        paddingVertical: 8,
        borderRadius: 20,
    },
    latlng: {
        width: 210,
        alignItems: 'stretch',
    },
    buttonBig: {
        width: 100,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    buttonSmall: {
        width: 40,
        paddingHorizontal: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    buttonText: {
        fontSize: 14,
        opacity: 0.8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonZoom: {
        opacity: 0.8,
        textAlign: 'center',
    },
    centeredText: {
        fontSize: 16,
        textAlign: 'center'
    },
});

export default Map;