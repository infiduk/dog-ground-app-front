import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import ProposeItem from './ProposeTabItem';

export default class ProposeTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            proposeItems: [
                { no: '001', name: '패키지', rdn: '강남' },
                { no: '002', name: '12323', rdn: '서초' },
                { no: '003', name: '패키지3', rdn: '5잉6' },
                { no: '004', name: '패키지5', rdn: '한ㅁ' },
            ],
            isLoading: false,
        };
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'} size={24}/>
        ),
        tabBarOptions: {showLabel: false},
    }

    _getProposeDatas = async(limit) => {
        this.setState({
            isLoading: true,
        });

        await this.setState({
            isLoading: false,
        });
    }

    _renderItem = ({item}) => {
        const {no, name, rdn} = item;
        return (
            <TouchableOpacity
                onPress={() => {this.props.navigation.navigate('BoardDetail', {title: name})}}
            >
            <ProposeItem
                no={no}
                name={name}
                rdn={rdn}
            />
            </TouchableOpacity>
        );
    }

    componentDidMount() {
        this._getProposeDatas(10);
    }

    render() {
        return (
            <View style={style.container}>
                <FlatList
                    style={{backgroundColor: '#fff'}}
                    contentContainerStyle={this.props.contentContainer}
                    data={this.state.proposeItems}
                    keyExtractor={(item) => item.name}
                    renderItem={this._renderItem}
                    refreshing={this.state.isLoading}
                    onRefresh={this._getProposeDatas}
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
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 45,
    },
    contentContainer: {
        backgroundColor: '#fff'
    },
});