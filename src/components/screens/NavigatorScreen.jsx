import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Welcome from "./Welcome";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const Stack = createNativeStackNavigator();

const NavigatorScreen = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
                    name="Welcome" 
                    component={Welcome}
                    options={{ headerShown: false, animation: "slide_from_right" }}>
                </Stack.Screen>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false, animation: "slide_from_right" }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false, animation: "slide_from_right" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigatorScreen