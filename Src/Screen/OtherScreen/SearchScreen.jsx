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

export default function SearchScreen({ navigation }) {
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
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("SearchResult", { item: item.name });
              }}
            >
              <View
                style={{
                  justifyContent: "space-evenly",
                  alignContent: "center",
                }}
              >
                <Image
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 20,
                    margin: 7,
                    marginLeft: 15,
                  }}
                  source={item.image}
                />
                <Text style={{ textAlign: "center" }}>{item.name}</Text>
              </View>
            </TouchableWithoutFeedback>
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
              Categories
            </Text>
          }
          ListFooterComponent={<Footer navigation={navigation} />}
        />
      </View>
    </View>
  );
}

const Footer = ({ navigation }) => {
  return (
    <View style={{ marginTop: 50 }}>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("SearchResult", { item: item.name });
            }}
          >
            <View
              style={{
                justifyContent: "space-evenly",
                alignContent: "center",
              }}
            >
              <Image
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 20,
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
              marginBottom: 30,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            More Categories
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
  },
  imageBackground: {
    width: "100%",
    height: 200,
  },
});
