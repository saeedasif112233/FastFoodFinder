import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar, Badge, Icon } from "react-native-elements";
export default function DrawerProfile(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 10,
          }}
        >
          <Avatar
            rounded
            avatarStyle={styles.Avatar}
            source={{ uri: "../../assets/2a.jpg" }}
            size={75}
          />
          <View>
            <Text>Saeed Asif</Text>
            <Text style={{ flexWrap: "wrap" }}>Saeedasif576881@gmail.com</Text>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Avatar: {
    borderWidth: 4,
    borderColor: "White",
    // height: 100,
  },
});
