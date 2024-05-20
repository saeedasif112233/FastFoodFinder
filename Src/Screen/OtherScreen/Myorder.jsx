import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { color } from "../../Global/Styles";

export default function MyOrder() {
  return (
    <View style={styles.container}>
      <Text>My Order Screen</Text>
      <StatusBar backgroundColor={color.dgreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
