import React from 'react';
import { Button, Text } from 'react-native';
import { inject, observer } from "mobx-react";

const Posts = (props) => {
  const { getCount, updateCount } = props.store;
  return (
    <>
      <Button
          title="Update Count"
          onPress={() => updateCount()}
        />
      <Text>{getCount}</Text>
    </>
  );
};


export default inject("store")(observer(Posts));