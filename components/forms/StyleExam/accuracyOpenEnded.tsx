import React from "react";
import ButtonUI from "../../ui/buttonUI";
import { View, StyleSheet } from "react-native";

const AccuracyOpenEnded = ({ accuracy }: { accuracy: number }) => {
  return (
    <View style={styles.cart}>
      <ButtonUI
        text={accuracy.toString() + "%"}
        backgroundColor="white"
        size={25}
        color="black"
        icon="cyclone"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cart: {
    width: 150,
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "grey",
    // borderRadius: 10,
    // justifyContent: "center",
  },
});
export default AccuracyOpenEnded;
