import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { Icon } from 'native-base';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import Main from './component/Main';
import Login from './component/Login';
import Register from './component/Register';

import Marry from './component/AppTabNavigator/MarryTab';
import MarryDetail from './component/AppTabNavigator/MarryTabDetail';
import Board from './component/AppTabNavigator/BoardTab';
import BoardDetail from './component/AppTabNavigator/BoardTabDetail';
import BoardNew from './component/AppTabNavigator/BoardTabNew';
import Propose from './component/AppTabNavigator/ProposeTab';
import ProposeDetail from './component/AppTabNavigator/ProposeTabItem';
import Profile from './component/AppTabNavigator/ProfileTab';

// const DrawStack = createDrawerNavigator({
//   Main: { screen: AppTabNavigator, },
//   Drawer: { screen: Profile, },
// });

const MainStack = createStackNavigator({
  Main: { screen: Main, },
  // Marry: { screen: Marry, },
  // MarryDetail: { screen: MarryDetail, },
  // Board: { screen: Board, },
  // BoardDetail: { screen: BoardDetail, },
  // Propose: { screen: Propose, },
});

const MarryStack = createStackNavigator({
  Marry: { screen: Marry, },
  MarryDetail: { screen: MarryDetail, },
  // DrawStack: { screen: DrawStack, },
});

const BoardStack = createStackNavigator({
  Board: { screen: Board, },
  BoardDetail: { screen: BoardDetail, },
  BoardNew: { screen: BoardNew, },
  // DrawStack: { screen: DrawStack, },
});

const ProposeStack = createStackNavigator({
  Propose: { screen: Propose, },
  ProposeDetail: { screen: ProposeDetail, },
  // DrawStack: { screen: DrawStack, },
});

const AppStackNavigator = createStackNavigator({
  Main: { screen: Main, },
  Login: { screen: Login, },
  Register: { screen: Register, },
  // Marry: { screen: Marry, },
  MarryDetail: { screen: MarryDetail, },
  Board: { screen: Board, },
  BoardDetail: { screen: BoardDetail, },
  Propose: { screen: Propose, },
}, {
    initialRouteName: 'Login',
  });

const AppTabNavigator = createBottomTabNavigator({
  MainTab: {
    screen: MainStack,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} size={24} />
      ),
    }
  },
  MarryTab: {
    screen: MarryStack,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={24} />
      ),
    },
  },
  BoardTab: { screen: BoardStack,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} size={24} />
      ),
    },
  },
  ProposeTab: { screen: ProposeStack,
    navigationOptions: {
      tabBarOptions: {
        showLabel: false,
      },
      tabBarIcon: ({ tintColor }) => (
        <Icon name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'} size={24}/>
      ),
    },
  },
});

const SwitchNavigation = createSwitchNavigator({
  routeOne: { screen: AppStackNavigator, },
  routeTwo: { screen: AppTabNavigator },
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