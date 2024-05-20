import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./AuthNav";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
