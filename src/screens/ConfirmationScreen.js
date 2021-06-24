import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { Auth } from "aws-amplify";
import { showMessage } from "react-native-flash-message";
import { Button } from 'react-native-elements';

import Icons from "react-native-vector-icons/MaterialIcons";

import FloatingLabelInput from "../common-components/FloatingLabelInput";

const ConfirmationScreen = (props) => {
  const { navigation, route } = props;

  const [email, setEmail] = useState(route?.params?.emailId || '');
  const [code, setCode] = useState("");
  const [isConfirmCodeLoading, setIsConfirmCodeLoading] = useState(false);
  const [isResendOtpLoading, setIsResendOtpLoading] = useState(false);

  const confirmSignUp = (e) => {
    e.preventDefault();
    setIsConfirmCodeLoading(true);
    Auth.confirmSignUp(email, code)
      .then(() => {
        navigation.navigate("LoginScreen");
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: "danger"
        });
      })
      .finally(() => {
        setIsConfirmCodeLoading(false);
      });
  };
  const resendCode = () => {
    setIsResendOtpLoading(true);
    Auth.resendSignUp(email)
      .then(() => {
        alert("code resent successfully");
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: "danger"
        });
      })
      .finally(() => {
        setIsResendOtpLoading(false);
      });
  };

  return (
    <View style={styles.ScreenWrapper}>
      <View style={styles.ContentWrapper}>
        <TouchableOpacity style={styles.BackIcon} onPress={() => navigation.goBack(null)}>
          <Icons
            name={"arrow-back"}
            size={30}
            color="#000"
          />
        </TouchableOpacity>
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
            loading={isConfirmCodeLoading}
          />
        </View>
        <Button title="Resend code" onPress={resendCode} disabled={!email} loading={isResendOtpLoading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BackIcon: {
    position: "absolute",
    top: 0,
    left: 0
  },
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
