import { StyleSheet, View } from "react-native";

import TextUI from "./ui/textUI";
import ButtonUI from "./ui/buttonUI";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const PageSignIn = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.body}>
      <View style={styles.formLogin}>
        <View style={{ flexDirection: "row" }}>
          <TextUI text="Welcome to Quizzzy" size={20} weight="bold" />
          <MaterialIcons name="whatshot" size={30} color="red" />
          <TextUI text="!" size={20} weight="bold" />
        </View>
        
        <TextUI
          text="Quizzzy is a platfom for creating quizzes using Al!.Get stared by
              loggin in below!"
          size={15}
          color="grey"
        />

        <ButtonUI
          text="Sign In with Google"
          onPress={() => navigation.navigate("PageDashboard")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  formLogin: {
    width: 300,
    height: 200,
    margin: 16,
    borderRadius: 20,
    justifyContent: "space-between",
    borderColor: "#EAEAEA",
    backgroundColor: "white",
    borderWidth: 3,
    padding: 20,
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
});

export default PageSignIn;
