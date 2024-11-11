import React from "react";
import { Text } from "react-native-paper";

const TextUI = ({
  text,
  size,
  weight,
  color,
  width,
}: {
  text: string;
  size: number;
  weight?: "bold";
  color?: string;
  width?: number;
}) => {
  return (
    <Text
      style={{
        fontSize: size,
        fontWeight: weight == null ? "normal" : weight,
        color: color == null ? "black" : color,
        width: width,
      }}
    >
      {text}
    </Text>
  );
};

export default TextUI;
