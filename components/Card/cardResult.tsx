import React from "react";
import { View } from "react-native";
import TextUI from "../ui/textUI";

const CardResult = ({
  No,
  Question,
  Answer,
  YourAnswer,
  colorYourAnswer = "grey",
}: {
  No: string;
  Question: string;
  Answer?: string;
  YourAnswer: string;
  colorYourAnswer?: string;
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          padding: 5,
        }}
      >
        <TextUI text={No} size={15} width={40} />
        <View style={{ flexDirection: "column", width: 230 }}>
          <TextUI text={Question} size={15} />
          {Answer ? <TextUI text={Answer} size={15} weight="bold" /> : null}
        </View>

        <TextUI
          width={100}
          text={YourAnswer}
          size={15}
          color={colorYourAnswer}
          weight="bold"
        />
      </View>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "grey",
          marginTop: 3,
        }}
      />
    </View>
  );
};

export default CardResult;
