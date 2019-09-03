import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions, DrawerActions } from 'react-navigation';
import { Icon, Drawer } from 'native-base';

import Home from './AppTabNavigator/HomeTab';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => {
        return {
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
            headerLeft: (<TouchableOpacity
                onPress={() => navigation.navigate('DrawerOpen')}>
                <Icon name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} style={{ paddingLeft: 10 }} />
            </TouchableOpacity>),
            title: '이어줄개',
            headerRight: (<Text style={{ color: '#fff' }}> </Text>),
        }
    }

    render() {
        return (
            <Home />
        );
    }
}