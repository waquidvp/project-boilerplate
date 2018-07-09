import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center"
  }
});

export default () => (
  <View style={styles.container}>
    <Text>Hello from React Native client with Typescript</Text>
  </View>
);
