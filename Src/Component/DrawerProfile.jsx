import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon1 from "react-native-vector-icons/Octicons";
import { Avatar, Badge, Icon, Switch } from "react-native-elements";
export default function DrawerProfile(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 34 }}
      >
        <View style={{ backgroundColor: "lightblue", marginBottom: 3 }}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              paddingTop: 6,
              paddingLeft: 10,

              paddingBottom: 10,
            }}
          >
            <Image
              style={{
                height: 75,
                width: 75,
                borderWidth: 4,
                borderColor: "white",
                borderRadius: 50,
                marginRight: 0,
                marginTop: 7,
                marginLeft: 0,
              }}
              source={require("../../assets/3.jpg")}
            />

            <View
              style={{
                flexDirection: "column",
                marginLeft: 10,
                flexWrap: "wrap",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  textAlign: "center",
                }}
              >
                Saeed Asif
              </Text>
              <Text style={{ flexWrap: "wrap" }}>saeed557508@gmail.com</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
              justifyContent: "space-around",
              marginBottom: 4,
            }}
          >
            <View>
              <Text style={styles.drawerNo}>1</Text>

              <Text style={styles.textstyles}>Favourite</Text>
            </View>
            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              <Text style={styles.drawerNo}>0</Text>

              <Text style={styles.textstyles}>My Cart</Text>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />
        <View style={{ marginLeft: 21, marginTop: 15 }}>
          <Text style={{ fontSize: 16, color: "#656565", fontWeight: "400" }}>
            Preferences
          </Text>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Text
              style={{ fontWeight: "bold", color: "#656565", fontSize: 16 }}
            >
              Dark Theme
            </Text>
            <Switch
              trackColor={{ fasle: "#767577", true: "#81boff" }}
              thumbColor="#f4f3f4"
              style={{ marginTop: -10, marginLeft: 120 }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Sign Out"
        icon={({ color, size }) => (
          <Icon1 type="Octicons" name="sign-out" size={size} color={color} />
        )}
        style={styles.drawer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 0,
  },
  Avatar: {
    borderWidth: 4,
    borderColor: "White",
    // height: 100,
  },
  drawerNo: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
  textstyles: { color: "black", fontSize: 14 },
  // drawer: {
  //   marginVertical: 70,
  // },
});
