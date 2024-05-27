import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../Screen/OtherScreen/SearchScreen";
import SearchResult from "../Screen/OtherScreen/SreachResult";
// import ClientTab from "./clienttabs";

// import Signin from "../Screen/AuthScreen/Signin";
const Stack = createNativeStackNavigator();
export default function SearchResultTab() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="ClientTab"
        component={ClientTab}
        options={{
          headerShown: false,
        }} */}
      {/* /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff',
  },
});
