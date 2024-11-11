import React from "react";
import { Button, Icon } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextUI from "./textUI";

const ButtonUI = ({
  text,
  width,
  height,
  size = 16,
  color = "white",
  backgroundColor = "black",
  icon,
  borderWidth,
  iconAlign = "left",
  onPress,
}: {
  text: string;
  size?: number;
  color?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
  borderWidth?: number;
  icon?: string;
  iconAlign?: "left" | "right";
  onPress?: () => void;
}) => {
  return (
    <Button
      style={[
        styles.button,
        {
          width: width ? width : "auto",
          height: height ? height : "auto",
          backgroundColor: backgroundColor,
          borderWidth: borderWidth,
          borderColor: "black",
        },
      ]}
      onPress={onPress}
      labelStyle={styles.button}
    >
      <View style={[styles.button, { flexDirection: "row", gap: 5 }]}>
        {icon && iconAlign === "left" && (
          <MaterialIcons name={icon} size={size} color={color} />
        )}
        <TextUI text={text} size={size} color={color} />
        {icon && iconAlign === "right" && (
          <MaterialIcons name={icon} size={size} color={color} />
        )}
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default ButtonUI;
