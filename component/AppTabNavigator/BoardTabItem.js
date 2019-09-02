import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class CoinItem extends React.Component {
    render() {
        let date = new Date();
        let now = date.toLocaleString();

        return (
            <View style={{backgroundColor: '#fef0ef'}}>
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
                    <View style={styles.inContainer}>
                    <Text style={[styles.textRank, {flex: 1, marginTop: 30}]}>{'#' + (this.props.rank || 'Rank')}</Text>
                    </View>
                </View>
                <View style={{height: 1, marginTop: 15, marginLeft: 5, marginRight: 5, backgroundColor: '#f5ada6'}}>
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
        backgroundColor: '#fef0ef',
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