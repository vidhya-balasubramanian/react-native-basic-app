import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddBookScreen() {
  return (
    <View>
      <TextInput placeholder="Title" style={styles.InputWrapper} />
      <TextInput placeholder="Author" style={styles.InputWrapper} />
      <Button title="Add Book" />
    </View>
  );
}
const styles = StyleSheet.create({
  InputWrapper: {
    width: "80%",
    height: 30,
    borderBottomColor: "#cecaca",
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    marginLeft: 20,
  },
  LabelWrapper: {
    color: "#5345f5",
    marginBottom: 10,
  },
});
