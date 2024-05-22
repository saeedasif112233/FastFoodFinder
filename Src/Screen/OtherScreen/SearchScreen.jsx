import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import Search from "../../Component/Searchcomponent";
import { color } from "../../Global/Styles";

import { data1, data } from "../../Global/Data";
const Screen_Width = Dimensions.get("window").width;

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Search />

      <View style={{ marginTop: 110 }}>
        <FlatList
          horizontal={false}
          showsVerticalScrollIndicator={false}
          data={data1}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => {}}>
              <View
                style={{
                  // marginTop: 10,
                  justifyContent: "space-evenly",
                  alignContent: "center",
                }}
              >
                <Image
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 20,
                    // marginLeft: 10,
                    margin: 7,
                    marginLeft: 15,
                  }}
                  source={item.image}
                />
                <Text style={{ textAlign: "center" }}>{item.name}</Text>
              </View>
            </Pressable>
          )}
          numColumns={2}
          ListHeaderComponent={
            <Text
              style={{
                marginLeft: 20,
                marginTop: 10,
                marginBottom: 10,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Catagories
            </Text>
          }
          ListFooterComponent={<Footer />}
        />
      </View>
    </View>
  );
}
const Footer = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => {}}>
            <View
              style={{
                // marginTop: 10,
                justifyContent: "space-evenly",
                alignContent: "center",
              }}
            >
              <Image
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 20,
                  // marginLeft: 10,
                  margin: 7,
                  marginLeft: 15,
                }}
                source={item.image}
              />
              <Text style={{ textAlign: "center" }}>{item.name}</Text>
            </View>
          </Pressable>
        )}
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            More Catagories
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   backgroundColor: "#fff",
    // marginTop: -25,
  },
  imageBackground: {
    width: "100%",
    height: 200,
  },
});
