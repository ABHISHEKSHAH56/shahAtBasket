// import React, { useState, useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
//   ActivityIndicator,
//   Button,
//   TextInput,
//   KeyboardAvoidingView,
//   Alert,
//   Image,
//   ScrollView,
//   BackHandler,
// } from "react-native";
// import { useTranslation } from "react-i18next";
// import OTPTextView from "react-native-otp-textinput";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useIsFocused } from "@react-navigation/native";
// import { useToast } from "react-native-toast-notifications";
// import { images } from "../../constants";

// import { moderateScale, scale, verticalScale } from "../../constants/scaling";
// import { FontFamily, SIZES } from "../../constants/theme";
// import store from "../../redux/store";
// import LoadingLoader from "../../components/LoadingLoader";
// import { apiPost, setItem } from "../../API/APIhelper";
// import commonAppStyle  from "../../components/commonAppStyle"
// import { Generateotp } from "../../API/urls";

// const OtpScreen = ({ navigation, route }) => {
//   const mobileNumber = route.params?.mobileNumber;
//   const { getState } = store;
//   const LangData = getState().lang.LangTransData;
//   const [currentphonenum, setCurrentPhonenumber] = useState();
//   const [showme, Setshowme] = useState(true);
//   const [code, setCode] = useState();
//   const [counter, setCounter] = useState(59);
//   const [loadingText, setloadingText] = useState("");
//   const isFocused = useIsFocused();
//   const toast = useToast();

//   const { t, i18n } = useTranslation();

//   console.log(mobileNumber);

//   //reinitlilization
//   useEffect(() => {
//     setCode();
//     setCounter(59);
//   }, [isFocused]);

//   useEffect(() => {
//     if (mobileNumber) signInWithPhoneNumber(mobileNumber);
//   }, []);

 
//   useEffect(() => {
//     const timer =
//       counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//     return () => clearInterval(timer);
//   }, [counter]);

//   const signInWithPhoneNumber = async (phoneNumber) => {
//     setCurrentPhonenumber(phoneNumber);
//     if (phoneNumber.length > 4) {
//       if (phoneNumber.length >= 10) {
//         const data = {
//           user_class: "OVCustomer",
//           phone_number: phoneNumber,
//         };
//         await apiPost("/apis/v1/otps/generate_otp", data)
//           .then((res) => {
//             console.log(res);
//             Setshowme(false);
           
//             toast.show("OTP sent to the Mobile", { type: "success" });
//             setCounter(60);
//           })
//           .catch((err) => {
//             console.log(err);
//             toast.show(err.msg, { type: "danger" });
//             Setshowme(false);
//           });
//       } else {
//         Alert.alert("Warning", "Please enter valid phone number.", [
//           { text: "Ok" },
//         ]);
//       }
//     } else {
//       Alert.alert("Warning", "Please enter your phone number.", [
//         { text: "Ok" },
//       ]);
//     }
//   };

//   const confirmCode = async (entered_otp) => {
//     const otp_phone = currentphonenum;
//     const data = {
//       phone_number: otp_phone,
//       otp: entered_otp,
//       user_class: "OVCustomer",
//     };
//     await Generateotp(data)
//       .then((res) => {
//         console.log(res, "OTP RES");
//         if (res.success) {
//           setItem("token", JSON.stringify(res.token));
//           setItem("phonenumber", currentphonenum);
//           //setItem("token",JSON.stringify(token))

//           toast.show("Your number has been updated", {type:'info'});
//           navigation.navigate("ProfileScreen");
//         } else toast.show("OTP is not valid ", { type: "danger" });
//       })
//       .catch((err) => {
//         console.log(err)
//         toast.show(err.msg, { type: "danger" });
//       });
//   };

//   if (showme) return <LoadingLoader LoadingText={loadingText} />;

