// SearchResultsScreen.js
import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import RestaurantResultCard from "../../Component/RestorantResultCard";
import { restaurantsData } from "../../Global/Data";
import { color } from "../../Global/Styles";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function SearchResultsScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{ backgroundColor: color.cardbackground }}
          data={restaurantsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <RestaurantResultCard
              screenWidth={SCREEN_WIDTH}
              images={item.images}
              averageReview={item.averageReview}
              numberOfReview={item.numberOfReview}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              businessAddress={item.businessAddress}
              productData={item.productData}
              OnPressRestaurantCard={() => {
                navigation.navigate("RestaurantHomeScreen", {
                  id: index,
                  restaurant: item.restaurantName,
                });
              }}
            />
          )}
          ListHeaderComponent={
            <View>
              <Text style={styles.listHeader}>
                {restaurantsData.length} Result for {route.params.item}
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#fff",
  },
  listHeader: {
    color: "grey",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: "bold",
  },
});
