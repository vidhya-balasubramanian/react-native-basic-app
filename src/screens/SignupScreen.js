import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, Image, Button, View, Text } from "react-native";
import { Auth } from "aws-amplify";

import FloatingLabelInput from "../common-components/FloatingLabelInput";

const SignupScreen = (props) => {
  const { navigation } = props;

  const [email, setEmail] = useState("vidhya.b@adcuratio.com");
  const [password, setPassword] = useState("Adcuratio@123");

  const signUp = (e) => {
    e.preventDefault();    
    Auth.signUp({ username: email, password, attributes: { email } })
      .then(() => {
        navigation.navigate('ConfirmationScreen', {
          emailId: email
         });
      })
      .catch((err) => {
        alert(err.message);
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
        <Button title="Sign up" disabled={!email || !password} onPress={signUp} />
        <Text style={styles.TextWrapper}>
          <Text
            style={styles.ConfirmText}
            onPress={() => navigation.navigate("ConfirmationScreen")}
          >
            Confirm your code
          </Text>
        </Text>
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
  },
  TextWrapper: {
    marginTop: 10,
    color: "grey",
    textAlign: "center",
  },
  ConfirmText: {
    color: "#1E57F1",
  },
});

export default inject("store")(observer(SignupScreen));
