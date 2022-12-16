import React from "react";
import { View, Text, Pressable } from "react-native";


import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});


const App = () => {

  return(
    <View className="flex-1 items-center justify-center m-10">
      <Text className="text-2xl my-2">Me cago en ti</Text>
      <Pressable className="bg-blue-500 p-3 rounded-lg" onPress={() => {alert("Me cago en ti")}}>
        <Text className="text-white">Tocame</Text>
      </Pressable>
      
    </View>
  )
}

export default App