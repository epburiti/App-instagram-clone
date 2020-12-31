import React from 'react';
import Routes from "./routes";
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from "react-native";
const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5"/>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </>
  );
}

export default App;