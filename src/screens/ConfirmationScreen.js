import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, Image, Button, View, Text } from "react-native";
import { Auth } from "aws-amplify";

import FloatingLabelInput from "../common-components/FloatingLabelInput";

const ConfirmationScreen = (props) => {
  const { navigation, route } = props;

  const [email, setEmail] = useState(route?.params?.emailId || '');
  const [code, setCode] = useState("");

  const confirmSignUp = (e) => {
    e.preventDefault();
    Auth.confirmSignUp(email, code)
      .then(() => {
        navigation.navigate("LoginScreen");
      })
      .catch((err) => alert(err.message));
  };
  const resendCode = () => {
    Auth.resendSignUp(email)
      .then(() => {
        alert("code resent successfully");
      })
      .catch((err) => alert(err.message));
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
          label="Confirmation Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <View style={styles.ConfirmSignUpSpacing}>
          <Button
            title="Confirm Sign Up"
            onPress={confirmSignUp}
            disabled={!email || !code}
          />
        </View>
        <Button title="Resend code" onPress={resendCode} disabled={!email} />
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
    marginRight: "auto",
  },
  ConfirmSignUpSpacing: {
    marginBottom: 10,
  },
});

export default inject("store")(observer(ConfirmationScreen));
