import React from "react";
import { View } from "react-native";
import ButtonUI from "./ui/buttonUI";

const PageFinish = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        gap: 10,
      }}
    >
      <ButtonUI
        text="You Completed in 15s"
        backgroundColor="green"
        width={250}
        height={50}
        size={20}
      />
      <ButtonUI
        text="View Statistics"
        icon="signal-cellular-alt"
        width={250}
        height={50}
        color="white"
        size={20}
        iconAlign="right"
        onPress={() => navigation.navigate("PageHistory")}
      />
    </View>
  );
};

export default PageFinish;
