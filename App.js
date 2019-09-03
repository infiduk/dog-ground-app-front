import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import Main from './component/Main';
import Login from './component/Login';
import Register from './component/Register';

import Marry from './component/AppTabNavigator/MarryTab';
import Board from './component/AppTabNavigator/BoardTab';
import BoardDetail from './component/AppTabNavigator/BoardTabDetail';
import Propose from './component/AppTabNavigator/ProposeTab';
import Profile from './component/AppTabNavigator/ProfileTab';

export const DrawStack = createDrawerNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      drawerLabel: 'Main',
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: 'Login',
    }
  }
});

const MainStack = createStackNavigator({
  Main: { screen: Main, },
  DrawStack: { screen: DrawStack, },
});

const MarryStack = createStackNavigator({
  Marry: { screen: Marry, },
  DrawStack: { screen: DrawStack, },
});

const BoardStack = createStackNavigator({
  Board: { screen: Board, },
  BoardDetail: { screen: BoardDetail, },
  DrawStack: { screen: DrawStack, },
});

const ProposeStack = createStackNavigator({
  Propose: { screen: Propose, },
  DrawStack: { screen: DrawStack, },
});

const AppStackNavigator = createStackNavigator({
  Main: { screen: Main, },
  Login: { screen: Login, },
  Register: { screen: Register, },
  Marry: { screen: Marry, },
  Board: { screen: Board, },
  BoardDetail: { screen: BoardDetail, },
  Propose: { screen: Propose, },
}, { 
  initialRouteName: 'Login',
});

const AppTabNavigator = createBottomTabNavigator({
  MainTab: { screen: MainStack, },
  MarryTab: { screen: MarryStack },
  BoardTab: { screen: BoardStack },
  ProposeTab: { screen: ProposeStack },
});

const SwitchNavigation = createSwitchNavigator({
  routeOne: { screen: AppStackNavigator, },
  routeTwo: { screen: AppTabNavigator, },
}, {
  initialRouteName: 'routeOne',
});

const AppTabContainer = createAppContainer(SwitchNavigation);

export default class App extends Component {
  render() {
    return (
      <AppTabContainer />
    );
  }
}