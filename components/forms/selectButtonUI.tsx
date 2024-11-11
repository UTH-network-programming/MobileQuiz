import React from "react";
import { View, StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const SelectButtonUI = ({
  questionType,
  setQuestionType,
}: {
  questionType: string;
  setQuestionType: (type: string) => void;
}) => {
  const getIconColor = (type: string) => {
    return questionType === type ? "#EAEAEA" : "black"; 
  };

  return (
    <View style={styles.buttons}>
      <PaperButton
        icon={() => (
          <Icon
            name="library-add-check"
            size={20}
            color={getIconColor("multiple-choice")}
          />
        )}
        mode="contained"
        onPress={() => setQuestionType("multiple-choice")}
        style={[
          styles.left,
          questionType === "multiple-choice"
            ? styles.selectedButton
            : styles.noSelectedButton,
        ]}
        labelStyle={
          questionType === "multiple-choice"
            ? styles.selectedLabel
            : styles.noSelectedLabel
        }
      >
        Multiple Choice
      </PaperButton>

      <PaperButton
        icon={() => (
          <Icon
            name="import-contacts"
            size={20}
            color={getIconColor("open-ended")}
          />
        )}
        mode="contained"
        onPress={() => setQuestionType("open-ended")}
        style={[
          styles.right,
          questionType === "open-ended"
            ? styles.selectedButton
            : styles.noSelectedButton,
        ]}
        labelStyle={
          questionType === "open-ended"
            ? styles.selectedLabel
            : styles.noSelectedLabel
        }
      >
        Open Ended
      </PaperButton>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  left: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
  },
  right: {
    flex: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
  },
  selectedButton: {
    backgroundColor: "black",
  },
  noSelectedButton: {
    backgroundColor: "#EAEAEA",
  },
  selectedLabel: {
    color: "#EAEAEA",
  },
  noSelectedLabel: {
    color: "black",
  },
});

export default SelectButtonUI;
