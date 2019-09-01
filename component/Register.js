import React, { Component } from 'react';
import { StyleSheet, Platform, Text, KeyboardAvoidingView, ScrollView, View, Image, AsyncStorage, Keyboard, TouchableOpacity } from 'react-native';
import { Input, Button, ButtonGroup } from 'react-native-elements';
import { Icon } from 'native-base';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            password2: '',
            name: '',
            city: '',
            breed: '',
            gender: '',
            date: '',

            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
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
        headerLeft: (<Icon name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} style={{ paddingLeft: 20 }} />),
    }

    render() {
        const buttons = ['남', '여']
        const { selectedIndex } = this.state

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
                            onChangeText={(id) => this.setState({ id })}
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

                        <ButtonGroup
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                            containerStyle={{ width: '60%', height: 50 }}
                        />
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