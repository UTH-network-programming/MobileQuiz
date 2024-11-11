import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppBarUI from "./components/ui/appBarUI";
import PageSignIn from "./components/pageSignIn";
import PageDashboard from "./components/pageDashboard";
import PageQuizMe from "./components/pageQuizMe";
import PageHistory from "./components/pageHistory";
import PageResult from "./components/pageResult";
import PageExam from "./components/pageExam";
import PageFinish from "./components/pageFinish";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppBarUI />
        <Stack.Navigator initialRouteName="PageSignIn">
          <Stack.Screen
            name="PageSignIn"
            component={PageSignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PageDashboard"
            component={PageDashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PageQuizMe"
            component={PageQuizMe}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PageHistory"
            component={PageHistory}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PageExam"
            component={PageExam}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PageResult"
            component={PageResult}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PageFinish"
            component={PageFinish}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
