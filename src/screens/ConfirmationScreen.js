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
    <View style={styles.ViewWrapper}>
      <FloatingLabelInput
        label="Confirmation Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Button color="red" title=" Confirm Sign Up" onPress={confirmSignUp} />

      <Button color="red" title="Resend code" onPress={resendCode} />
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
    color: "red",
  },
});

export default inject("store")(observer(Login));
