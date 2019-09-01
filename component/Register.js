import React, { Component } from 'react';
import { DatePickerAndroid, DatePickerIOS, StyleSheet, Platform, Text, KeyboardAvoidingView, ScrollView, View, Image, AsyncStorage, Keyboard, TouchableOpacity } from 'react-native';
import { Input, Button, ButtonGroup } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
// import DatePicker from 'react-native-date-picker';
import { Icon } from 'native-base';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            name: '',
            city: '',
            breed: '',
            gender: '',
            date: '',
        }
        this.updateGender = this.updateGender.bind(this)
    }

    saveData = async () => {
        const { email, password, password2, name, city, breed, gender, date } = this.state;

        let Details = {
            email: email,
            password: password,
            password2: password2,
            name: name,
            city: city,
            breed: breed,
            gender: gender,
            date: date,
        }

        if (password != password2) {
            alert('비밀번호 확인점');
        } else {
            AsyncStorage.setItem('Details', JSON.stringify(Details));
            Keyboard.dismiss();
            alert('1: ' + email + '2: ' + password + '3: ' + name + '4: ' + city + '5: ' + breed + '6: ' + gender + '7: ' + date);

            // this.props.navigation.goBack();
        }
    }

    updateGender(gender) {
        this.setState({ gender })
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
        title: '회원가입',
    }

    render() {
        const buttons = ['남', '여']
        const { gender } = this.state
        const { navigation } = this.props;

        return (
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={100}>
                <ScrollView contentContainerStyle={{
                    flexGrow: 1,
                    flexDirection: 'column',
                }}>
                    <View style={styles.text}>
                        {/* 이미지로 바꾸기 */}
                        <Text> 이어줄개 회원가입 하세요~</Text>
                    </View>
                    <View style={styles.form}>
                        <Input containerStyle={{
                            width: 300,
                            alignItems: 'center',
                            borderStyle: 'solid',
                            overflow: 'hidden',
                            marginBottom: 25,
                            borderWidth: 0.5,
                            borderRadius: 25,
                            borderTopWidth: 0.5,
                            borderBottomWidth: 0.5,
                            borderColor: '#3c7bfe',
                        }}
                            underlineColorAndroid='transparent'
                            onChangeText={(email) => this.setState({ email })}
                            onSubmitEditing={() => this.password.focus()}
                            placeholder='아이디' />

                        {/* 안내문구 */}
                        <Input containerStyle={{
                            width: 300,
                            alignItems: 'center',
                            borderStyle: 'solid',
                            overflow: 'hidden',
                            marginBottom: 25,
                            borderWidth: 0.5,
                            borderRadius: 25,
                            borderColor: '#3c7bfe',
                        }}
                            onChangeText={(password) => this.setState({ password })}
                            onSubmitEditing={() => this.password2.focus()}
                            ref={(input) => this.password = input}
                            placeholder='비밀번호' secureTextEntry={true} />

                        <Input containerStyle={{
                            width: 300,
                            alignItems: 'center',
                            borderStyle: 'solid',
                            overflow: 'hidden',
                            marginBottom: 25,
                            borderWidth: 0.5,
                            borderRadius: 25,
                            borderColor: '#3c7bfe',
                        }}
                            onChangeText={(password2) => this.setState({ password2 })}
                            onSubmitEditing={() => this.name.focus()}
                            ref={(input) => this.password2 = input}
                            placeholder='비밀번호확인' secureTextEntry={true} />

                        <Input containerStyle={{
                            width: 300,
                            alignItems: 'center',
                            borderStyle: 'solid',
                            overflow: 'hidden',
                            marginBottom: 25,
                            borderWidth: 0.5,
                            borderRadius: 25,
                            borderTopWidth: 0.5,
                            borderBottomWidth: 0.5,
                            borderColor: '#3c7bfe',
                        }}
                            onChangeText={(name) => this.setState({ name })}
                            onSubmitEditing={() => this.city.focus()}
                            ref={(input) => this.name = input}
                            placeholder='이름' />

                        {/* 검색.... */}
                        <Input containerStyle={{
                            width: 300,
                            alignItems: 'center',
                            borderStyle: 'solid',
                            overflow: 'hidden',
                            marginBottom: 25,
                            borderWidth: 0.5,
                            borderRadius: 25,
                            borderTopWidth: 0.5,
                            borderBottomWidth: 0.5,
                            borderColor: '#3c7bfe',
                        }}
                            onChangeText={(city) => this.setState({ city })}
                            onSubmitEditing={() => this.breed.focus()}
                            ref={(input) => this.city = input}
                            placeholder='지역' />

                        <Input containerStyle={{
                            width: 300,
                            alignItems: 'center',
                            borderStyle: 'solid',
                            overflow: 'hidden',
                            marginBottom: 25,
                            borderWidth: 0.5,
                            borderRadius: 25,
                            borderTopWidth: 0.5,
                            borderBottomWidth: 0.5,
                            borderColor: '#3c7bfe',
                        }}
                            onChangeText={(breed) => this.setState({ breed })}
                            //onSubmitEditing= {() => this.gender.focus()}
                            ref={(input) => this.breed = input}
                            placeholder='견종' />

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, marginRight: 10, alignSelf: 'center' }}>성별</Text>
                            <ButtonGroup
                                onPress={this.updateGender}
                                selectedIndex={gender}
                                buttons={buttons}
                                containerStyle={{ width: '60%', height: 50, marginBottom: 25 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, marginRight: 50 }}>생년월일</Text>
                            <DatePicker
                                customStyles={{ marginBottom: 25 }}
                                placeholder='생년월일을 선택'
                                date={this.state.date}
                                onDateChange={date => this.setState({ date })}
                                format='YYYY-MM-DD'
                                mode='date'
                                confirmBtnText='확인'
                                cancelBtnText='취소'
                            />
                        </View>
                        <TouchableOpacity>
                            {/* 버튼 크기 조절 */}
                            <Button containerStyle={{
                                margin: 10,
                                alignItems: 'center',
                            }}
                                onPress={this.saveData}
                                title='확인' type='solid' size={10} />

                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexGrow: 1,
        flexDirection: 'column',
    },
    text: {
        flex: 0.2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});;