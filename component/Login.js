import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Image, AsyncStorage, Keyboard, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Input, Button } from 'react-native-elements';
import { Icon } from 'native-base';

import MainImage from '../assets/image.jpg';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    saveData = async () => {
        const { email, password } = this.state;
        // const resetAction = StackActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({routeName: 'routeTwo'})],
        // });

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
        tabBarOptions: { showLabel: false, visible: false, },
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    {/* 이미지 바꾸기 */}
                    <Image style={{ width: 200, height: 300, }} source={MainImage} />
                </View>
                <View style={styles.idPw}>
                    {/* 밑에 줄 없애는거 찾기 */}
                    <Input containerStyle={{
                        width: 300,
                        alignItems: 'center',
                        borderStyle: 'solid',
                        overflow: 'hidden',
                        marginBottom: 10,
                        borderWidth: 0.5,
                        borderRadius: 25,
                        borderTopWidth: 0.5,
                        borderBottomWidth: 0.5,
                        borderColor: '#3c7bfe',
                    }}
                        onChangeText={(email) => this.setState({ email })}
                        onSubmitEditing={() => this.password.focus()}
                        placeholder='아이디' />

                    <Input containerStyle={{
                        width: 300,
                        alignItems: 'center',
                        borderStyle: 'solid',
                        overflow: 'hidden',
                        marginTop: 10,
                        borderWidth: 0.5,
                        borderRadius: 25,
                        borderColor: '#3c7bfe',
                    }}
                        onChangeText={(password) => this.setState({ password })}
                        ref={(input) => this.password = input}
                        placeholder='비밀번호' secureTextEntry={true} />
                </View>
                <View style={styles.login}>
                    {/* 버튼 크기 조절 */}
                    <TouchableOpacity>
                        <Button containerStyle={{
                            margin: 10,
                            alignItems: 'stretch',
                            paddingLeft: 30,
                            paddingRight: 30,
                        }} onPress={this.saveData} title='로그인' type='solid' size={10} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, color: '#2d5ff4', marginTop: 2, textAlign: 'right', paddingRight: 50, }} onPress={() => { navigation.navigate('Register') }}>회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 50,
    },
    image: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    idPw: {
        flex: 0.7,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        flex: 0.8,
        backgroundColor: '#fff',
    },
});