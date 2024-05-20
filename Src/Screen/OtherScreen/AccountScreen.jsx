import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Statusbar from "../../Component/statusbar";
import { color } from "../../Global/Styles";
// import Header from "../../Component/Header";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      {/* <Header title="Account Screen" /> */}

      <View>
        <Text>Account Screen</Text>
        <Statusbar color={color.lYellow} />
      </View>
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