//   return (
//     <>
//       <View style={commonAppStyle.MainAppContainer}>
//         <View>
//           <TouchableOpacity
//             style={styles.backcontainer}
//             onPress={() => navigation.navigate("ProfileEditScreen")}
//           >
//             {/* <Image
//               color="#6B7280"
//               style={{ width: 25, height: 25 }}
//               source={require("../../../assets/image/iv_back.png")}
//             /> */}
//             <Image
//                 // color="#6B7280"
//                 onPress={() => navigation.navigate("Language")}
//                 style={{ width: moderateScale(16), height: verticalScale(140), resizeMode: 'contain' }}
//                 source={images.backImg} />
//           </TouchableOpacity>
//           <View style={styles.heading2}>
//             <Text style={styles.textHeading2}>{t("enter_6_digits")} </Text>
//             <Text style={styles.textPara2}>
//               {t("enter_6_digits_text")} {mobileNumber}
//             </Text>
//           </View>
//           <View style={styles.inputContainer2}>
//             <View style={styles.inputContainer3}>
//               <OTPTextView
//                 containerStyle={styles.textInputContainer}
//                 textInputStyle={styles.roundedTextInput}
//                 handleTextChange={(text) => setCode(text)}
//                 inputCount={6}
//                 keyboardType="alphanumeric"
//                 backgroundColor="#F9FAFB"
//                 borderColor="#B6BAC3"
//                 borderWidth={2}
//               />
//             </View>

//             {counter != 0 ? (
//               <Text style={styles.buttonText}>
//                 {t("resend_code")} in 00:{counter}
//               </Text>
//             ) : (
//               <TouchableOpacity
//                 onPress={() => signInWithPhoneNumber(`${phoneNumber}`)}
//               >
//                 <Text style={{ ...styles.buttonText }}>
//                   {t("resend_OTP")}{" "}
//                   <Text style={{ color: "blue" }}>{LangData.resend_code}</Text>
//                 </Text>
//               </TouchableOpacity>
//             )}
//           </View>
//           <TouchableOpacity
//             style={6 == 6 ? styles.button2 : styles.button2}
//             onPress={() => confirmCode(code)}
//           >
//             <Text style={styles.btntext}> {t("confirm_code")} </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </>
//   );
// };

// export default OtpScreen;

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#fff",
//     paddingVertical: moderateScale(30),
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   MainContainer2: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#fff",
//     paddingVertical: moderateScale(30),
//   },
//   textInputContainer: {
//     shadowOpacity:0
//   },
//   roundedTextInput: {
//     borderRadius:scale(8),
//     height: verticalScale(450),
//     width: moderateScale(43),    
//     textAlign: "center",
//     fontSize: scale(22),
//     fontWeight: "500",
//     color: "#000000",
//     shadowOpacity:0,
//     shadowOffset:0,
//     shadowColor:"#ffff"
//   },
//   checkContainer: {
//     flexDirection: "row",
//     // Top: scale(10),
//     //marginLeft: "7%",
//     marginTop: verticalScale(220),
//     //display: "none"

//     // color: "red",
//     //   flex:0.25,
//     // marginLeft: '8%'
//   },
//   backcontainer: {
//     //marginLeft: "7%",
//     marginTop: "20%",
//     // marginTop: "15%",
//   },
//   iconstyle: {
//     // marginTop:verticalScale(200) ,
//     // height: verticalScale(140),
//     // width: moderateScale(16),
//   },
//   iconstyle1: {
//     marginTop: verticalScale(200),
//   },
//   textboxContainer: {
//     marginLeft: "35%",
//     marginTop: "13%",
//     // justifyContent: 'flex-start',
//     // alignItems: 'flex-start',
//     width: SIZES.width,
//     // flex: 1
//   },
//   buttonContainer: {
//     width: 300,
//     height: 50,
//     borderRadius: 40,
//     fontSize: 40,
//     fontWeight: "bold",
//   },
//   disable_button: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     alignContent: "center",
//     paddingTop: 0,
//     paddingBottom: 0,
//     paddingRight: 12,
//     paddingLeft: 12,
//     width: "85%",
//     height: 58,
//     backgroundColor: "#BFA0FF",
//     borderRadius: 8,
//     marginLeft: "8%",
//     marginTop: "5%",
//     alignSelf: "stretch",
//     color: "#fff",
//   },
//   button: {
//     // flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     alignContent: "center",

