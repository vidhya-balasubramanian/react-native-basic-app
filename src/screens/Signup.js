import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, Image, Button, View } from "react-native";
import { Auth } from "aws-amplify";
import Amplify from "aws-amplify";

import FloatingLabelInput from "../common-components/FloatingLabelInput";

const Login = (props) => {
  const { navigation } = props;

  const [email, setEmail] = useState("vidhya.b@adcuratio.com");
  const [password, setPassword] = useState("Adcuratio@123");

  useEffect(() => {
    Amplify.configure({
      Auth: {
        region: "us-west-2",
        userPoolId: "us-west-2_ixKRxf8p5",
        userPoolWebClientId: "44ih9dp4s39m4iecgqcib522mk",
      },
    });
  }, []);

  const signUp = (e) => {
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
    <View style={styles.SignupWrapper}>
      <View style={styles.InputBoxesWrapper}>
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
      </View>
      <View style={[{ width: "80%" }]}>
        <Button color="red" title="Login" onPress={signUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SignupWrapper: {
    height: "100%",
    backgroundColor: "#fff",
  },
  InputBoxesWrapper: {
    width: "80%",
    margin: "auto",
  },
  Logo: {
    width: 85,
    height: 85,
    marginBottom: 20,
  },
  ButtonWrapper: {
    color: "red"
  }
});

export default inject("store")(observer(Login));
