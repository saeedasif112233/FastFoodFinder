import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { color } from "../Global/Styles";
import ProductCard from "./ProductCard";

const RestaurantResultCard = ({
  OnPressRestaurantCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  productData,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={OnPressRestaurantCard}>
        <View style={styles.view1}>
          <View style={{ height: 150, marginBottom: 10 }}>
            <ImageBackground
              style={{ height: 160 }}
              source={images}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.image}>
                <Text style={styles.text1}>{averageReview}</Text>
                <Text style={styles.text2}> {numberOfReview} reviews</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.view3}>
            <View style={{ paddingTop: 5 }}>
              <Text style={styles.text5}>{restaurantName}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.view4}>
                <Icon
                  name="place"
                  type="material"
                  color={color.CardComment}
                  size={18}
                  iconStyle={{ marginTop: 3, marginLeft: -3 }}
                />
                <Text style={styles.view5}>{farAway} Min</Text>
              </View>
              <View style={{ flex: 9 }}>
                <Text style={styles.text6}>{businessAddress}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 5, paddingBottom: 20 }}>
        <FlatList
          style={{ backgroundColor: color.cardbackground }}
          data={productData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ProductCard
              image={item.image}
              productName={item.name}
              price={item.price}
            />
          )}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default RestaurantResultCard;

const styles = StyleSheet.create({
  view1: {
    marginHorizontal: 9,
    marginTop: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  image: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(52, 52, 52,0.4)",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  imageStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
  },
  text2: {
    color: "white",
    fontSize: 13,
    marginRight: 0,
    marginLeft: 0,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -5,
  },
  text3: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
  },
  text4: {
    fontSize: 10,
    fontWeight: "bold",
    color: "grey",
  },
  view3: {
    flexDirection: "column",
    marginHorizontal: 5,
    marginBottom: 10,
    marginLeft: 0,
  },
  text5: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
  },
  view5: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 12,
    color: "grey",
  },
  text6: {
    fontSize: 12,
    marginTop: 1,
    marginLeft: 10,
    paddingLeft: 8,
    marginLeft: 8,
    color: "grey",
    borderLeftColor: "lightgrey",
    borderLeftWidth: 2,
  },
});
