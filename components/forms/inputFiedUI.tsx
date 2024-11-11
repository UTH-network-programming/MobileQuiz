import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import TextUI from "../ui/textUI";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  description?: string;
  keyboardType?: "default" | "numeric";
}

const InputFieldUI: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  description,
  keyboardType = "default",
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextUI size={20} text={label} weight="bold" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
      {description && <TextUI size={15} text={description} color="grey" />}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
  },
});

export default InputFieldUI;
