import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './component/Main';
import Login from './component/Login';
import Register from './component/Register';

import Marry from './component/AppTabNavigator/MarryTab';
import Board from './component/AppTabNavigator/BoardTab';
import BoardDetail from './component/AppTabNavigator/BoardTabDetail';
import Propose from './component/AppTabNavigator/ProposeTab';
import Profile from './component/AppTabNavigator/ProfileTab';

const AppStackNavigator = createStackNavigator({
  Main: { screen: Main, },
  Login: { screen: Login, },
  Register: { screen: Register },
  Marry : { screen: Marry, },
  Board : { screen: Board, },
  BoardDetail : { screen: BoardDetail, },
  Propose : { screen: Propose, },
  Profile : { screen: Profile, },
}, { 
  initialRouteName : 'Main',
});

const AppStackContainer = createAppContainer(AppStackNavigator);

export default class App extends Component {
  render() {
    return (
      <AppStackContainer />
    );
  }
}