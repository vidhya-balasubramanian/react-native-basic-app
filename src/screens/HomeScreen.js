import React from "react";
import { inject, observer } from "mobx-react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Auth } from "aws-amplify";
import Icons from "react-native-vector-icons/MaterialIcons";
import { showMessage } from "react-native-flash-message";
import { Button } from 'react-native-elements';

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.ScreenWrapper}>
      <View style={styles.HeaderWrapper}>
        <Image source={require("../assets/user-person.svg")} style={styles.HomePic} />
        <Text>Hi User</Text>
      </View>
      <ScrollView>
        <View style={styles.EmptyBoxWrapper}></View>
        <View style={styles.EmptyBoxWrapper}></View>
        <View style={styles.EmptyBoxWrapper}></View>
        <View style={styles.EmptyBoxWrapper}></View>
        <View style={styles.EmptyBoxWrapper}></View>
        <View style={styles.EmptyBoxWrapper}></View>
        <View style={styles.EmptyBoxWrapper}></View>
      </ScrollView>
      
      <View style={styles.MenuItemWrapper}>
        <View style={styles.MenuItem}>
          <Image source={require("../assets/home.svg")} style={styles.HomePic} />
          <Text>Home</Text>
        </View>
        <View style={styles.MenuItem}>
          <Image source={require("../assets/content.svg")} style={styles.ContentPic}/>
          <Text>Content</Text>
        </View>
        <View style={styles.MenuItem}>
          <Image source={require("../assets/remote.svg")} style={styles.RemotePic}/>
          <Text>Remote</Text>
        </View>
        <View style={styles.MenuItem}>
          <Image source={require("../assets/rewards.svg")} style={styles.RewardsPic}/>
          <Text>Rewards</Text>
        </View>        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenWrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HomePic: {
    width: 30,
    height: 30
  },
  ContentPic: {
    width: 30,
    height: 30
  },
  RemotePic: {
    width: 30,
    height: 30
  },
  RewardsPic: {
    width: 30,
    height: 30
  },
  MenuItem: {
    alignItems: "center",
    flex: 1
  },
  MenuItemWrapper: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 20,
    display: "flex", 
    flexDirection: "row", 
    alignItems: "stretch",
    borderTopColor: "#e9e5e5",
    borderTopWidth: 1
  },
  EmptyBoxWrapper: {
    width: 300,
    height: 100,
    backgroundColor: "#d2cece",
    margin: "auto",
    marginTop: 20
  },
  HeaderWrapper: {
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center",
    height: 50,
    borderBottomColor: "#e9e5e5",
    borderBottomWidth: 1
  }
});

export default inject("store")(observer(HomeScreen));
