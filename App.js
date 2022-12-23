import React from "react";
import { View, Text, Pressable } from "react-native";
import NavigatorScreen from "./src/screens/NavigatorScreen";
import {useFonts} from 'expo-font';


import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});


const App = () => {

  const [loadedFonts] = useFonts({
    LatoBold: require('./assets/fonts/LatoBold.ttf'),
    LatoRegular: require('./assets/fonts/LatoRegular.ttf'),
    UnboundedRegular: require('./assets/fonts/UnboundedRegular.ttf'),
    UnboundedMedium: require('./assets/fonts/UnboundedMedium.ttf'),
  });


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