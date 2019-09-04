import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import Carousel, { Pagination } from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;

const images = [require('../../assets/banner1.jpg'), require('../../assets/banner2.jpg'), require('../../assets/banner3.jpg')];

export default class HomeTab extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
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
            headerLeft: (<Icon name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} style={{ paddingLeft: 10 }} />),
            title: '이어줄개',
            headerRight: (<Text style={{ color: '#fff' }}> </Text>),
            tabBarIcon: ({ tintColor }) => (
                <Icon name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} size={24} />
            ),
            tabBarOptions: { showLabel: false },
        }
    }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: 260 }} source={image} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}>
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        index={0}
                        pageSize={BannerWidth}
                    >
                        {images.map((image, index) => this.renderPage(image, index))}
                    </Carousel>
                </View>
                <View style={styles.notice}>
                    <Text style={{ padding: 2, backgroundColor: '#e1e1e1', marginTop: 5 }}>공지사항말머리 결혼까지 단 10일!</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                    <View style={styles.marry}>
                        <View style={{ borderWidth: 2, borderColor: '#e1e1e1', flex: 1, marginTop: 30, marginLeft: 10, marginRight: 10, marginBottom: 15, }}>
                            <Image style={{ width: 116, height: 76, marginTop: 50, alignSelf: 'center' }} source={require('../../assets/view_1.jpg')}></Image>
                        </View>
                        <View style={{ borderWidth: 2, borderColor: '#e1e1e1', backgroundColor: '#fff', height: 80, width: 80, borderRadius: 100 / 2, marginTop: 5, alignItems: 'center', alignSelf: 'center', position: 'absolute' }}>
                            <Image style={{ width: 50, height: 50, marginTop: 12, alignSelf: 'center' }} source={require('../../assets/main_1.jpg')}></Image>

                        </View>
                    </View>
                    <View style={styles.party}>
                        <View style={{ borderWidth: 2, borderColor: '#e1e1e1', flex: 1, marginTop: 30, marginLeft: 10, marginRight: 10, marginBottom: 15, }}></View>
                        <View style={{ borderWidth: 2, borderColor: '#e1e1e1', backgroundColor: '#fff', height: 80, width: 80, borderRadius: 100 / 2, marginTop: 5, alignItems: 'center', alignSelf: 'center', position: 'absolute' }}></View>
                    </View>
                </View>
                {/* <View style={styles.marry}>
                    <View style={{ borderWidth: 2, borderColor: '#e1e1e1', flex: 1, marginTop: 35, marginLeft: 10, marginRight: 10, }}>
                    <Image style={{width: 144, height: 94, marginTop: 50, alignSelf: 'center'}} source={require('../../assets/view_1.jpg')}></Image>
                    </View>
                    <View style={{ borderWidth: 2, borderColor: '#e1e1e1', backgroundColor: '#fff', height: 80, width: 80, borderRadius: 100 / 2, marginTop: 10, alignItems: 'center', alignSelf: 'center', position: 'absolute' }}>
                        <Image style={{width: 50, height: 50, marginTop: 12, alignSelf: 'center'}} source={require('../../assets/main_1.jpg')}></Image>
                    </View>
                </View> */}
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.board}>
                        <View style={{ borderWidth: 2, borderColor: '#e1e1e1', flex: 1, marginTop: 25, marginLeft: 10, marginRight: 10, marginBottom: 15, }}></View>
                        <View style={{ borderWidth: 2, borderColor: '#e1e1e1', backgroundColor: '#fff', height: 80, width: 80, borderRadius: 100 / 2, alignItems: 'center', alignSelf: 'center', position: 'absolute' }}></View>
                    </View>
                    <View style={styles.propose}>
                        <View style={{ borderWidth: 2, borderColor: '#e1e1e1', flex: 1, marginTop: 25, marginLeft: 10, marginRight: 10, marginBottom: 15, }}></View>
                        <View style={{ borderWidth: 2, borderColor: '#e1e1e1', backgroundColor: '#fff', height: 80, width: 80, borderRadius: 100 / 2, alignItems: 'center', alignSelf: 'center', position: 'absolute' }}></View>
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
        backgroundColor: '#fff'
    },
    party: {
        flex: 1,
        backgroundColor: '#fff',
    },
    board: {
        flex: 1,
        backgroundColor: '#fff'
    },
    propose: {
        flex: 1,
        backgroundColor: '#fff'
    }
});