import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'mobx-react';

import ConfirmationScreen from "./src/screens/ConfirmationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import PostsScreen from "./src/screens/PostsScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SplashScreen from "./src/screens/SplashScreen";

import store from './src/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="PostsScreen" component={PostsScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
