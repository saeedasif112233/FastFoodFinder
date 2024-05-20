import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { color, header } from "../Global/Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { Avatar, Badge, withBadge } from "react-native-elements";

export default function HomeHeader({ Title, navigation }) {
  const [badgevalue, setbadgevalue] = useState("99");
  return (
    <View>
      <View style={styles.Header}>
        <View>
          <Entypo
            style={{ marginTop: 35, marginLeft: 8 }}
            name="menu"
            color={color.dgreen}
            size={30}
            onPress={() => {
              // navigation.navigate("WelcomeScreen");
              // Alert.alert("Menu Option");
              navigation.toggleDrawer();
            }}
          />
        </View>
        <View style={{}}>
          <Text style={styles.Text}>{Title}</Text>
        </View>
        <View style={{ position: "relative", marginRight: 20 }}>
          <View style={styles.Badge}>
            <Badge value={badgevalue} status="error" />
          </View>
          <View>
            <Feather
              name="shopping-cart"
              size={30}
              color={color.dgreen}
              marginTop={38}
              onPress={() => {
                navigation.navigate("WelcomeScreen");
              }}
            />
          </View>
        </View>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  Text: {
    fontSize: header.font,
    marginTop: 30,
    textAlign: "center",
    // marginLeft: 95,
    justifyContent: "center",
    color: color.dgreen,
    fontWeight: "bold",
    textAlign: "center",
  },
  Badge: {
    position: "absolute",
    top: 27,
    right: -15,
  },
  Txt: {
    backgroundColor: "lightgrey",
    // top: 200,
  },
});
