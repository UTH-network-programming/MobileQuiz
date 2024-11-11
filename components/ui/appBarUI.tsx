import React from "react";
import { Appbar, Avatar, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CardLogo from "../Card/cardLogo";
import ButtonUI from "./buttonUI";
import { View } from "react-native";

type StackParamList = {
  PageSignIn: undefined;
  PageDashboard: undefined;
  PageQuizMe: undefined;
  PageHistory: undefined;
  PageExam: undefined;
  PageResult: undefined;
  PageFinish: undefined;
};
export type StackNavigation = StackNavigationProp<StackParamList>;

const AppBarUI = () => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <Appbar.Header style={styles.appBarHeader}>
      <CardLogo onPress={() => navigation.navigate("PageDashboard")} />
      <View style={{ flexDirection: "row", gap: 20 }}>
        <ButtonUI
          text=""
          icon="sunny"
          color="black"
          size={25}
          backgroundColor="white"
          borderWidth={1}
        />
        <Avatar.Image size={48} source={require("../../assets/logo.png")} />
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});

export default AppBarUI;
