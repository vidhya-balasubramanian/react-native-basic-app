import React from "react";
import { Button } from "react-native";

import FloatingLabelInput from "../common-components/FloatingLabelInput";

export default function Login(props) {
  const { navigation } = props;

  return (
    <>
      <FloatingLabelInput />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </>
  );
}
