import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, Image, Button, View, Text } from "react-native";
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

  const signIn = (e) => {
    e.preventDefault();
    Auth.signIn({
      username: email,
      password,
    })
      .then((user) => {
        setEmail("");
        setPassword("");
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.ViewWrapper}>     
      <Text>Sign In</Text>
      <FloatingLabelInput
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FloatingLabelInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button color="red" title="Sign In" onPress={signIn} />

    </View>
  );
};

const styles = StyleSheet.create({
  ViewWrapper: {
    // height: "100%",
    // backgroundColor: "#fff",
  },
  ViewWrapper2: {
    width: "80%",
    // display: "block",
    margin: "auto",
  },
  Logo: {
    width: 85,
    height: 85,
    // display: "block",
    // margin: "auto",
    marginBottom: 20,
  },
  ButtonWrapper: {
    color: "red"
  }
});

export default inject("store")(observer(Login));
