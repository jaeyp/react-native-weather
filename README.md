# react-native-weather
Learning React Native by Building a Simple Weather App

## Setup from scratch
* Install Expo CLI
```bash
~$ npm install -g expo-cli
~$ expo init weather-app
```
* Create a new repository on github  

* Connect weather-app to git repository
```bash
~$ git remote add origin https://github.com/jaeyp/react-native-weather  
~$ git pull origin master --allow-unrelated-histories  
```

* Install Expo Location API
```bash
~$ expo install expo-location
```

* Install axios (Promise based HTTP client)
```bash
~$ yarn add axios
```

* Install prop-types
```bash
~$ yarn add prop-types
```

* Animation
```bash
~$ yarn add react-native-animatable
```

* Styles
```bash
~$ expo install expo-linear-gradient
```

* Navigation
```bash
~$ npm install react-navigation
~$ npm install react-navigation-stack
~$ yarn add react-native-gesture-handler
```

## Setup
* Clone project
```bash
~$ git clone https://github.com/jaeyp/react-native-weather
```

* Install packages
```bash
~$ yarn install
```

## Build
* android
```bash
~$ expo build:android
```

* ios
```bash
~$ expo build:ios
```

## Run the app
```bash
~$ yarn start
```
