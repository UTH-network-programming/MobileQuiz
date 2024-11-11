import React from "react";
import { View, StyleSheet } from "react-native";
import CardUI from "../ui/cardUI";

const HotTopics = () => {
  return (
    <View style={styles.container}>
      <CardUI
        title="Hot Topics"
        subtitle="Click on a topic to start a quiz on it."
        border="white"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    borderRadius: 20,
    borderColor: "#EAEAEA",
    backgroundColor: "white",
    borderWidth: 1,
  },
});

export default HotTopics;
