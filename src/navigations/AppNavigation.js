import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator
} from "@react-navigation/stack";

import { navigationRef } from "./NavigationService";
import AuthLoadingScreen from "../lib/AuthLoadingScreen";
import OnboardingNavigator from './OnboardingStackNavigator';
import DrawerNavigator from "./DrawerNavigator";
import EditProfile from "../screen/Profile/EditProfile";

const Stack = createStackNavigator();

export default function AppNavigation() {

  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator initialRouteName="AuthLoading" screenOptions={{ headerShown:false}}>
        <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        <Stack.Screen name="App" component={DrawerNavigator} />
        <Stack.Screen name="OtherApp" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
