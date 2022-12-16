import React from "react";
import { View, Text, Pressable } from "react-native";
import NavigatorScreen from "./src/screens/NavigatorScreen";


import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});


const App = () => {

  return(
    <View className='flex-1 bg-white'>
      <NavigatorScreen/>
    </View>
  )
}

export default App