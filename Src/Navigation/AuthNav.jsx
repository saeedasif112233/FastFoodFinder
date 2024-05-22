import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Screen/AuthScreen/SigninWelcome";
import Signin from "../Screen/AuthScreen/Signin";
import Home from "../Screen/OtherScreen/Home";
import Test from "../Screen/AuthScreen/test";
import HomeTab from "./HomeTab";
import MapScreen from "../Screen/OtherScreen/MapScreen";
import DrawerNav from "./DrawerNav";
import SearchResultTab from "./SearchRes";

const Stack = createNativeStackNavigator();

export default function AuthNav() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={DrawerNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SigninScreen"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TestScreen"
        component={DrawerNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResultTab}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Drawer"
        component={DrawerNav}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