//     //width: "86%",
//     height: verticalScale(580),
//     backgroundColor: "#7E41FF",
//     borderRadius: 8,
//     //marginHorizontal: "7%",
//     marginTop: "5%",
//     alignSelf: "stretch",
//     color: "#fff",
//   },
//   button2: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 180,
//     paddingTop: 0,
//     paddingBottom: 0,
//     //paddingRight: 12,
//     //paddingLeft: 12,
//     width: "100%",
//     height: 58,
//     backgroundColor: "#7E41FF",
//     borderRadius: 8,
//     //left: 30,
//     top: 20,
//     alignSelf: "stretch",
//     color: "#fff",
//   },
//   disable_button2: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 180,
//     paddingTop: 0,
//     paddingBottom: 0,
//     paddingRight: 12,
//     paddingLeft: 12,
//     width: 350,
//     height: 48,
//     backgroundColor: "#BFA0FF",
//     borderRadius: 8,
//     left: 30,
//     top: 20,
//     alignSelf: "stretch",
//     color: "#fff",
//   },
//   btntext: {
//     fontSize: scale(14),
//     fontWeight: "500",
//     color: "#FFFFFF",
//   },
//   countryText: {
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     paddingTop: 8,
//     paddingBottom: 8,
//     paddingRight: 16,
//     paddingLeft: 16,
//     width: 88,
//     height: 56,
//     right: 104,
//     color: "#000",
//     backgroundColor: "#F9FAFB",
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "#B6BAC3",
//     borderRadius: 8,
//   },
//   inputText: {
//     flexDirection: "column",
//     alignItems: "flex-start",
//     paddingTop: 8,
//     paddingBottom: 8,
//     paddingRight: 16,
//     paddingLeft: 16,
//     position: "absolute",
//     width: 216,
//     height: 56,
//     color: "#000",
//     backgroundColor: "#F9FAFB",
//     borderColor: "#B6BAC3",
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderRadius: 8,
//   },
//   inactiveinputText: {
//     flexDirection: "column",
//     alignItems: "flex-start",
//     paddingTop: 8,
//     paddingBottom: 8,
//     paddingRight: 16,
//     paddingLeft: 16,
//     position: "absolute",
//     width: 216,
//     height: 56,
//     backgroundColor: "#F9FAFB",
//     borderColor: "#B6BAC3",
//     borderWidth: 4,
//     borderStyle: "solid",
//     borderRadius: 8,
//   },
//   inputText2: {
//     paddingTop: 4,
//     paddingBottom: 4,
//     paddingRight: 5,
//     paddingLeft: 16,
//     width: 62,
//     backgroundColor: "#F9FAFB",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderColor: "#B6BAC3",
//     borderRadius: 8,
//   },
//   inputContainer2: {
//    alignItems:'center'
//   },
//   inputContainer3: {
   
//     marginTop: "6%",
//     marginBottom: "6%",
//     //marginHorizontal: "5%",
//   },

//   inputContainer: {
//     alignItems: "stretch",
//     borderColor: "white",
//     paddingRight: 20,
//     width: 70,
//     marginBottom: 30,
//     marginLeft: 7,
//     borderRadius: 15,
//   },

//   checkbox_unchecked: {
//     opacity: 0.2,
//   },
//   checkbox_checked: {
//     // opacity: 0.2
//   },
//   label: {
//     // width: "80%",
//     // height: 40,
//     fontFamily: FontFamily.SemiBold,
//     fontSize: scale(13),

