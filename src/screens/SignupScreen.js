import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Auth } from "aws-amplify";
import Icons from "react-native-vector-icons/MaterialIcons";
import { showMessage } from "react-native-flash-message";
import { Button } from 'react-native-elements';

import FloatingLabelInput from "../components/FloatingLabelInput";

const SignupScreen = (props) => {
  const { navigation } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signUp = (e) => {
    e.preventDefault();
    setIsLoading(true);
    Auth.signUp({ username: email, password, attributes: { email } })
      .then(() => {
        navigation.navigate("ConfirmationScreen", {
          emailId: email,
        });
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: "danger"
        });
      })
      .finally(() => {
        setIsLoading(false)
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
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          title="Sign up"
          disabled={!email || !password}
          onPress={signUp}
          loading={isLoading}
        />
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
