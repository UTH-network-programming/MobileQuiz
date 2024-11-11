import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TextUI from "./ui/textUI";
import ButtonUI from "./ui/buttonUI";
import CardUI from "./ui/cardUI";
import TitleUI from "./ui/titleUI";
import CardHistory from "./Card/cardHistory";
import Icon from "react-native-vector-icons/MaterialIcons";

const PageHistory = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.body}>
      <TitleUI
        textTitle="History"
        textButton="Back to Dashboard"
        icon="dashboard"
        iconAlign="left"
        onPress={() => navigation.navigate("PageDashboard")}
      />
      <ScrollView>
        <CardHistory
          name="Name"
          style="Multiple Choise"
          time="01/01/2000"
          icon="library-add-check"
          onPress={() => navigation.navigate("PageResult")}
        />
        <CardHistory
          name="Name"
          style="Open Ended"
          time="01/01/2000"
          icon="import-contacts"
          onPress={() => navigation.navigate("PageResult")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: { flex: 1, padding: 20, backgroundColor: "white" },
});

export default PageHistory;