//     // lineHeight: 20,
//     // color: '#111827',
//     // marginTop: 6,
//     // top: scale(35),
//     fontWeight: "500",
//     color: "#7E41FF",
//     display: "none",
//     textDecorationLine: "underline",
//   },

//   heading: {
//     // marginBottom: 20,
//     // marginTop: 150,
//     // color: '#111827'
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     marginLeft: "7%",
//   },
//   heading2: {
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     //marginLeft: "7%",
//   },
//   textHeading: {
//     fontSize: 28,
//     color: "#000",
//     width: "80%",
//     marginTop: "11%",
//     fontFamily: FontFamily.Bold,
//   },
//   textHeading2: {
//     fontSize: 30,
//     color: "#000",
//     width: "70%",
//     marginTop: "7%",
//     fontFamily: FontFamily.Bold,
//     flexDirection: "row",
//     width: "90%",
//     // letterSpacing: 0.01
//   },
//   textPara: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "gray",
//     marginLeft: 50,
//   },
//   textPara2: {
//     fontSize: 16,
//     fontFamily: FontFamily.Regular,
//     color: "#6B7280",
//     marginTop: 6,
//     // marginLeft: '2%',
//     marginRight: "2%",
//     lineHeight: 20,
//   },
//   buttonText: {
//     width: "100%",
//     // height: 20,
//     fontFamily: FontFamily.Regular,
//     fontSize: 15,
//     // lineHeight: 20,
//     color: "#6B7280",
//     //marginLeft: "7%",
//   },
//   //css adding .............
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   BodyContainer: {
//     flex: 0.25,
//     marginTop: verticalScale(250),
//     // top: scale(30),
//   },
//   TextInputContainer: {
//     marginTop: scale(5),
//     display: "flex",
//     flex: 0.75,
//     flexDirection: "row",
//     //justifyContent: "space-around",
//     //marginHorizontal: verticalScale(200),
//   },
//   MobileContainer: {
//     padding: scale(10),
//     height: scale(65),
//     borderWidth: 0.55,
//     left: 10,
//     borderRadius: scale(8),
//     flex: 0.7,
//     // backgroundColor: 'blue'
//   },
//   countryContainer: {
//     padding: scale(10),
//     height: scale(65),
//     flex: 0.2,
//     backgroundColor: "#F9FAFB",
//     borderWidth: 0.45,
//     borderRadius: scale(8),
//     justifyContent: "space-between",
//   },
//   heading: {
//     flex: 0.25,
//     width: scale(250),
//     //left: scale(24),
//     // backgroundColor: 'blue'

//     // top: scale(35),
//   },
//   headingText: {
//     color: "#111827",
//     fontFamily: FontFamily.Bold,
//     // lineHeight: scale(36),
//     marginTop: verticalScale(250),
//     fontSize: scale(24),
//   },

//   // checkContainer: {
//   //   flex:0.25,
//   //   marginLeft: '8%'
//   // },
//   // label: {
//   //   width: '80%',
//   //   height: 40,
//   //   fontFamily: FontFamily.Regular,
//   //   fontSize: 16,
//   //   lineHeight: 20,
//   //   // color: '#111827',
//   //   marginTop: 6,
//   //   fontWeight: "500",
//   //   color: "#7E41FF",
//   //   textDecorationLine: 'underline',
//   // },
//   // button: {
//   //   flex:0.1,
//   //   flexDirection: 'row',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   alignContent: 'center',
//   //   paddingTop: 0,
//   //   paddingBottom: 0,
//   //   paddingRight: 12,
//   //   paddingLeft: 12,
//   //   width: '85%',
//   //   height: 58,
//   //   borderRadius: 8,
//   //   marginLeft: '8%',
//   //   marginTop: '5%',
//   //   alignSelf: 'stretch',
//   //   color: '#fff'
//   // },
//   btntext: {
//     fontSize: 15,
//     fontWeight: "bold",
//     color: "white",
//   },
// });
