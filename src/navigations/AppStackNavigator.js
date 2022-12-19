import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/Home/index";
import BottomNavigator from "./BottomTabNavigator";
// import ProfileScreen from "../screens/profileScreen/ProfileScreen";
// import MyLeads from "../screens/MyLeads";

const AppStack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator  screenOptions={{headerShown:false}}>
      <AppStack.Screen name="Home" component={HomeScreen}  />
      {/* <AppStack.Screen name="MyLeads" component={MyLeads} /> */}
      {/* <AppStack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
      {/* <AppStack.Screen name="BottomRouteNavigator" component={BottomNavigator} /> */}
    </AppStack.Navigator>
  );
};
export default AppStackNavigator;
