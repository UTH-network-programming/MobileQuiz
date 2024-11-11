import React from "react";
import { View, StyleSheet } from "react-native";
import TextUI from "../ui/textUI";

const OptionExam = ({
  no,
  title,
  click,
  onSelect,
}: {
  no: string;
  title: string;
  click: boolean;
  onSelect: () => void;
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          marginTop: 10,
          borderColor: click ? "white" : "grey",
          backgroundColor: click ? "#171D2D" : "white",
        },
      ]}
      onTouchEnd={onSelect}
    >
      <View
        style={[
          styles.no,
          {
            borderColor: click ? "white" : "grey",
            backgroundColor: click ? "#171D2D" : "white",
          },
        ]}
      >
        <TextUI text={no} size={20} color={click ? "white" : "#171D2D"} />
      </View>
      <TextUI
        text={title}
        size={20}
        width={300}
        color={click ? "white" : "#171D2D"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  no: {
    width: 50,
    height: 50,
    justifyContent: "center",
    marginEnd: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default OptionExam;
