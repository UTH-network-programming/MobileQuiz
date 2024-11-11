import React from "react";
import { View } from "react-native";
import TextUI from "./textUI";
import ButtonUI from "./buttonUI";

const TitleUI = ({
  textTitle,
  textButton,
  icon,
  iconAlign = "right",
  justifyContent = "space-between",
  onPress,
}: {
  textTitle: string;
  icon?: string;
  iconAlign?: "right" | "left";
  textButton: string;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  onPress?: () => void;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: justifyContent,
      }}
    >
      <TextUI text={textTitle} size={35} weight="bold" />
      <View style={{ width: 10 }} />
      <ButtonUI
        text={textButton}
        onPress={onPress}
        icon={icon}
        size={20}
        iconAlign={iconAlign}
        color="white"
      />
    </View>
  );
};
export default TitleUI;
