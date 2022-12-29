import { View, Text, Image } from 'react-native'
import React from 'react'

import { HOME_ICON, SEARCH_ICON, WALLET_ICON, PROFILE_ICON} from '../constants/constants'

import Home from './screens/Home'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from './screens/Search';
import Auction from './screens/Auction';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
        backgroundColor: "#111"
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tapBarOptions={tabOptions}
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
                }
            })}
        >

            <Tab.Screen
                name='Home'
                component={Home}
            />

            <Tab.Screen
                name='Search'
                component={Search}
            />

            <Tab.Screen
                name='Auction'
                component={Auction}
            />

            <Tab.Screen
                name='Profile'
                component={Profile}
            />

        </Tab.Navigator>
    )
}

export default Tabs