import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AccountScreen from "../Screen/OtherScreen/AccountScreen";
import MyOrder from "../Screen/OtherScreen/Myorder";
import SearchScreen from "../Screen/OtherScreen/SearchScreen";
import { color } from "../Global/Styles";
import Home from "../Screen/OtherScreen/Home";

export default function HomeTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Search"
      tabBarOptions={{
        activeTintColor: "black", // Set active tab color
        inactiveTintColor: "#B2BEB5", // Set inactive tab color
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={MyOrder}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color, size }) => (
            <Icon name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
