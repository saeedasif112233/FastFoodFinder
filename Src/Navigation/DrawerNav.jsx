import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AccountScreen from "../Screen/OtherScreen/AccountScreen";
import Home from "../Screen/OtherScreen/Home";
import Payment from "../Screen/AuthScreen/Payment";
import HelpScreen from "../Screen/OtherScreen/HelpScreen";
import BussinessSrc from "../Screen/OtherScreen/BussinessScr";
import Driver from "../Screen/OtherScreen/DriverSrc";
import Setting from "../Screen/OtherScreen/SettingSrc";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import HomeTab from "./HomeTab";
import { color } from "../Global/Styles";
import Promotion from "../Screen/OtherScreen/Promotion";
import DrawerProfile from "../Component/DrawerProfile";

const Drawer = createDrawerNavigator();
export default function DrawerNav() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerProfile {...props} />}>
      <Drawer.Screen
        name="Homescreen"
        component={HomeTab}
        options={{
          title: "Client",
          headerShown: false,
          drawerIcon: ({ focused, size, color }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bussiness"
        component={BussinessSrc}
        options={{
          title: "Bussiness",
          drawerIcon: ({ focused, size, color }) => (
            <Icon1 name="business" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Setting}
        options={{
          title: "Settings",
          drawerIcon: ({ focused, size, color }) => (
            <Icon1 name="settings" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Driver"
        component={Driver}
        options={{
          title: "Driver Console",
          drawerIcon: ({ focused, size, color }) => (
            <Icon name="motorbike" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Promotions"
        component={Promotion}
        options={{
          title: "Promotions",
          drawerIcon: ({ focused, size, color }) => (
            <Icon1 name="discount" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{
          title: "Payment",
          drawerIcon: ({ focused, size, color }) => (
            <Icon1 name="payment" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: "Help",
          drawerIcon: ({ focused, size, color }) => (
            <Icon1 name="help-center" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
