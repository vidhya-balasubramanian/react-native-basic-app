import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, Image, Button, View, Text } from "react-native";
import { Auth } from "aws-amplify";
import Amplify from "aws-amplify";

import FloatingLabelInput from "../common-components/FloatingLabelInput";

const Login = (props) => {
  const { navigation } = props;

  const [email, setEmail] = useState("vidhya.b@adcuratio.com");
  const [code, setCode] = useState("");

  useEffect(() => {
    Amplify.configure({
      Auth: {
        region: "us-west-2",
        userPoolId: "us-west-2_ixKRxf8p5",
        userPoolWebClientId: "44ih9dp4s39m4iecgqcib522mk",
      },
    });
  }, []);

  const confirmSignUp = (e) => {
    e.preventDefault();
    Auth.confirmSignUp(email, code)
      .then((data) => {
        console.log(data);
        setWaitingForCode(false);
        setEmail("");
        setCode("");
      })
      .catch((err) => console.log(err));
  };
  const resendCode = () => {
    Auth.resendSignUp(email)
      .then(() => {
        console.log("code resent successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <View style={styles.ScreenWrapper}>     
      <View style={styles.ContentWrapper}>
        <Image style={styles.Logo} source={require("../assets/logo.jpg")} />
        <FloatingLabelInput
          label="Confirmation Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <View style={styles.ConfirmSignUpSpacing}>
          <Button title="Confirm Sign Up" onPress={confirmSignUp} />
        </View>
        <Button  title="Resend code" onPress={resendCode} />

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
  ConfirmSignUpSpacing: {
   marginBottom: 10
  }
});

export default inject("store")(observer(Login));
