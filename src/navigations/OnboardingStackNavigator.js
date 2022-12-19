import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
} from "@react-navigation/stack";
import Language from "../screen/OnboardingScreen/Language";
import PhoneAuth from "../screen/OnboardingScreen/PhoneAuth";
import { getItem } from "../API/APIhelper";
import EditProfile from "../screen/Profile/EditProfile";
import Address from "../screen/Profile/Address";
import NameEmail from "../screen/Profile/NameEmail";
import Addresss from "../screen/Profile/Address";
// import OtpScreen from "../screen/OnboardingScreen/OtpScreen";



const Onboarding = createStackNavigator();

const OnboardingNavigator = ()=> {
  const [defaultRoute, setdefaultRoute] = useState("LanguageScreen")
 const initialRoute = async() => {
  const token =await getItem("selectedlng");
  if(!token) setdefaultRoute("LanguageScreen")
  else setdefaultRoute("PhoneAuthScreen")
 }
 useEffect(() => {
   initialRoute()
   console.log(defaultRoute)
 }, [])
 

  

  return (
    <Onboarding.Navigator   initialRouteName={defaultRoute} screenOptions={{headerShown:false}} >
      <Onboarding.Screen name="LanguageScreen" component={Language} />
      <Onboarding.Screen name="PhoneAuthScreen" component={PhoneAuth} />
      <Onboarding.Screen name="ProfileEdit" component={EditProfile} />
        <Onboarding.Screen name="NameScreen" component={NameEmail} />
        <Onboarding.Screen name="Address" component={Addresss} />
    </Onboarding.Navigator>
  );
}
export default OnboardingNavigator;
