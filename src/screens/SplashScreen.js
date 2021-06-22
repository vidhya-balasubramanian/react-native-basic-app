import React from "react";
import { ImageBackground, StyleSheet, Image, Text, Button } from "react-native";

const SplashScreen = (props) => {
  const { navigation } = props;

  return (
    <ImageBackground
      source={require("../assets/splash2.jpeg")}
      style={styles.BgImage}
    >
      <Image style={styles.Logo} source={require("../assets/logo.jpg")} />
      <Text style={styles.TextWrapper}>Subtitle</Text>
      <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  BgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  Logo: {
    width: 85,
    height: 85,
    marginBottom: 20,
  },
  TextWrapper: {
    marginBottom: 20,
  },
});

export default SplashScreen;
