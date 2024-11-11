import React from "react";
import { View } from "react-native";
import TextUI from "./textUI";
import CardResult from "../Card/cardResult";

const TableUI = () => {
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <CardResult
        No="No."
        Question="Question $ Correct Answer"
        YourAnswer="Your Answer"
      />
      <CardResult
        No="1"
        Question="Question1"
        YourAnswer="345"
        colorYourAnswer="red"
        Answer="123"
      />
      <CardResult
        No="2"
        Question="Question2"
        YourAnswer="345"
        colorYourAnswer="red"
        Answer="123"
      />
    </View>
  );
};

export default TableUI;
