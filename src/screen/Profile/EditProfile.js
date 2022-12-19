import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, BackHandler, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { getItem } from "../../API/APIhelper";
import Button from "../../components/Button";
import Wrapper from "../../components/wrapper";
import { images, SIZES } from "../../constants";
import { scale, verticalScale } from "../../constants/scaling";
import { FontFamily } from "../../constants/theme";





const EditProfile = ({ navigation }) => {
  const {LangData, LangError} = useSelector(state => state.lang);
  const [PhoneNumber, setPhoneNumber] = useState();
  const [number, setNumber] = useState("");
  const [enterPhoneNumber, setenterPhoneNumber] = useState();
  useEffect(() => {
    getAllData();
  }, []); 

  const getAllData = async () => {
    const phone = await getItem("phonenumber");
    setPhoneNumber(phone);
  };
  
  return (
    <Wrapper
    isleft={true}
    leftImg={images.Line}
    leftPress={()=>navigation.goBack()}
    >
      <View style={{ flex: 0.8 }}>
        <View style={styles.profilebodytable}>
          <Text style={{ marginLeft: 0, marginTop: verticalScale(300), color: "#868D9A", fontSize: scale(12), fontWeight: '400', fontFamily: FontFamily.Regular }}>
            {LangData.existing_number}
          </Text>
          <Text
            style={{
              marginLeft: 0,
              fontWeight: "500",
              fontSize: scale(16),
              color: '#868D9A',
              fontFamily: FontFamily.Medium
            }}
          >
            {PhoneNumber}
          </Text>
        </View>
        <View style={{ marginVertical: verticalScale(300) }}>
        <View style={{flex:1}}>
        <View style={styles.TextInputContainer}>
          <View style={styles.MobileContainer}>
            <View>
              <Text
                style={{
                  fontFamily: FontFamily.Medium,
                  color: '#868D9A',
                  fontWeight: "400",
                  fontSize: scale(12),
                }}
              >
                {LangData?.new_number}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  // marginTop: 4,
                  height: verticalScale(350),
                  padding: 0,
                  margin: 0,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: FontFamily.Regular,
                    color: "#868D9A",
                    fontWeight: "400",
                    fontSize: scale(16),
                  }}
                >
                  +91
                </Text>
              </View>
              <View>
                <TextInput
                  maxLength={10}
                  keyboardType="numeric"
                  value={number}
                  // clearButtonMode="always"
                  onChangeText={(text) => setNumber(text.replace(/[^0-9]/g, ''))}                
                  style={{
                    height: verticalScale(350),
                    width: scale(175),
                    fontSize: scale(16),
                    fontFamily: FontFamily.Regular,
                    color: "#111827",
                    padding: 0,
                    margin: 0,
                    paddingLeft: scale(3)
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
        </View>
      </View>

      <View style={{ flex: 0.2, justifyContent: "flex-start" }}>
        <Button
          disable={number.length != 10? true:undefined}
          buttonText={LangData.update}
          Press={()=> number.length == 10
            ? navigation.navigate("Onboarding", { screen:'PhoneAuthScreen',params:{
              mobileNumber:number
            } })
            : null}
          
        
        
        
        />
       
      </View>
    </Wrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  
  
  

  profilebodytable: {
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
    width: "90%",
    height: scale(90),
  },
 
 
  TextInputContainer: {
    display: "flex",
    flex: 0.75,
    flexDirection: "row",
    
  },
  MobileContainer: {
    padding: scale(10),
    height: verticalScale(700),
    borderWidth: 0.55,
    borderRadius: scale(8),
    flex: 1,
    borderColor: '#B6BAC3',
    backgroundColor: '#F9FAFB'
  },

 
 
  
});
