import React from "react";
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

import FloatingLabelInput from "../common-components/FloatingLabelInput";

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.ScreenWrapper}>
      this is home screen
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  }
});

export default inject("store")(observer(HomeScreen));
