import React, { useState } from "react";
import "react-native-gesture-handler";
import Home from "./screens/Home";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })
}

export default function App() {
  const [fontsLoaded,setFontLoaded]= useState(false)

  if(fontsLoaded){
    return (
      <Home/>
    );
  }else{
    return(
      <AppLoading 
    startAsync={getFonts}
    onFinish={()=>( setFontLoaded(true))}
    onError={console.warn}
    />
    )
  }
  
  
}