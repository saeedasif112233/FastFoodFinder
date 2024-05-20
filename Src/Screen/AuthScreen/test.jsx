import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import FoodCard from "../../Component/FoodCard";
import { foodCardData } from "../../Global/Data";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { color } from "../../Global/Styles";
import HomeHeader from "../../Component/HomeHeader";

const Screen_width = Dimensions.get("window").width;

export default function Test({ navigation }) {
  return (
    <View style={styles.container}>
      <HomeHeader Title={"Screen Testing"} navigation={navigation} />
      <Text
        style={{
          textAlign: "center",
          justifyContent: "center",
          top: 300,
        }}
      >
        Hello Test Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
