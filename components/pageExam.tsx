import React from "react";
import { View, StyleSheet } from "react-native";
import TitleUI from "./ui/titleUI";
import TextUI from "./ui/textUI";
import FormExam from "./forms/formExam";
import AccuracyMultiple from "./forms/StyleExam/accuracyMultiple";
import AccuracyOpenEnded from "./forms/StyleExam/accuracyOpenEnded";
const PageExam = ({ route }: { route: any }) => {
  const { questionType } = route.params;
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <TitleUI
        textTitle="Topic"
        textButton="name"
        justifyContent="flex-start"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <TextUI text="11s" size={25} color="grey" />
        {questionType == "multiple-choice" ? (
          <AccuracyMultiple _true={0} _false={0} />
        ) : (
          <AccuracyOpenEnded accuracy={100} />
        )}
      </View>
      <FormExam questionType={questionType} />
    </View>
  );
};

export default PageExam;
