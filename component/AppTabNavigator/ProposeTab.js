import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base';

export default class ProposeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'} size={24}/>
        ),
        tabBarOptions: {showLabel: false},
    }

    render() {
        return (
            <View style={style.container}>
                <Text>Propose</Text>
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