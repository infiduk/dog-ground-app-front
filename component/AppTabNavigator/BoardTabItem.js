import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class BoardTabItems extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: 'yellow', alignItems: 'stretch' }}>
                <View style={styles.container}>
                    <Image
                        style={{width: 50, height: 50, marginRight: 10}}
                        source={{uri: this.props.iconUri}}
                    />
                    <View style={styles.inContainer}>
                        <Text style={[styles.textTitle, {flex: 1, fontSize: 20, marginTop: 15}]}>{this.props.name || 'Name'}</Text>
                        <Text style={[styles.text, {flex: 0.5}]}>{'Volume: ' + (this.props.volume || 0)}</Text>
                        <Text style={[styles.text, {flex: 0.5}]}>{'Price: ' + (this.props.price || 0)}</Text>
                    </View>
                </View>
                <View style={{height: 1, marginTop: 15, marginLeft: 5, marginRight: 5, backgroundColor: '#e1e1e1'}}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
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