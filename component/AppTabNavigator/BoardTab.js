import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base';

export default class BoardTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} size={24}/>
        ),
        tabBarOptions: {showLabel: false},
    }

    render() {
        return (
            <View style={style.container}>
                <Text>Board</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});