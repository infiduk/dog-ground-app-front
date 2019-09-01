import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './component/Main';
import Login from './component/Login';
import Register from './component/Register';

const AppStackNavigator = createStackNavigator({
  Main: { screen: Main, },
  Login: { screen: Login, },
  Register: { screen: Register },
}, { 
  initialRouteName : 'Login',
});

const AppStackContainer = createAppContainer(AppStackNavigator);

export default class App extends Component {
  render() {
    return (
      <AppStackContainer />
    );
  }
}