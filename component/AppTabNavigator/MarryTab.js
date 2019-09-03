import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Alert, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class MarryTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateSelected: '',
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
                <ScrollView>
                    <Calendar
                        minDate={Date()}
                        onDayPress={(day) => {
                            this.setState({
                                dateSelected: { [day.dateString]: { selected: true, selectedColor: '#466A8F' } }
                            }, () => {
                                console.log(this.state.dateSelected)
                            })
                        }}
                        onPressArrowLeft={substractMonth => substractMonth()}
                        onPressArrowRight={addMonth => addMonth()}
                        markedDates={this.state.dateSelected}
                    />

                    <Text>asdfasfsdfasdfdsfasadf</Text>
                    <ScrollView
                        horizontal={true}>
                        <Text>asfsfsdffff22</Text>
                        <View style={{backgroundColor:'yellow',width: 50, height: 50}}></View>
                        <View style={{backgroundColor:'pink',width: 50, height: 50}}></View>
                        <View style={{backgroundColor:'yellow',width: 50, height: 50}}></View>
                        <View style={{backgroundColor:'blue',width: 50, height: 50}}></View>
                        <View style={{backgroundColor:'yellow',width: 50, height: 50}}></View>
                        <View style={{backgroundColor:'red',width: 50, height: 50}}></View>
                    </ScrollView>
                    <Text>asdfasfsdfasdfdsfasadf</Text>
                    <ScrollView
                        horizontal={true}>
                        <Text>asfsfsdffff22</Text>
                        <View style={{backgroundColor:'yellow',width: 50, height: 50}}></View>
                        <View style={{backgroundColor:'pink',width: 50, height: 50}}></View>
                        <View style={{backgroundColor:'yellow',width: 50, height: 50}}></View>
                        <View style={{backgroundColor:'blue',width: 50, height: 50}}></View>
                        <View style={{backgroundColor:'yellow',width: 50, height: 50}}></View>
                        <View style={{backgroundColor:'red',width: 50, height: 50}}></View>
                    </ScrollView>
                </ScrollView>
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