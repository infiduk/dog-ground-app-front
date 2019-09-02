import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import HomeTab from './AppTabNavigator/HomeTab';
import MarryTab from './AppTabNavigator/MarryTab';
import BoardTab from './AppTabNavigator/BoardTab';
import ProposeTab from './AppTabNavigator/ProposeTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: { screen: HomeTab },
    MarryTab: { screen: MarryTab },
    BoardTab: { screen: BoardTab },
    ProposeTab: { screen: ProposeTab },
    ProfileTab: { screen: ProfileTab },
});

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class TabBar extends Component {
    render() {
        return (
            <AppTabContainer />
        );
    }
}