import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Statusbar from "../../Component/statusbar";
import HomeHeader from "../../Component/HomeHeader";
import { color } from "../../Global/Styles";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import { data, foodCardData } from "../../Global/Data";
import FoodCard from "../../Component/FoodCard";
import HomeTab from "../../Navigation/HomeTab";

const Screen_width = Dimensions.get("window").width;
const { height, width } = Dimensions.get("window");

interface HomeProps {
  navigation: any;
}

interface DataItem {
  id: string;
  name: string;
  image: any;
}

interface FoodCardItem {
  RestName: string;
  faraway: string;
  BussinessAddress: string;
  image: any;
  AvrgReview: string;
  NoOfReview: string;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [Delivery, setDelivery] = useState<boolean>(true);
  const [loc, setloc] = useState<boolean>(false);
  const [indexCheck, setindexCheck] = useState<string>("0");

  return (
    <View>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Statusbar color={color.dgreen} />
          <View>
            <HomeHeader Title={"Food App"} navigation={navigation} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 1,
              }}
            >
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: isFocused ? color.dgreen : color.lYellow,
                  },
                ]}
                onPress={() => {
                  setIsFocused(true);
                  setDelivery(true);
                }}
              >
                <Text
                  style={{
                    color: isFocused ? color.lYellow : color.dgreen,
                    textAlign: "center",
                  }}
                >
                  Delivery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: isFocused ? color.lYellow : color.dgreen,
                  },
                ]}
                onPress={() => {
                  setIsFocused(false);
                  setDelivery(false);
                  // navigation.navigate("MapScreen");
                }}
              >
                <Text
                  style={{
                    color: isFocused ? color.dgreen : color.lYellow,
                    textAlign: "center",
                  }}
                >
                  Pick-up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "lightgrey",
              flexDirection: "row",
              marginTop: 15,
              borderRadius: 50,
              marginLeft: 15,
              marginRight: 45,
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: loc ? "white" : "lightgrey",
                width: 175,
                flexDirection: "row",
                marginLeft: 10,
                alignItems: "center",
                height: 45,
                borderRadius: 50,
                padding: 3,
              }}
              onPress={() => {
                setloc(true);
              }}
            >
              <Icon name="location-sharp" size={30} />
              <Text>LDA Avenue 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: loc ? "lightgrey" : "white",
                borderRadius: 30,
                width: 100,
                flexDirection: "row",
                alignItems: "center",
                padding: 5,
                marginRight: 10,
              }}
              onPress={() => {
                setloc(false);
              }}
            >
              <Icon1 name="clock-time-four" size={30} />
              <Text style={{ marginLeft: 4 }}>Now</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Icon1
              name="tune"
              size={30}
              style={{ marginTop: 23, marginLeft: -30 }}
              onPress={() => {
                Alert.alert("Hello Tune");
              }}
            />
          </View>
        </View>

        <View
          style={{ backgroundColor: "lightgrey", padding: 4, marginTop: 20 }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Catagories</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          extraData={indexCheck}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setindexCheck(item.id);
              }}
            >
              <View
                style={
                  indexCheck === item.id
                    ? { ...styles.cardSelected }
                    : { ...styles.card }
                }
              >
                <Image
                  style={{ height: 60, width: 60, borderRadius: 30 }}
                  source={item.image}
                />
                <Text
                  style={{
                    top: 0,
                    color: indexCheck === item.id ? color.lYellow : "black",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </Pressable>
          )}
        />

        <View style={styles.Titlebar}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Free Delivery Now
          </Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
                marginTop: 13,
                marginLeft: 14,
                marginRight: 10,
              }}
            >
              Option Changing in
            </Text>
          </View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal
            data={foodCardData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginLeft: 3 }}>
                <FoodCard
                  onPressFoodCard={() => {}}
                  screenWidth={Screen_width * 0.8}
                  RestName={item.RestName}
                  faraway={item.faraway}
                  BussinessAddress={item.BussinessAddress}
                  image={item.image}
                  AvrgReview={item.AvrgReview}
                  NoOfReview={item.NoOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.Titlebar}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Promotion Available
          </Text>
        </View>
        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal
            data={foodCardData}
            showsHorizontalScrollIndicator
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginLeft: 3 }}>
                <FoodCard
                  onPressFoodCard={() => {}}
                  screenWidth={Screen_width * 0.8}
                  RestName={item.RestName}
                  faraway={item.faraway}
                  BussinessAddress={item.BussinessAddress}
                  image={item.image}
                  AvrgReview={item.AvrgReview}
                  NoOfReview={item.NoOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.Titlebar}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Restaurant in your Area
          </Text>
        </View>
        <View style={{ width: Screen_width, padding: 10 }}>
          {foodCardData.map((item, index) => (
            <View key={index}>
              <FoodCard
                onPressFoodCard={() => {}}
                screenWidth={Screen_width * 0.95}
                RestName={item.RestName}
                faraway={item.faraway}
                BussinessAddress={item.BussinessAddress}
                image={item.image}
                AvrgReview={item.AvrgReview}
                NoOfReview={item.NoOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {Delivery && (
        <View style={styles.FloatingButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MapScreen");
            }}
          >
            <Icon name="location" size={30} color="black" />
            <Text>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0efeb",
    paddingBottom: 5,
  },
  btn: {
    borderRadius: 30,
    width: 125,
    height: 35,
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 15,
  },
  card: {
    borderRadius: 20,
    backgroundColor: "white",
    color: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    height: 100,
    marginTop: 15,
    marginLeft: 10,
  },
  cardSelected: {
    borderRadius: 20,
    color: "red",
    backgroundColor: color.dgreen,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    height: 100,
    margin: 15,
    marginBottom: 25,
  },
  Titlebar: {
    backgroundColor: "lightgrey",
    padding: 4,
    marginTop: -10,
    marginBottom: 2,
  },
  FloatingButton: {
    position: "absolute",
    bottom: 10,
    right: 13,
    backgroundColor: "white",
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'lighblu',
  },
});

export default Home;
