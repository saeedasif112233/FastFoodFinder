import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { color, header } from "../Global/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Header({ Title, navigation }) {
  return (
    <View style={styles.Header}>
      <View>
        <Ionicons
          style={{ marginTop: 35, marginLeft: 8 }}
          name="arrow-back"
          color={color.dgreen}
          size={30}
          onPress={() => {
            navigation.navigate("WelcomeScreen");
          }}
        />
      </View>
      <View>
        <Text style={styles.Text}>{Title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    height: header.height,
    backgroundColor: color.lYellow,
    alignItems: "center",
    flexDirection: "row",
  },
  Text: {
    fontSize: header.font,
    marginTop: 30,
    marginLeft: 40,
    color: color.dgreen,
    fontWeight: "bold",
  },
});
