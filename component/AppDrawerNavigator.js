import React from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity } from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyDonationSreen from '../screens/MyDonationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    myDonation:{
        screen:MyDonationSreen
    },
    notifications:{
        screen:NotificationScreen
    },
    Settings:{
        screen:SettingsScreen
    },
    
},
{contentComponent:CustomSideBarMenu},
{initialRouteName:'Home'

})