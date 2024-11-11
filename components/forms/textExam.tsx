import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextExam = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      {text.split("").map((char, index) =>
        char == "*" ? (
          <TextInput key={index} style={styles.input} />
        ) : (
          <Text key={index} style={styles.text}>
            {char}
          </Text>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  input: {
    width: 100,
    height: 30,
    borderBottomWidth: 1,
    borderColor: "black",
    marginHorizontal: 2,
  },
});

export default TextExam;
