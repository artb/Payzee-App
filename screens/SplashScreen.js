import React from 'react';
import { Image, StyleSheet, View, AsyncStorage } from 'react-native';



export default class SplashScreen extends React.Component{
    static navigationOptions = {
        header: null,
        headerMode: 'none',
    };

    constructor(props){
        super(props);
        this.state = {
            navigation: props.navigation,
            jsonUser: props.navigation.getParam('jsonUser', 'default'),
        }
        global.IdUser = this.state.jsonUser._id;
        global.NameUser = this.state.jsonUser.name;
        global.UriUser = '';
    }

    componentDidMount() {
        AsyncStorage.setItem('@Info:' + this.state.jsonUser._id, JSON.stringify(this.state.jsonUser)).then(() => {
            console.log('>[SALVANDO JSON USER]')
        }).catch(() => {
            console.log('There was an error saving the product')
        })
        // console.log(global.IdUser);
        // global.user_id = this.state.jsonUser._id;
        // global.user_name = this.state.jsonUser.name;
        AsyncStorage.getItem('@Imagens:' + this.state.jsonUser._id).then(response => {
            if (response !== null) {
                // console.log(response);
                global.UriUser = response;
                this.state.navigation.navigate('MainTabNavigator', {uri: response});
            } else {
                this.state.navigation.navigate('CameraScreen');
            }
        });
    }



    render = () => (
        <View style={styles.container}>
            <Image
                source={require('../src/images/logofuleira.png')}
            />
        </View>
    ); 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
})