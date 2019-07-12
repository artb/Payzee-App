import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  RkStyleSheet,
} from 'react-native-ui-kitten';

import { Avatar } from 'react-native-elements';
import { iOSUIKit } from 'react-native-typography';
import Icon from 'react-native-vector-icons/Feather';



export default class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'configurações'.toUpperCase(),
    headerStyle: {
      backgroundColor: "#b81e38"
    },
    headerTintColor: "white",
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
      <Icon name='log-out' color= 'white' size={32}/>
    </TouchableOpacity>,
  });

  state = {
    uri: global.UriUser,
  }

  render = () => (
    <View>
      <View style={[styles.header, styles.bordered]}>
        <Avatar 
          size="xlarge" 
          rounded
          // showEditButton 
          source={{ uri: this.state.uri}}
          // onPress={() => this.props.navigation.navigate('CameraScreen')}
        />
        <Text style={iOSUIKit.largeTitleEmphasized}>{global.NameUser}</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <View style={[styles.userInfo, styles.bordered]}>
        <View>
          <Text style={iOSUIKit.bodyEmphasized}>Sobre a Payzee: {"\n"}</Text>
        </View>
        <View style={styles.descricao}>
          <Text style={iOSUIKit.body}>Desenvolvido por: Arthur Bindá, Eduardo Carvalho e Matheus Balonecker.{"\n"}Payzee tem o objetivo de mostrar como o seu tempo é valioso e por isso não deve ser desperdiçado em filas.{"\n"}Valorize seu tempo, use Payzee ;)</Text>
        </View>
      </View>
    </View>
  );
}

const styles = RkStyleSheet.create(theme => ({
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17,
  },
  userInfo: {
    flexDirection: 'column',
    paddingVertical: 18,
    paddingHorizontal: 10,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border.base,
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  space: {
    marginBottom: 3,
  },
  separator: {
    backgroundColor: theme.colors.border.base,
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42,
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    flex: 1,
    alignSelf: 'center',
  },
  descricao:{
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
}));


