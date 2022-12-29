import React from "react";
import { View, Text, Pressable } from "react-native";
import NavigatorScreen from "./src/components/screens/NavigatorScreen";
import {useFonts} from 'expo-font';
import { Provider } from "react-redux";
import store from "./src/store/store";

import Tabs from "./src/components/tabs";

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
    <Provider store={store}>
      <View className='flex-1 bg-white'>
        <NavigatorScreen/>
      </View>
    </Provider>
  )
}

export default App