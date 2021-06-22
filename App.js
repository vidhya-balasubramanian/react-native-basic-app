import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'mobx-react';

import Login from "./src/screens/Login";
import SplashScreen from "./src/screens/SplashScreen";
import Posts from "./src/screens/Posts";


import store from './src/store';

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Posts" component={Posts} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
