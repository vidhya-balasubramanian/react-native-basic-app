import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, Image, Button, View } from "react-native";
import { Auth } from "aws-amplify";

import FloatingLabelInput from "../common-components/FloatingLabelInput";

const SignupScreen = (props) => {
  const { navigation } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    navigation.navigate('ConfirmationScreen');
    e.preventDefault();
    Auth.signUp({ username: email, password, attributes: { email } })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <View style={styles.ScreenWrapper}>     
      <View style={styles.ContentWrapper}>
        <Image style={styles.Logo} source={require("../assets/logo.jpg")} />
        <FloatingLabelInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FloatingLabelInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Sign up" onPress={signUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  ContentWrapper: {
    width: "80%",
  },
  Logo: {
    width: 85,
    height: 85,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

export default inject("store")(observer(SignupScreen));
