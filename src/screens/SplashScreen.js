import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, Image, Text, Button } from "react-native";

const SplashScreen = (props) => {
  const { navigation } = props;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen')
    }, 700);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/splash2.jpeg")}
      style={styles.BgImage}
    >
      <Image style={styles.Logo} source={require("../assets/logo.jpg")} />
      <Text style={styles.TextWrapper}>Welcome to FolksMedia</Text>
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
