import React from "react";
import { View, StyleSheet } from "react-native";
import TextUI from "../ui/textUI";
import MultipleChoice from "./StyleExam/multipleChoice";
import OpenEnded from "./StyleExam/openEnded";
import { Button } from "react-native-paper";
import ButtonUI from "../ui/buttonUI";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../ui/appBarUI";
const FormExam = ({ questionType }: { questionType: string }) => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <View>
      <View style={styles.title}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.quantity}>
            <TextUI text="1" size={25} />
            <View style={{ borderWidth: 1, borderColor: "grey", width: 25 }} />
            <TextUI text="10" size={25} color="grey" />
          </View>
          <TextUI text="Đây chính là tiêu đề đề đềee " size={25} width={320} />
        </View>
      </View>
      {/* STYLE */}
      {questionType == "multiple-choice" ? <MultipleChoice /> : <OpenEnded />}
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <ButtonUI
          text="Next"
          width={30}
          onPress={() => navigation.navigate("PageFinish")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
  },
  quantity: {
    flexDirection: "column",
    width: 30,
    alignItems: "center",
    marginRight: 10,
  },
});
export default FormExam;
