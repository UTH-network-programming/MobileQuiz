import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import TitleUI from "./ui/titleUI";
import CardUI from "./ui/cardUI";
import TextUI from "./ui/textUI";
import TableUI from "./ui/tableUI";

const PageResult = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView style={styles.body}>
      <TitleUI
        textTitle="History"
        textButton="Back to Dashboard"
        icon="dashboard"
        iconAlign="left"
        onPress={() => navigation.navigate("PageDashboard")}
      />

      <CardUI
        title="Results"
        icon="workspace-premium"
        view={
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../assets/favicon.png")}
              style={{ width: 70, height: 70 }}
            />
            <TextUI text="Good job" color="grey" size={35} />
            <TextUI text=">25% accuracy" color="grey" size={20} />
          </View>
        }
      />
      <CardUI title="Average Accuracy" subtitle="3,33%" icon="cyclone" />
      <CardUI title="Time Taken" subtitle="17s" icon="hourglass-empty" />

      <TableUI />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: { flex: 1, padding: 20, backgroundColor: "white" },
});
export default PageResult;
