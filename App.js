// import { useState } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Course Goal" style={styles.textInput} />
        <Button title="ADD" />
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  container: {
    padding: 50,
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
