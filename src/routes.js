import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Feed from "./pages/Feed/index";
import { Image } from "react-native";
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} 
         options={{
          headerTitle: () => (
            <Image source={require("./assets/instagram.png")} />
          ),
          headerTitleAlign : "center",
          headerStyle: { backgroundColor: '#f5f5f5' }
          
        }}
    />
    </Stack.Navigator>
  );
}