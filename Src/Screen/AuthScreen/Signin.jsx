import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Header from "../../Component/Header";
import { color, header } from "../../Global/Styles";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SocialBtn from "../../Component/SocialBtn";

export default function Signin({ navigation }) {
  const [textinput2Focused, settextinput2Focused] = useState(false);
  const textinput1 = useRef(1);
  const textinput2 = useRef(2);
  return (
    <View style={styles.container}>
      <View>
        <Header Title={"My Account"} navigation={navigation} />
      </View>
      <View>
        <Text
          style={{
            color: color.dgreen,
            fontSize: header.font,
            fontWeight: "bold",
            marginLeft: 12,
            marginTop: 7,
          }}
        >
          Sign-in
        </Text>
      </View>
      <View style={{ marginTop: 19, marginBottom: 40 }}>
        <Text style={styles.Text}>Enter Your Email and Passward</Text>
        <Text style={styles.Text}>Registered with your Account</Text>
      </View>
      <View>
        <View>
          <TextInput
            style={styles.TxtInput1}
            placeholder="Enter your Email "
            ref={textinput1}
          />
        </View>
        <View style={styles.TxtInput2}>
          <Animatable.View
            animation={textinput2Focused ? "" : "fadeInLeft"}
            duration={300}
          >
            <Icon
              name="lock"
              size={color.iconSize}
              color={color.icon}
              marginTop={color.iconmargin}
            />
          </Animatable.View>
          <TextInput
            placeholder="Passward "
            style={{ width: "78%" }}
            ref={textinput2}
            onFocus={() => {
              settextinput2Focused(false);
            }}
            onBlur={() => {
              settextinput2Focused(true);
            }}
          />
          <Animatable.View
            animation={textinput2Focused ? "" : "fadeInLeft"}
            duration={300}
          >
            <FontAwesome
              name="eye"
              size={color.iconSize}
              color={color.icon}
              marginTop={color.iconmargin}
            />
          </Animatable.View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <Text style={{ color: color.dgreen, fontWeight: "bold" }}>Sign-in</Text>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            marginTop: 20,
            // marginLeft: 115,
            textDecorationLine: "underline",
            color: color.dgreen,
            textAlign: "center",
          }}
          onPress={() => {
            Alert.alert("Reset Passward");
          }}
        >
          Forgot Passward ?
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 15,
            fontSize: 17,
          }}
        >
          OR
        </Text>
      </View>
      <View>
        <SocialBtn
          icon="facebook"
          title={"Sign In with Facebook"}
          backgroundColor={color.bluefacebook}
          onPress={() => {
            Alert.alert("Facebook Login");
          }}
        />
      </View>
      <View>
        <SocialBtn
          icon="google"
          title={"Sign In with Google"}
          backgroundColor={color.redgoogle}
          onPress={() => {
            Alert.alert("Google Login");
          }}
        />
      </View>
      <View>
        <Text
          style={{ marginTop: 15, marginLeft: 20 }}
          onPress={() => {
            Alert.alert("Create a New Account");
          }}
        >
          New to App ?
        </Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            marginRight: 15,
            borderColor: color.dgreen,
            borderWidth: 1,
            width: 165,
            padding: 11,
            borderRadius: 12,
            height: 45,
            justifyContent: "center",
            // backgroundColor: color.lYellow,
          }}
          onPress={() => {
            Alert.alert("Create an New Account");
          }}
        >
          <Text
            style={{
              color: color.dgreen,
              fontWeight: "bold",
            }}
          >
            Create an Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text: {
    color: color.dgreen,
    textAlign: "center",
  },
  TxtInput1: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgrey",
    marginBottom: 12,
    marginHorizontal: 20,
    padding: 10,
    height: 50,
    marginBottom: 20,
  },
  TxtInput2: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgrey",
    marginBottom: 12,
    marginHorizontal: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: color.lYellow,
    width: 150,
    alignItems: "center",
    marginLeft: 105,
    padding: 8,
    borderRadius: 10,
    marginTop: 17,
    justifyContent: "center",
    height: 45,
    borderColor: color.dgreen,
    borderWidth: 2,
    textAlign: "center",
  },
});
