import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Alert } from 'react-native';
import { Icon } from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class MarryTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            day: '',
        };
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={24} />
        ),
        tabBarOptions: { showLabel: false },
    }

    render() {
        return (
            <View style={style.container}>
                <Calendar
                    onDayPress={(day) => { alert(this.props.day) }}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    }
});