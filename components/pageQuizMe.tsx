import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import TextUI from "./ui/textUI";
import ButtonUI from "./ui/buttonUI";
import InputFieldUI from "./forms/inputFiedUI";
import SelectButtonUI from "./forms/selectButtonUI";

const PageQuizMe = ({ navigation }: { navigation: any }) => {
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState("3");
  const [questionType, setQuestionType] = useState("multiple-choice");

  return (
    <View style={styles.container}>
      <TextUI size={30} weight="bold" text="Quiz Creation" />
      <TextUI size={20} text="Choose a topic" color="grey" />
      <View style={{ height: 40 }} />
      <InputFieldUI
        label="Topic"
        placeholder="Enter a topic"
        value={topic}
        onChangeText={setTopic}
        description="*Please provide any topic you would like to be quizzed on here."
      />

      <InputFieldUI
        label="Number of Questions"
        placeholder="3"
        value={numQuestions}
        onChangeText={setNumQuestions}
        description="*You can choose how many questions you would like to be quizzed on here."
        keyboardType="numeric"
      />

      <SelectButtonUI
        questionType={questionType}
        setQuestionType={setQuestionType}
      />
      <ButtonUI
        text="Submit"
        onPress={() => navigation.navigate("PageExam",{questionType})}
        width={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});

export default PageQuizMe;
