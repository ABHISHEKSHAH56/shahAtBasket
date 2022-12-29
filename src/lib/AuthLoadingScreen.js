import { CommonActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ImageBackground, Text, View } from "react-native"
import { getItem } from "../API/APIhelper"
import SplashScreen from "react-native-splash-screen";
import { getTheTranslatedPage, getTheUserDetails } from "../redux/actions/main";
import { images } from "../constants";
import { useSelector } from "react-redux";

const AuthLoadingScreen = ({navigation}) => {
  const {UserData}=useSelector((state)=>state.lang)

  useEffect(() => {  
    getTheUserDetails()
    getTheTranslatedPage( initialRoute)

  }, []);
  
  const initialRoute = async() => {
    const token =await getItem("UserDetails")
    SplashScreen .hide()
    console.log(token?.UserId,"initial router ",typeof token)
    if(!token?.UserId ){
    navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Onboarding" }],
          })
        );
        return false;
    }
  else{
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "App" }],
      })
    );
    
  }
 
  }

 
  
    return(
        <ImageBackground source={images.Splash} style={{flex:1}} />
    )
}

export default AuthLoadingScreen;