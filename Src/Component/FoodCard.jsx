import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import { color } from "../Global/Styles";
import { color, header } from "../Global/Styles";

export default function FoodCard({
  onPressFoodcard,
  RestName,
  faraway,
  BussinessAddress,
  image,
  AvrgReview,
  NoOfReview,
  screenWidth,
}) {
  return (
    <View>
      <TouchableOpacity onPress={onPressFoodcard}>
        <View
          style={{ ...styles.container, width: screenWidth, marginLeft: -2 }}
        >
          <Image
            style={{ ...styles.image, width: screenWidth }}
            source={image}
          />
          <View>
            <Text style={styles.restName}>{RestName}</Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.dist}>
                <Icon
                  name="location-sharp"
                  color={color.dgreen}
                  size={18}
                  marginTop={5}
                />
              </View>
              <Text style={styles.Min}>{faraway} Min</Text>

              <View style={{ flex: 3, flexDirection: "row" }}>
                <Text style={styles.Address}>{BussinessAddress}</Text>
              </View>
            </View>
          </View>
          <View style={styles.Review}>
            <Text style={styles.Avg}>{AvrgReview}</Text>
            <Text style={{ color: "white" }}>{NoOfReview} Reviews</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 9,
    marginVertical: 2,
    paddingBottom: 10,
    marginBottom: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    marginBottom: 10,
  },
  image: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: 150,
  },
  restName: {
    fontSize: 17,
    fontWeight: "bold",
    color: color.dgreen,
    marginTop: 5,
    marginLeft: 5,
  },

  Min: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
    color: "black",
    borderRightWidth: 1,
    paddingRight: 10,
  },
  Address: {
    fontSize: 12,
    paddingTop: 4,
    color: "black",
    paddingHorizontal: 5,
    fontWeight: "bold",
    flex: 4,
    flexDirection: "row",
    marginLeft: 7,
    // paddingHorizontal: 10,
    // borderLeftWidth: 1,
  },
  Review: {
    position: "absolute",
    top: 0,
    right: 8,
    padding: 2,
    alignItems: "center",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  Avg: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
  },
});
