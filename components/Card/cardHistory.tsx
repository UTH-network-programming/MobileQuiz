import React from "react";
import CardUI from "../ui/cardUI";
import { View } from "react-native";
import ButtonUI from "../ui/buttonUI";

const CardHistory = ({
  name,
  style = "",
  icon,
  time,
  onPress,
}: {
  name: string;
  style?: string;
  icon?: string;
  time?: string;
  onPress?: () => void;
}) => {
  return (
    <CardUI
      title={name}
      subtitle={style}
      icon={icon}
      alignIcon="left"
      iconSize={40}
      view={
        time && (
          <View style={{ paddingLeft: 70 }}>
            <ButtonUI
              text={time}
              width={140}
              icon="access-time"
              iconColor="white"
              iconSize={20}
            />
          </View>
        )
      }
      onPress={onPress}
    />
  );
};

export default CardHistory;
