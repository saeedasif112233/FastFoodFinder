import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { data1 } from "../Global/Data";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import filter from "lodash/filter";

export default function Search() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [textinputFocused, settextInputFocused] = useState(true);
  const textinput = useRef(null);
  const [data2, setData2] = useState(data1);

  const contains = ({ name }, query) => {
    if (name.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
    return false;
  };

  const handleSearch = (text) => {
    const dataS = filter(data1, (user) => contains(user, text));
    setData2(dataS);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          setVisible(true);
        }}
      >
        <View style={styles.SearchArea}>
          <Icon
            name="magnify"
            size={32}
            style={{ marginTop: 2, marginRight: 7, marginLeft: 10 }}
          />
          <Text>What are you looking for?</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType="fade" transparent={false} visible={visible}>
        <TouchableWithoutFeedback
          onPress={() => {
            setVisible(false);
          }}
        >
          <View style={styles.Modal}>
            <View style={styles.View1}>
              <View style={styles.TextInput}>
                <Animatable.View
                  animation={textinputFocused ? "fadeInRight" : "fadeInLeft"}
                  duration={600}
                >
                  <Icon1
                    name={textinputFocused ? "arrow-back" : "search"}
                    onPress={() => {
                      if (textinputFocused) {
                        setVisible(false);
                        settextInputFocused(false);
                      }
                    }}
                    style={styles.Icon2}
                  />
                </Animatable.View>
                <TextInput
                  style={{
                    width: "90%",
                    padding: 7,
                  }}
                  autoFocus={true}
                  ref={textinput}
                  onFocus={() => {
                    settextInputFocused(true);
                  }}
                  onBlur={() => {
                    settextInputFocused(false);
                  }}
                  onChangeText={handleSearch}
                />
                <Animatable.View
                  animation={textinputFocused ? "fadeInRight" : "fadeInLeft"}
                  duration={600}
                >
                  <Icon1
                    name={textinputFocused ? "cancel" : null}
                    onPress={() => {
                      textinput.current.clear();
                      handleSearch("");
                    }}
                    style={styles.Icon12}
                  />
                </Animatable.View>
              </View>
            </View>
            <FlatList
              data={data2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    Keyboard.dismiss();
                    navigation.navigate("SearchResult", { item: item.name });
                    setVisible(false);
                    settextInputFocused(true);
                  }}
                >
                  <View style={styles.View2}>
                    <Text
                      style={{
                        borderColor: "lightgrey",
                        borderWidth: 1,
                        borderRadius: 5,
                        width: 325,
                        padding: 10,
                        marginTop: -10,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text1: {
    color: "lightgrey",
    fontSize: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    paddingLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 30,
  },
  SearchArea: {
    width: "94%",
    height: 50,
    borderRadius: 12,
    backgroundColor: "#DBDBDB",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 45,
    elevation: 2,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  SearchIcon: {
    fontSize: 24,
    padding: 5,
    color: "lightgrey",
    marginTop: 10,
  },
  View1: {
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  View2: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  Icon2: {
    fontSize: 24,
    padding: 5,
    color: "grey",
    marginRight: 6,
  },
  Icon12: {
    fontSize: 24,
    color: "grey",
  },
  Modal: {
    flex: 1,
  },
});
