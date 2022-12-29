import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from "@expo/vector-icons/Feather";

import Welcome from "./Welcome";
import Onboarding from "./Onboarding";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Auction from "./Auction";
import Profile from "./Profile";
import Search from "./Search";

import Tabs from "../tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const NavigatorScreen = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Welcome"
                screenOptions={{
                    headerShown: false
                }}>

                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false, animation: "slide_from_right" }}>
                </Stack.Screen>

                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{ headerShown: false, animation: "slide_from_right" }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false, title: null, animation: "slide_from_right" }}
                />

                <Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{ headerShown: false, animation: "slide_from_right" }}
                />

                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ headerShown: false, animation: "slide_from_right" }}
                />

                <Stack.Screen
                    name="Auction"
                    component={Auction}
                    options={{ headerShown: false, animation: "slide_from_right" }}
                />

                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{ headerShown: false, animation: "slide_from_right" }}
                />

                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerShown: false, animation: "slide_from_right" }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigatorScreen