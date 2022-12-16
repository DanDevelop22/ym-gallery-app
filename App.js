import React from "react";
import { View, Text, Pressable } from "react-native";
import NavigatorScreen from "./src/screens/NavigatorScreen";
import {useFonts} from 'expo-font'


import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});


const App = () => {

  const [loadedFonts] = useFonts({
    DMSansBold: require('./assets/fonts/DMSans-Bold.ttf'),
    DMSansMedium: require('./assets/fonts/DMSans-Medium.ttf'),
    DMSansRegular: require('./assets/fonts/DMSans-Regular.ttf'),
  })


  if(!loadedFonts){
    return null;
  }

  return(
    <View className='flex-1 bg-white'>
      <NavigatorScreen/>
    </View>
  )
}

export default App