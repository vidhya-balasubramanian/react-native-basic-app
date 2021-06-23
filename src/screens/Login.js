import React from 'react';
import { inject, observer } from "mobx-react";
import { ImageBackground, StyleSheet, Image, Text, Button, View } from "react-native";

import FloatingLabelInput from "../common-components/FloatingLabelInput";


const Login = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.ViewWrapper}>
      <View style={styles.ViewWrapper2}>
        <Image style={styles.Logo} source={require("../assets/logo.jpg")} />

        <FloatingLabelInput label="Email" />
        <FloatingLabelInput label="Password" />
      </View>
      <Button
          title="Login"
          onPress={() => navigation.navigate('Posts')} />
    </View>
  );
};

const styles = StyleSheet.create({
  ViewWrapper: {
    height: "100%",
    backgroundColor: "#fff"
  },
  ViewWrapper2: {
    width: "80%",
    // display: "block",
    margin: "auto"

  },
  Logo: {
    width: 85,
    height: 85,
    // display: "block",
    // margin: "auto",
    marginBottom: 20,
  },
});

export default inject("store")(observer(Login));