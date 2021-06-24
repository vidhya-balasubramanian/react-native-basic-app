import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function FloatingLabelInput(props) {
  const { label, value, onChange } = props;

  return (
    <View>
      <Text style={styles.LabelWrapper}>
        {label}
      </Text>
      <TextInput
        style={styles.InputWrapper}
        value={value}
        onChange={onChange}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  InputWrapper: {
    width: "100%",
    height: 30,
    borderColor: "#cecaca",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20
  },
  LabelWrapper: {
    color: "#5345f5",
    marginBottom: 10
  }
});
