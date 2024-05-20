import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import { color, header } from "../../Global/Styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";
import { StatusBar } from "expo-status-bar";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.Text}>Discover Restaurants </Text>
        <Text style={styles.Text}>In your Area</Text>
      </View>
      <View style={{ flex: 2, justifyContent: "center", marginTop: -70 }}>
        <Swiper autoplay={true} paginationStyle={styles.pagination}>
          <View style={styles.slide1}>
            <Image
              source={require("../../../assets/3.jpg")}
              style={{ width: 360, height: 300 }}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={require("../../../assets/6.jpg")}
              style={{ width: 360, height: 300 }}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={require("../../../assets/2.jpg")}
              style={{ width: 360, height: 300 }}
            />
          </View>

          <View style={styles.slide1}>
            <Image
              source={require("../../../assets/4.jpg")}
              style={{ width: 360, height: 300 }}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={require("../../../assets/1.jpg")}
              style={{ width: 360, height: 300 }}
            />
          </View>

          <View style={styles.slide1}>
            <Image
              source={require("G../../../assets/5.jpg")}
              style={{ width: 360, height: 300 }}
            />
          </View>
        </Swiper>
      </View>

      <View style={{ marginBottom: -20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SigninScreen");
          }}
          style={{
            backgroundColor: color.lYellow,
            top: -80,
            // alignItems: "flex-end",
            color: color.dgreen,
            padding: 10,
            width: 150,
            borderRadius: 10,
            borderColor: color.dgreen,
            borderWidth: 1,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: color.dgreen,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Sign-In
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: -40, alignItems: "flex-end" }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Alert.alert("Create an Account is Pressed");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: color.dgreen,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Create An Account
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 60,
  },
  Text: {
    fontSize: 26,
    color: color.dgreen,
    fontWeight: "bold",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  pagination: {
    bottom: 185,
  },
  btn: {
    height: 50,
    top: -85,
    padding: 10,
    width: 250,
    borderRadius: 10,
    borderColor: color.dgreen,
    borderWidth: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
