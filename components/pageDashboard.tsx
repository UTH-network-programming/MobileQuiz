import React from "react";
import { View, StyleSheet } from "react-native";
import HotTopics from "./Card/HotTopics";
import CardUI from "./ui/cardUI";
import TitleUI from "./ui/titleUI";

const PageDashboard = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.body}>
      <TitleUI
        textTitle="Dashboard"
        textButton="What is this"
        icon="help-outline"
      />
      <CardUI
        title="Quiz me!"
        subtitle="Challenge yourself to a quiz with a topic of you choice."
        icon="developer-board"
        onPress={() => navigation.navigate("PageQuizMe")}
      />
      <CardUI
        title="History"
        subtitle="View past quiz attemts."
        icon="history"
        onPress={() => navigation.navigate("PageHistory")}
      />
      <HotTopics />
    </View>
  );
};
const styles = StyleSheet.create({
  body: { flex: 1, padding: 20, backgroundColor: "white" },
});

export default PageDashboard;
