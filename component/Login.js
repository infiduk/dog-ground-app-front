import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Image, AsyncStorage, Keyboard, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Icon } from 'native-base';

import MainImage from '../assets/image.jpg';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
        }
    }

    saveData =async()=>{
        const {id,password} = this.state;
 
        //save data with asyncstorage
        let loginDetails={
            id: id,
            password: password
        }
 
        if(this.props.type !== 'Login')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
 
            Keyboard.dismiss();
            alert("You successfully registered. id: " + id + ' password: ' + password);
            this.login();
        }
        else if(this.props.type == 'Login')
        {
            try{
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);
 
                if (ld.email != null && ld.password != null)
                {
                    if (ld.email == email && ld.password == password)
                    {
                        alert('Go in!');
                    }
                    else
                    {
                        alert('Email and Password does not exist!');
                    }
                }
 
            }catch(error)
            {
                alert(error);
            }
        }
    }
 
    showData = async()=>{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
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
        }
    }

    render() {
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
                    onChangeText={(id) => this.setState({id})}
                    onSubmitEditing= {() => this.password.focus()}
                    placeholder= '아이디' />
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
                        onChangeText={(password) => this.setState({password})}
                        ref={(input) => this.password = input}
                        placeholder='비밀번호' secureTextEntry={true} />
                </View>
                <TouchableOpacity style={styles.login}>
                    {/* 버튼 크기 조절 */}
                    <Button containerStyle={{
                        margin: 10,
                        alignItems: 'center',
                    }}
                    onPress={this.saveData}
                    title='로그인' type='solid' size={10} />
                    <Button containerStyle={{
                        margin: 10,
                        alignItems: 'center',
                    }}
                    onPress={this.saveData}
                    title='회원가입' type='solid' size={10} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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