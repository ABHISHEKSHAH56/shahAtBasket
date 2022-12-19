import { CommonActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ImageBackground, Text, View } from "react-native"
import { getItem } from "../API/APIhelper"
import SplashScreen from "react-native-splash-screen";
import { getTheTranslatedPage, getTheUserDetails } from "../redux/actions/main";
import { images } from "../constants";

const AuthLoadingScreen = ({navigation}) => {

  useEffect(() => {  
    getTheUserDetails()
    getTheTranslatedPage( initialRoute)

  }, []);

  const initialRoute = async() => {
    const token =await getItem("token")
    SplashScreen .hide()
    if(!token ){
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