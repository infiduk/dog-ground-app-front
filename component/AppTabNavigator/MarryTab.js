import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { Input, Button } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class MarryTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateSelected: '',
            hall_name: '',
            hall_cost: '',
            dress_name: '',
            dress_cost: '',
            makeup_name: '',
            makeup_cost: '',
            studio_name: '',
            studio_cost: '',
        };
    }

    saveHall = async () => {


        const { hall_name, hall_cost } = this.state;

        let Hall = {
            hall_name: hall_name,
            hall_cost: hall_cost,
        }

        AsyncStorage.setItem('Hall', JSON.stringify(Hall));
        Keyboard.dismiss();
        alert('1: ' + email + '2: ' + password);
        console.log
    }

    saveDress = async () => {
        const { email, password } = this.state;

        let Details = {
            email: email,
            password: password
        }

        AsyncStorage.setItem('Details', JSON.stringify(Details));
        Keyboard.dismiss();
        alert('1: ' + email + '2: ' + password);

        // this.props.navigation.dispatch(resetAction);
        this.props.navigation.navigate('routeTwo');
    }

    saveMakeup = async () => {
        const { email, password } = this.state;

        let Details = {
            email: email,
            password: password
        }

        AsyncStorage.setItem('Details', JSON.stringify(Details));
        Keyboard.dismiss();
        alert('1: ' + email + '2: ' + password);

        // this.props.navigation.dispatch(resetAction);
        this.props.navigation.navigate('routeTwo');
    }

    saveStudio = async () => {
        const { email, password } = this.state;

        let Details = {
            email: email,
            password: password
        }

        AsyncStorage.setItem('Details', JSON.stringify(Details));
        Keyboard.dismiss();
        alert('1: ' + email + '2: ' + password);

        // this.props.navigation.dispatch(resetAction);
        this.props.navigation.navigate('routeTwo');
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
    }

    render() {
        return (
            <View style={style.container}>
                <ScrollView>
                    <Calendar
                        style={{marginLeft: 20, marginRight: 20}}
                        minDate={Date()}
                        onDayPress={(day) => {
                            this.setState({
                                dateSelected: { [day.dateString]: { selected: true, selectedColor: '#466A8F' } }
                            })
                        }}
                        onPressArrowLeft={substractMonth => substractMonth()}
                        onPressArrowRight={addMonth => addMonth()}
                        markedDates={this.state.dateSelected}
                    />

                    <Text style={{fontSize: 22, marginTop: 20, paddingLeft: 25}}>장소 선택</Text>
                    <ScrollView
                        horizontal={true}
                        style={{marginBottom: 5}}>
                        <TouchableOpacity onPress={() => this.saveHall}>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 10, borderRadius: 20}} source={require('../../assets/marry_place_1.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, borderRadius: 20}} source={require('../../assets/marry_place_2.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 20, borderRadius: 20}} source={require('../../assets/marry_place_3.jpg')}></Image>
                        </TouchableOpacity>
                    </ScrollView>
                    <Text style={{fontSize: 22, marginTop: 20, paddingLeft: 25}}>예복 선택</Text>
                    <ScrollView
                        horizontal={true}
                        style={{marginBottom: 5}}>
                        <TouchableOpacity>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 10, borderRadius: 20}} source={require('../../assets/marry_place_1.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, borderRadius: 20}} source={require('../../assets/marry_place_2.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 20, borderRadius: 20}} source={require('../../assets/marry_place_3.jpg')}></Image>
                        </TouchableOpacity>
                    </ScrollView>
                    <Text style={{fontSize: 22, marginTop: 20, paddingLeft: 25}}>메이크업 선택</Text>
                    <ScrollView
                        horizontal={true}
                        style={{marginBottom: 5}}>
                        <TouchableOpacity>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 10, borderRadius: 20}} source={require('../../assets/marry_place_1.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, borderRadius: 20}} source={require('../../assets/marry_place_2.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 20, borderRadius: 20}} source={require('../../assets/marry_place_3.jpg')}></Image>
                        </TouchableOpacity>
                    </ScrollView>
                    <Text style={{fontSize: 22, marginTop: 20, paddingLeft: 25}}>스튜디오 선택</Text>
                    <ScrollView
                        horizontal={true}
                        style={{marginBottom: 5}}>
                        <TouchableOpacity>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 10, borderRadius: 20}} source={require('../../assets/marry_place_1.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, borderRadius: 20}} source={require('../../assets/marry_place_2.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width: 155, height: 185, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 20, borderRadius: 20}} source={require('../../assets/marry_place_3.jpg')}></Image>
                        </TouchableOpacity>
                    </ScrollView>
                    <TouchableOpacity>
                        <Button containerStyle={{
                            marginTop: 30,
                            marginBottom: 20,
                            alignItems: 'stretch',
                            paddingLeft: 30,
                            paddingRight: 30,
                        }} title='로그인' type='solid' size={10} />
                    </TouchableOpacity>
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