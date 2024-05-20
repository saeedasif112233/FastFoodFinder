import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BussinessSrc() {
  return (
    <View style={styles.container}>
      <Text>Bussiness Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
