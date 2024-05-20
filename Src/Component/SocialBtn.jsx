import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { color } from "../Global/Styles";

export default function SocialBtn({ onPress, icon, title, backgroundColor }) {
  return (
    <View style={styles.btn}>
      <Icon.Button
        // style={{ borderRadius: 30 }}
        name={icon}
        onPress={onPress}
        backgroundColor={backgroundColor}
        style={styles.appButton}
      >
        <Text style={styles.Text}>{title}</Text>
      </Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    padding: 10,
    alignItems: "center",
    borderRadius: 20, // Adjust the value as needed
    overflow: "hidden",
    // marginTop: 2,
  },
  appButton: {
    width: 280,
    padding: 12,
    borderRadius: 20,
    justifyContent: "center",
  },
  Text: {
    textAlign: "center",
    color: "white",
  },
});
