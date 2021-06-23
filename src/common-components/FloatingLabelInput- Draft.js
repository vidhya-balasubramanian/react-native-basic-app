import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function FloatingLabelInput(props) {
  const { label, value, onChange } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const labelStyle = {
    fontSize: 16,
    position: "absolute",
    left: 14,
    bottom: !isFocused ? 12 : 31,
    fontSize: !isFocused ? 15 : 17,
    color: !isFocused ? "red" : "blue",
    // padding: "0 8px",
    backgroundColor: "#fff",
  };

  return (
    <View style={styles.ViewWrapper}>
      <TextInput
        style={styles.TextInput}
        onFocus={handleFocus}
        value={value}
        onChange={onChange}
      />
      <Text
        style={labelStyle}
        onClick={() => {
          if (!isFocused) {
            handleFocus();
          }
        }}
      >
        {label}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  ViewWrapper: {
    position: "relative",
    marginBottom: 20,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#1E57F1",
    borderRadius: 4,
    width: "100%",
    height: 41,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 17,
  },
});
