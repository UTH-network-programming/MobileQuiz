import React, { useState } from "react";
import { View } from "react-native";
import OptionExam from "../optionExam";

const MultipleChoice = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectOption = (no: string) => {
    setSelectedOption(no);
  };

  return (
    <View>
      <OptionExam
        no="10"
        title="Câu 1"
        click={selectedOption === "1"}
        onSelect={() => handleSelectOption("1")}
      />
      <OptionExam
        no="20"
        title="Câu 2"
        click={selectedOption === "2"}
        onSelect={() => handleSelectOption("2")}
      />
      <OptionExam
        no="30"
        title="Câu 3"
        click={selectedOption === "3"}
        onSelect={() => handleSelectOption("3")}
      />
      <OptionExam
        no="40"
        title="Câu 4"
        click={selectedOption === "4"}
        onSelect={() => handleSelectOption("4")}
      />
    </View>
  );
};

export default MultipleChoice;
