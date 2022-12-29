import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { moderateScale, scale, verticalScale } from "../../constants/scaling";
import { FontFamily } from "../../constants/theme";
import store from "../../redux/store";
import { apiGet, getItem } from "../../API/APIhelper";
import { useSelector } from "react-redux";
import LogoutComponment from "./LogoutComponment";
import Wrapper from "../../components/wrapper";
import { images } from "../../constants";
import { useIsFocused } from "@react-navigation/core";




const { height, width } = Dimensions.get("window");

const ProfileScreen = ({ navigation }) => {
  const {LangData,UserData}=useSelector((state)=>state.lang)
  const [Language, setLanguage] = useState("");
  const isFocused=useIsFocused()
  
  useEffect(() => {
    getAllData();
    console.log(UserData)
  }, [isFocused]);
  

  const getAllData = async () => {
    const lang = await getItem("selectedlng");   
    setLanguage(lang == "hi" ? "Hindi" : "English");
    console.log(lang,Language)
    
  };









  return (
    <Wrapper
      isleft={true}
      title={"Profile"}
      leftImg={images.hamburgerMenu}
      leftPress={()=>navigation.toggleDrawer()}
    
    >      
      <View style={{ flex: 0.8, marginTop: verticalScale(100) }}>
        <View style={styles.profilebodytable}>
          <Text
            style={{
              marginTop: verticalScale(250),
              ...styles.componentHeaderText,
            }}
          >
            Name
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ ...styles.componentValueText }}>{UserData?.Name}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Onboarding", { screen:'NameScreen',params:{
                  isBack:true
                } })
              }
            >
              <Text style={{ ...styles.componentValueSeconderyText }}>
                {LangData?.edit}
              </Text>
            </TouchableOpacity>
          </View>
         



        </View>
        <View style={styles.profilebodytable}>
          <Text
            style={{
              marginLeft: 0,
              marginTop: verticalScale(250),
              ...styles.componentHeaderText,
            }}
          >
          Mobile Number
          </Text>
          
          <Text style={{ ...styles.componentValueText }}>{UserData?.MobileNumber}</Text>
            
        </View>
        
        <View style={styles.profilebodytable}>
          <Text
            style={{
              marginLeft: 0,
              marginTop: verticalScale(250),
              ...styles.componentHeaderText,
            }}
          >
            App Language
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ ...styles.componentValueText }}>{Language}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Onboarding", { screen:'LanguageScreen',params:{
                  isBack:true
                } })
              }
            >
              <Text style={{ ...styles.componentValueSeconderyText }}>
              {LangData?.change.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>



          
        </View>

        <View style={styles.profilebodytable}>
          <Text
            style={{
              marginTop: verticalScale(250),
              ...styles.componentHeaderText,
            }}
          >
            Address
          </Text>
         
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom:verticalScale(100)
            }}
          >
            <View style={{flex:0.8}}>
            <Text style={{ ...styles.componentValueText }} numberOfLines={4}>{`${UserData?.Address?.streetAddress}, ${UserData?.Address?.city}, ${ UserData?.Address?.state} - ${UserData?.Address?.pincode}`}
             </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Onboarding", { screen:'Address',params:{
                  isBack: true
                } })
              }
              style={{flex:0.2,alignItems :'flex-end'}}
            >
              <Text style={{ ...styles.componentValueSeconderyText }}>
                {LangData?.change.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      
     

     
    </Wrapper>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  MainContainer: {
    // flex: 1,
    width: width,
    height: height,
    backgroundColor: "#FFFFFF",
  },
  textStyle: {
    fontSize: scale(14),
    fontWeight: "500",
    marginLeft: 0,
    color: "#6A6A6A",
  },
  modalText: {
    // color:"#6A6A6A",
    color: "white",
    fontSize: scale(14),
    marginTop: verticalScale(500),
    marginLeft: verticalScale(400),
    fontWeight: "500",
  },
  buttonmodal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(4),
    width: moderateScale(100),
    height: verticalScale(350),
  },
  profilebodytable: {
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
    width: "90%",
    marginLeft: moderateScale(15),
    minHeight: verticalScale(800),
  },
  centeredView: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    opacity: 0.9,
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    marginHorizontal: moderateScale(20),
    backgroundColor: "#ffffff",
    borderRadius: scale(12),
    padding: scale(20),
    height: verticalScale(1400),
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerRight: {
    marginLeft: -190,
  },
  MainContainer2: {
    width: width,
    height: height,
    backgroundColor: "#FFFFFF",
  },
  textInputContainer: {
    marginBottom: verticalScale(200),
  },
  roundedTextInput: {
    borderRadius: scale(10),
    borderWidth: scale(4),
  },
  checkContainer: {
    flexDirection: "row",
    marginTop: verticalScale(100),
    marginLeft: "8%",
    color: "red",
  },
  backcontainer: {
    marginLeft: "7%",
    marginTop: "15%",
  },
  iconstyle: {
    marginTop: verticalScale(200),
  },
  iconstyle1: {
    marginTop: verticalScale(200),
  },
  textboxContainer: {
    marginLeft: "6%",
    marginTop: "10%",
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    width: "99%",
    // flex: 1
    backgroundColor: "red",
  },
  buttonContainer: {
    width: moderateScale(300),
    height: verticalScale(500),
    borderRadius: scale(40),
    fontSize: scale(40),
    fontWeight: "bold",
  },
  disable_button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 12,
    paddingLeft: 12,
    width: "85%",
    height: 58,
    backgroundColor: "#BFA0FF",
    borderRadius: 8,
    marginLeft: "8%",
    marginTop: "5%",
    alignSelf: "stretch",
    color: "#fff",
  },
  button: {
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    //width: "86%",
    height: verticalScale(580),
    backgroundColor: "#7E41FF",
    borderRadius: 8,
    marginHorizontal: "5%",
    marginBottom: verticalScale(600),
    alignSelf: "stretch",
    color: "#fff",
  },
  /* button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',      
    width: '90%',
    height: 58,
    backgroundColor: '#7E41FF',
    borderRadius: 8,
    marginLeft: '5%',
    marginBottom:scale(20),      
    alignSelf: 'stretch',
    color: '#fff'
  }, */
  buttonupdate: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 12,
    paddingLeft: 12,
    width: "90%",
    height: 58,
    backgroundColor: "#7E41FF",
    borderRadius: 8,
    marginLeft: "5%",
    marginTop: "123%",
    alignSelf: "stretch",
    color: "#fff",
  },
  buttonupdatedisable: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 12,
    paddingLeft: 12,
    width: "90%",
    height: 58,
    opacity: 0.5,
    backgroundColor: "#7E41FF",
    borderRadius: 8,
    marginLeft: "5%",
    marginTop: "123%",
    alignSelf: "stretch",
    color: "#fff",
  },
  button2: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 180,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 12,
    paddingLeft: 12,
    width: "85%",
    height: 58,
    backgroundColor: "#7E41FF",
    borderRadius: 8,
    left: 30,
    top: 20,
    alignSelf: "stretch",
    color: "#fff",
  },
  disable_button2: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 180,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 12,
    paddingLeft: 12,
    width: 350,
    height: 48,
    backgroundColor: "#BFA0FF",
    borderRadius: 8,
    left: 30,
    top: 20,
    alignSelf: "stretch",
    color: "#fff",
  },
  btntext: {
    fontSize: scale(15),
    fontWeight: "bold",
    color: "white",
  },
  countryText: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    width: 88,
    height: 56,
    right: 104,
    color: "#000",
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#B6BAC3",
    borderRadius: 8,
  },
  inputText: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    position: "absolute",
    width: "90%",
    height: 56,
    color: "#000",
    backgroundColor: "#F9FAFB",
    borderColor: "#B6BAC3",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
  },
  inactiveinputText: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    position: "absolute",
    width: 216,
    height: 56,
    backgroundColor: "#F9FAFB",
    borderColor: "#B6BAC3",
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: 8,
  },
  inputText2: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 5,
    paddingLeft: 16,
    width: 62,
    backgroundColor: "#F9FAFB",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#B6BAC3",
    borderRadius: 8,
  },
  inputContainer2: {
    width: "100%",
  },
  inputContainer3: {
    marginTop: "6%",
    marginLeft: "4%",
    marginRight: "6%",
  },

  inputContainer: {
    alignItems: "stretch",
    borderColor: "white",
    paddingRight: 20,
    width: 70,
    marginBottom: 30,
    marginLeft: 7,
    borderRadius: 15,
  },

  checkbox_unchecked: {
    opacity: 0.2,
  },
  checkbox_checked: {
    // opacity: 0.2
  },
  label: {
    width: "80%",
    height: 40,
    fontFamily: FontFamily.Regular,
    fontSize: 16,
    lineHeight: 20,
    // color: '#111827',
    marginTop: 6,
    fontWeight: "500",
    color: "#7E41FF",
    textDecorationLine: "underline",
  },

  heading: {
    // marginBottom: 20,
    // marginTop: 150,
    // color: '#111827'
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: "7%",
  },
  heading2: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: "7%",
  },
  textHeading: {
    fontSize: 28,
    color: "#000",
    width: "80%",
    marginTop: "11%",
    fontFamily: FontFamily.Bold,
  },
  textHeading2: {
    fontSize: 30,
    color: "#000",
    width: "70%",
    marginTop: "11%",
    fontFamily: FontFamily.Bold,
    flexDirection: "row",
    width: width,
    letterSpacing: 0.01,
  },
  textPara: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
    marginLeft: 50,
  },
  textPara2: {
    fontSize: 16,
    fontFamily: FontFamily.Regular,
    color: "#6B7280",
    marginTop: 6,
    // marginLeft: '2%',
    marginRight: "2%",
    lineHeight: 20,
  },
  buttonText: {
    width: "100%",
    // height: 20,
    fontFamily: FontFamily.Regular,
    fontSize: 15,
    // lineHeight: 20,
    color: "#6B7280",
    marginLeft: "7%",
  },
  componentHeaderText: {
    color: "#868D9A",
    fontSize: scale(12),
    fontWeight: "400",
    fontFamily: FontFamily.Regular,
  },
  componentValueText: {
    color: "#111827",
    fontSize: scale(16),
    fontWeight: "500",
    fontFamily: FontFamily.Medium,
  },
  componentValueSeconderyText: {
    color: "#7E41FF",
    fontSize: scale(14),
    fontWeight: "500",
    fontFamily: FontFamily.Regular,
  },
});
