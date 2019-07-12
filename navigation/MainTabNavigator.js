import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainScreen from '../screens/MainScreen';
import SaldoScreen from '../screens/SaldoScreen';
import HistoricoScreen from '../screens/HistoricoScreen';

//TELAS DO SISTEMA: HOME, SALDO, HISTORICO E CONFIGURACOES

const MainStack = createStackNavigator({
  Main: MainScreen,
});

MainStack.navigationOptions = {
  header: null,
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const SaldoStack = createStackNavigator({
  Saldo: SaldoScreen,
});

SaldoStack.navigationOptions = {
  tabBarLabel: 'Saldo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-wallet' : 'md-wallet'}
    />
  ),
};

const HistoricoStack = createStackNavigator({
  Historico: HistoricoScreen,
});

HistoricoStack.navigationOptions = {
  tabBarLabel: 'Histórico',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-today'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Configurações',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  MainStack,
  SaldoStack,
  HistoricoStack,
  SettingsStack,
});