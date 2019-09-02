import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import Carousel from 'react-native-banner-carousel';

import Banner_1 from '../../assets/banner1.jpg';
import Banner_2 from '../../assets/banner2.jpg';
import Banner_3 from '../../assets/banner3.jpg';

const BannerWidth = Dimensions.get('window').width;

const images = [ Banner_1, Banner_2, Banner_3 ];

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} size={24} />
        ),
        tabBarOptions: { showLabel: false },
    }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{width: BannerWidth, height: 260}} source={{uri: image}} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}>
                    {/* 에러남 흑 흑 배너배너
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        index={0}
                        pageSize={BannerWidth}
                    >
                        {images.map((image, index) => this.renderPage(image, index))}
                    </Carousel> */}
                </View>
                <View style={styles.notice}>
                    <Text style={{padding: 2, backgroundColor: '#e1e1e1', }}>공지사항말머리 결혼까지 단 10일!</Text>
                </View>
                <View style={styles.marry}>
                    <Text>ㅇ</Text>
                </View>           
                <View style={{flex: 1, flexDirection: 'row',}}>
                    <View style={styles.board}>
                        <Text>ㅁ</Text>
                    </View>
                    <View style={styles.propose}>
                        <Text>ㄹ</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    banner: {
        flex: 1.2,
        backgroundColor: '#fff',
    },
    notice: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
        flex: 1.2,
        flexDirection: 'row',
    },
    marry: {
        flex: 1,
        backgroundColor: 'blue'
    },
    board: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    propose: {
        flex: 1,
        backgroundColor: 'pink'
    }
});

{/* 동그라미 네모 겹치게 하는거 이거로 수정하기 ..
<View style={style.container}>
    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'flex-end', margin: 10 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, flexDirection: 'column', height: 100, width: 100 }}></View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', alignSelf: 'flex-end', margin: 10 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, flexDirection: 'column', height: 100, width: 100 }}></View>
            </View>
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'flex-start', margin: 10 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, flexDirection: 'column', height: 100, width: 100 }}></View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', alignSelf: 'flex-start', margin: 10 }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, flexDirection: 'column', height: 100, width: 100 }}></View>
            </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', position: 'absolute' }}>
            <View style={{
                backgroundColor: 'blue',
                borderRadius: 10, height: 100, width: 100, borderRadius: 100 / 2
            }}></View>
        </View>
    </View>
</View> */}