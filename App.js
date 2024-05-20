import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { color } from "./Src/Global/Styles";
import RootNavigator from "./Src/Navigation/RootNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
