import { View, Text, Image } from 'react-native'
import React from 'react'

import { HOME_ICON, SEARCH_ICON, WALLET_ICON, PROFILE_ICON} from '../../constants/constants'

import Home from './Home'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from './Search';
import Auction from './Auction';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? "#232324" : "#a8a8a8";

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={HOME_ICON}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            )

                        case "Search":
                            return (
                                <Image
                                    source={SEARCH_ICON}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            )

                        case "Auction":
                            return (
                                <Image
                                    source={WALLET_ICON}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            )

                        case "Profile":
                            return (
                                <Image
                                    source={PROFILE_ICON}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            )
                    }
                },
                tabBarShowLabel: false,
                tabBarStyle:{backgroundColor: '#111'}
            })}
            
        >

            <Tab.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false}}
            />

            <Tab.Screen
                name='Search'
                component={Search}
                options={{ headerShown: false}}
            />

            <Tab.Screen
                name='Auction'
                component={Auction}
                options={{ headerShown: false}}
            />

            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{ headerShown: false}}
            />

        </Tab.Navigator>
    )
}

export default Tabs