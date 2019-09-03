import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Alert, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class MarryTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            day: '',
            month: '',
        };
    }

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
        tabBarIcon: ({ tintColor }) => (
            <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={24} />
        ),
        tabBarOptions: { showLabel: false },
    }

    render() {
        return (
            <View style={style.container}>
                <Calendar
                    minDate={Date()} // alert(day.dateString);
                    onDayPress={(day) => { this.setState({day}) }}
                    onPressArrowLeft={substractMonth => substractMonth()}
                    onPressArrowRight={addMonth => addMonth()}
                />
            <ScrollView></ScrollView>
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