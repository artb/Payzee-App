import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import SplashScreen from '../screens/SplashScreen';
import QRScannerScreen from '../screens/QRScannerScreen';
import TransferenciaScreen from '../screens/TransferenciaScreen';
import CameraScreen from '../screens/CameraScreen';
import PhotoScreen from '../screens/PhotoScreen';
import CartaoScreen from '../screens/CartaoScreen';
import SaldoScreen from '../screens/SaldoScreen';


export default createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    LoginScreen: LoginScreen,
    MainTabNavigator: MainTabNavigator,
    CadastroScreen: CadastroScreen,
    SplashScreen: SplashScreen,
    QRScannerScreen: QRScannerScreen,
    TransferenciaScreen: TransferenciaScreen,
    CameraScreen: CameraScreen,
    PhotoScreen: PhotoScreen,
    CartaoScreen: CartaoScreen,
    SaldoScreen: SaldoScreen,
    
  }
  ,{
      headerMode: 'none',
    }
  )
);
