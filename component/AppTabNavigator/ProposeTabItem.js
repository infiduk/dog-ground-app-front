import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ProposeTabItem extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: '#fff', alignItems: 'stretch' }}>
                <View style={styles.container}>
                    <View style={styles.inContainer}>
                        <Text style={[styles.textTitle, {flex: 1, fontSize: 20, marginTop: 10, paddingLeft: 15, paddingRight: 15, }]}>{this.props.name || 'Title'}</Text>
                        <Text style={[styles.text, {flex: 0.8, paddingLeft: 25, paddingRight: 25, }]}>{'rdn: ' + (this.props.rdn || 0)}</Text>                       
                    </View>
                </View>
                <View style={{height: 1, marginTop: 8, backgroundColor: '#e1e1e1'}}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'space-around',
    },
    inContainer: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
    text: {
        paddingRight: 5,
        color: '#615050'
    },
    textRank: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#615050'
    }
});