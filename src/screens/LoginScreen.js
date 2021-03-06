import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, Image, View, Text } from "react-native";
import { Auth } from "aws-amplify";
import { showMessage } from "react-native-flash-message";
import { Button } from 'react-native-elements';

import FloatingLabelInput from "../components/FloatingLabelInput";

const LoginScreen = (props) => {
  const { navigation } = props;
  // vidhya.inboxme@gmail.com
  // Adcuratio@123
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log("React native Testing")
  const signIn = (e) => {
    e.preventDefault();
    debugger
    setIsLoading(true);
    Auth.signIn({
      username: email,
      password,
    })
      .then((user) => {
        // localStorage.setItem("UserInfo", JSON.stringify(user));
        console.log(user);
        navigation.navigate("HomeScreen")
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
        <Image style={styles.Logo} source={require("../assets/logo.jpg")} />
        <FloatingLabelInput
          label="Email"
          value={email}
          onChange={(e) => {
            debugger
            setEmail(e.target.value)
          }}
        />
        <FloatingLabelInput
          label="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <Button 
          title="Login" 
          // disabled={!(email && password)}  
          onPress={signIn} 
          loading={isLoading}/>
        <Text style={styles.SignupTextWrapper}>
          New to Folksmedia?{" "}
          <Text
            style={styles.SignupText}
            onPress={() => navigation.navigate("SignupScreen")}
          >
            Signup
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
    marginRight: "auto",
  },
  SignupTextWrapper: {
    marginTop: 10,
    color: "grey",
    textAlign: "center",
  },
  SignupText: {
    color: "#1E57F1",
  },
});

export default inject("store")(observer(LoginScreen));
