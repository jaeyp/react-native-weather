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
import * as Location from 'expo-location';
//import Geocoder from 'react-native-geocoding';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class DisplayLatLng extends React.Component {
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

  onRegionChange(region) {
    this.setState({ region });
  }

  jumpRandom() {
    this.setState({ region: this.randomRegion() });
  }

  zoomIn() {
    this.map.animateToRegion(this.zoomInRegion());
    //this.map.animateToRegion(this.randomRegion());
  }

  addLocation() {
    this.reverseGeocoding();
    //this.map.animateCamera({ center: this.randomCoordinate() });
  }

  removeLocation() {
    this.props.fnRemove();
    //this.map.animateCamera({ center: this.randomCoordinate() });
  }

  cancel() {
      this.props.fnCancel();
  }

  zoomOut() {
    this.map.animateToRegion(this.zoomOutRegion());
    //this.map.animateCamera({ heading: this.getRandomFloat(-360, 360) });
  }

  getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  zoomInCoordinate() {
    const region = this.state.region;
    return {
      latitudeDelta:
        region.latitudeDelta / 8,
      longitudeDelta:
        region.longitudeDelta / 8,
    };
  }
  zoomInRegion() {
    return {
      ...this.state.region,
      ...this.zoomInCoordinate(),
    };
  }
  zoomOutCoordinate() {
    const region = this.state.region;
    return {
      latitudeDelta:
        region.latitudeDelta * 8,
      longitudeDelta:
        region.longitudeDelta * 8,
    };
  }
  zoomOutRegion() {
    return {
      ...this.state.region,
      ...this.zoomOutCoordinate(),
    };
  }

  randomCoordinate() {
    const region = this.state.region;
    return {
      latitude:
        region.latitude + (Math.random() - 0.5) * (region.latitudeDelta / 2),
      longitude:
        region.longitude + (Math.random() - 0.5) * (region.longitudeDelta / 2),
    };
  }

  randomRegion() {
    return {
      ...this.state.region,
      ...this.randomCoordinate(),
    };
  }

  async reverseGeocoding() {
    let location = {latitude: this.state.region.latitude, longitude: this.state.region.longitude};
    console.log(location);
    let result = await Location.reverseGeocodeAsync(location);
    console.log(result);
    let region = result[0].city;
    let countryCode = result[0].isoCountryCode;
    let street = result[0].street;
    //Alert.alert(`${(city==null)?street:city}, ${countryCode}`);
    // Works on both iOS and Android
    Alert.alert(
        'Do you want to add this location?',
        `${(region==null)?street:region}, ${countryCode}`,
        [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.props.fnAdd({city: region, lat: location.latitude, lon: location.longitude})},
        ],
        {cancelable: false},
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
          onRegionChange={region => this.onRegionChange(region)}
        />
        <View style={[styles.square, styles.latlng]}>
          <Text style={styles.centeredText}>
            {`${this.state.region.latitude.toPrecision(7)}, ${this.state.region.longitude.toPrecision(7)}`}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.zoomIn()}
            style={[styles.bubble, styles.buttonSmall]}
          >
            <AntDesign style={styles.buttonZoom} name='pluscircleo' size={24} color='black' />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.addLocation()}
            style={[styles.square, styles.buttonBig]}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.cancel()}
            style={[styles.square, styles.buttonBig]}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.zoomOut()}
            style={[styles.bubble, styles.buttonSmall]}
          >
          <AntDesign style={styles.buttonZoom} name='minuscircleo' size={24} color='black' />
          </TouchableOpacity>
        </View>
      </View>
            <MaterialCommunityIcons name='target' size={32} color='black' />
        </View>
    );
  }
}

DisplayLatLng.propTypes = {
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
    width:100,
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

export default DisplayLatLng;