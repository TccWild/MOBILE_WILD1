import React from 'react';

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';

import fonts from '../styles/fonts';

import DrawerRoutes from './drawer.routes';
import Usuario from '../screens/Usuario';
import { DrawerActions, useNavigation } from '@react-navigation/native';


const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    const navigation = useNavigation();

    return (

        <AppTab.Navigator
        screenOptions={{
                tabBarActiveTintColor: "#EDA011",
                tabBarInactiveTintColor: 'black',
                tabBarHideOnKeyboard: false,
                tabBarLabelPosition: 'below-icon',
                headerShown:false,
                
                tabBarStyle:{
                    height: 65,
                    paddingTop: 10,
                    backgroundColor:'#d6d6d6'
                },
            }}

            >
                <AppTab.Screen
                    name="Inicio"
                    component={DrawerRoutes}

                    options={{
                        tabBarIcon: (({size, color}) => (
                            <AntDesign
                                name="home"
                                size={size}
                                color={color}
                            />
                        )),
                        
                        tabBarLabel: (({ focused, color}) => (
                            <View>
                                <Text
                                    style={ focused ? {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12,
                                        textAlign: 'center',
                                    } : {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12
                                    }}
                                >
                                    Inicio
                                </Text>
                                <View
                                    style={ focused ? {

                                        backgroundColor: color,
                                        borderColor: color,
                                        width: 45,
                                        height: 2,
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                        marginTop: 5,
                                    } : {
                                        height: 2,
                                    }}
                                >
                                </View>
                            </View>
                        ))
                    }}
                />

                <AppTab.Screen
                    name="Usuario"
                    component={Usuario}
                    options={{
                        tabBarIcon: (({ size, color}) => (
                            <MaterialIcons
                                name="earth-outline"
                                size={size} 
                                color={color} 
                            />
                        )),

                        tabBarLabel: (({ focused, color}) => (
                            <View>
                                <Text
                                    style={ focused ? {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12,
                                        textAlign: 'center',

                                    } : {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12
                                    }}
                                >
                                    Informações
                                </Text>
                                <View
                                    style={ focused ? {
                                        backgroundColor: color,
                                        borderColor: color,
                                        width: 65,
                                        height: 2,
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                        marginTop: 5,
                                    } : {
                                        height: 2,
                                    }}
                                >
                                </View>
                            </View>
                        ))
                    }}
                />

                <AppTab.Screen
                    name="Aba 3"
                    component={Usuario}
                    options={{
                        tabBarIcon: (({size, color}) => (
                            <MaterialCommunityIcons
                             name="alert-circle-outline"
                             
                                size={size}
                                color={color}
                            />
                        )),

                        tabBarLabel: (({ focused, color}) => (
                            <View>
                                <Text
                                    style={ focused ? {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12,
                                        textAlign: 'center',
                                    } : {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12
                                    }}
                                >
                                    Rastreio
                                </Text>
                                <View
                                    style={ focused ? {
                                        backgroundColor: color,
                                        borderColor: color,
                                        width: 90,
                                        height: 2,
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                        marginTop: 5,
                                    } : {
                                        height: 2,
                                    }}
                                >
                                </View>
                            </View>
                        ))
                    }}
                />

                <AppTab.Screen
                    name="Aba 4"
                    component={Usuario}

                    options={{
                        tabBarIcon: (({ size, color}) => (
                            <Ionicons
                                name="people-outline"
                                size={size} 
                                color={color} 
                            />
                        )),

                        tabBarLabel: (({ focused, color}) => (
                            <View>
                                <Text
                                    style={ focused ? {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12,
                                        textAlign: 'center',

                                    } : {
                                        color: color,
                                        fontFamily: fonts.text,
                                        fontSize: 12
                                    }}
                                >
                                    Denuncie
                                </Text>
                                <View
                                    style={ focused ? {
                                        backgroundColor: color,
                                        borderColor: color,
                                        width: 60,
                                        height: 2,
                                        borderTopLeftRadius: 5,
                                        borderTopRightRadius: 5,
                                        marginTop: 5,
                                    } : {
                                        height: 2,
                                    }}
                                >
                                </View>
                            </View>
                        ))
                    }}
                />
        </AppTab.Navigator>
    )
}

export default AuthRoutes;