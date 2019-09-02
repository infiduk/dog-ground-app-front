import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';
import { Icon } from 'native-base';

import Home from './AppTabNavigator/HomeTab';

import TabBar from './TabBar';

export default class Main extends Component {
    static navigationOptions = {
        headerStyle: {
            borderBottomWidth: 0,
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
            elevation: 0,
        },
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            flexGrow: 1,
        },
        headerLeft: (<Icon name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} style={{ paddingLeft: 10 }} />),
        title: '이어줄개',
        headerRight: (<Text style={{ color: '#fff' }}> </Text>),
    }

    render() {
        return (
            <TabBar />
        );
    }
}