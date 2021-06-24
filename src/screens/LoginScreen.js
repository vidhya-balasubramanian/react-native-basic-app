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
        <Button title="Login" onPress={signIn} />
        <Text style={styles.SignupTextWrapper} >New to Folksmedia? <Text style={styles.SignupText} onPress={() => navigation.navigate('SignupScreen')}>Signup</Text></Text>
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
  SignupTextWrapper: {
   marginTop: 10,
   color: "grey",
   textAlign: "center"
  },
  SignupText: {
    color: "#1E57F1"
  }
});

export default inject("store")(observer(Login));
