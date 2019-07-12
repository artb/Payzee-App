import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    AsyncStorage,
} from 'react-native';
import {
    RkStyleSheet,
} from 'react-native-ui-kitten';

import { iOSUIKit } from 'react-native-typography';
import { Avatar } from 'react-native-elements';
import { human } from 'react-native-typography';
import { verticalScale } from 'react-native-size-matters';
import QRCode from 'react-native-qrcode';


export default class MainScreen extends Component {
    static navigationOptions = {
        header: null,
        headerMode: 'none',
    };

    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            userId: global.IdUser,
            userName: global.NameUser,
            uri: global.UriUser,
            loaded: false,
        }
        
    }

    render = () => (
        <View style={styles.screen}>
            <Image style={styles.image} source={require('../src/images/logofuleira.png')} />
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
            {console.log(this.state.uri + '3')}
            <Avatar
                size="xlarge"
                rounded
                source={{uri: this.state.uri}}
            />
            <Text style={iOSUIKit.title3Emphasized}>{this.state.userName}</Text>
            <QRCode
                value={this.state.userId}
                size={200}
                bgColor='black'
                fgColor='white' />
        </View>
    )
}

const styles = RkStyleSheet.create(theme => ({
    screen: {
        padding: 16,
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    image: {
        marginBottom: 10,
        height: verticalScale(77),
        resizeMode: 'contain',
    },
    header: {
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
    },
    content: {
        marginTop: 2,
        justifyContent: 'space-between',
    },
    save: {
        marginVertical: 20,
    },
    textRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footer: {
        justifyContent: 'flex-end',
    },
}));