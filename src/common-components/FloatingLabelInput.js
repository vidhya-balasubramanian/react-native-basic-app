import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from "react-native";

export default function FloatingLabelInput() {
  const [ isFocused, setIsFocused ] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  }
  return (
    <View style={styles.BoxWrapper}>
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
        Enter your email  
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  TextInput: {
    border: "1px solid red",
    padding: 15,
    borderRadius: 4,
    width: "200px"
  },
  TextWrapper: {
    fontSize: 16,
    position: "absolute",
    bottom: 15,
    color: "red",
    left: 14,
    padding: "0 8px",
    backgroundColor: "#e7e7f8"
  },
  TextWrapperFocussed: {
    fontSize: 16,
    position: "absolute",
    bottom: 37,
    color: "red",
    left: 14,
    padding: "0 8px",
    backgroundColor: "#e7e7f8"
  }
});

