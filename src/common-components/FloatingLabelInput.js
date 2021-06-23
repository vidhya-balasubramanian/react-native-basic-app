import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from "react-native";

export default function FloatingLabelInput(props) {
  const { label } = props;
  const [ isFocused, setIsFocused ] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  }
  return (
      <View style={styles.ViewWrapper}>
        <TextInput 
          style={styles.TextInput} 
          onFocus={handleFocus}/>
        <Text 
          style={isFocused ? styles.TextWrapperFocussed : styles.TextWrapper}
          onClick={() => {
            if (!isFocused) {
              handleFocus()
            }
          }}>
          {label} 
        </Text>
      </View>
  );
}
const styles = StyleSheet.create({
  ViewWrapper: {
    position: "relative",
    marginBottom: 20
  },
  TextInput: {
    border: "1px solid #1E57F1",
    borderRadius: 4,
    width: "100%",
    height: 50,
    outline: "none",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 17
  },
  TextWrapper: {
    fontSize: 16,
    position: "absolute",
    bottom: 16,
    color: "#1E57F1",
    left: 14,
    padding: "0 8px",
    backgroundColor: "#fff"
  },
  TextWrapperFocussed: {
    fontSize: 16,
    position: "absolute",
    bottom: 38,
    color: "#1E57F1",
    left: 14,
    padding: "0 8px",
    backgroundColor: "#fff"
  }
});

