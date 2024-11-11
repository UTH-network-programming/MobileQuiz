import React from "react";
import { View, StyleSheet } from "react-native";
import ButtonUI from "../ui/buttonUI";

const CardLogo = ({ onPress }: { onPress?: () => void }) => {
  return (
    <View style={styles.cart}>
      <ButtonUI
        text="Quizzzy"
        backgroundColor="white"
        color="black"
        width={90}
        onPress={onPress}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cart: {
    backgroundColor: "black",
    paddingTop: 1,
    paddingLeft: 1,
    paddingRight: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderRadius: 10,
  },
});
export default CardLogo;
