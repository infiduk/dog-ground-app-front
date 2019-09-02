import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import BoardItem from './BoardTabItem';

export default class BoardTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            BoardItems: [
                { no: '001', name: 'Munchkin', rdn: '19' },
                { no: '002', name: 'Jjangchkin', rdn: '43' },
                { no: '003', name: 'Munchking', rdn: '56' },
                { no: '004', name: 'Munchkitty', rdn: '11' },
            ],
            isLoading: false,
        };
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} size={24} />
        ),
        tabBarOptions: { showLabel: false },
        title: '네비게이션이요네이게이션',
    }

    _getBoardDatas = async(limit) => {
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
                onPress={() => this.props.navigation &&
                    this.props.navigation.push('BoardDetail', {title: name})}
            >
            <BoardItem
                no={no}
                name={name}
                rdn={rdn}
            />
            </TouchableOpacity>
        );
    }

    componentDidMount() {
        this._getBoardDatas(10);
        // setInterval(() => {
        //     this._getCoinDatas(1000);
        //     console.log('toggled!');
        // }, 10000000);
    }

    FlatListItemSeparator = () => {
        return (
            <View style={{ height: 1, width: '100%', backgroundColor: '#efefef' }} />
        );
    };

    GetItem = (n) => {
        Alert.alert(n);
    };

    _keyExtractor = (item) => item.no;

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{backgroundColor: '#fef0ef'}}
                    contentContainerStyle={this.props.contentContainer}
                    data={this.state.boardItems}
                    keyExtractor={(item) => item.name}
                    renderItem={this._renderItem}
                    refreshing={this.state.isLoading}
                    onRefresh={this._getBoardDatas}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 45,
    },
    contentContainer: {
        backgroundColor: '#fef0ef'
    },
});