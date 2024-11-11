import React from "react";
import { View, StyleSheet } from "react-native";
import ButtonUI from "../../ui/buttonUI";

const AccuracyMultiple = ({
  _true,
  _false,
}: {
  _true: number;
  _false: number;
}) => {
  return (
    <View style={styles.cart}>
      <ButtonUI
        text={_true.toString()}
        size={25}
        color="green"
        backgroundColor="white"
        icon="check-circle-outline"
      />
      <ButtonUI
        text={_false.toString()}
        size={25}
        color="red"
        backgroundColor="white"
        icon="check-circle-outline"
        iconAlign="right"
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
export default AccuracyMultiple;
