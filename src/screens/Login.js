import React from 'react';
import { inject, observer } from "mobx-react";
import { Button } from 'react-native';

import FloatingLabelInput from "../common-components/FloatingLabelInput";


const Login = (props) => {
  const { navigation } = props;

  return (
    <>
      <FloatingLabelInput />


      <Button
          title="check posts"
          onPress={() => navigation.navigate('Posts')}
        />
    </>
  );
};


export default inject("store")(observer(Login));