import { View, Text, Modal, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { removeItem } from '../../API/APIhelper';
import { useSelector } from 'react-redux';
import { FontFamily } from '../../constants/theme';
import { moderateScale, scale, verticalScale } from '../../constants/scaling';
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function LogoutComponment({setModalVisible,modalVisible}) {
    const {LangData}=useSelector((state)=>state.lang)  
    const navigation=useNavigation()  
    
    return (
    <Modal
        style={{ backgroundColor: "rgb(0,0,0,0.8)" }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text numberOfLines={2}
                style={{
                  fontWeight: "500",
                  color: "#000000",
                  fontFamily: FontFamily.Regular,
                  fontSize: scale(14),
                }}
              >
                {LangData?.sure_logout}
              </Text>
              {/* <Text
                style={{
                  fontWeight: "500",
                  color: "#000000",
                  fontFamily: FontFamily.Regular,
                  fontSize: scale(14),
                }}
              >
                {LangData?.logout}?
              </Text> */}
            </View>
            <View
              style={{
                marginTop: verticalScale(100),
                backgroundColor: "#D9D9D9",
                height: verticalScale(10),
                marginVertical: verticalScale(50),
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: scale(10),
              }}
            >
              <TouchableOpacity
                style={{
                  ...styles.buttonmodal,
                  backgroundColor:"#D84822"
                }}
                onPress={() =>setModalVisible(false)}
              >
                <Text
                  style={{
                    ...styles.textStyle,
                    color: "#fff",
                  }}
                >
                  {LangData?.cancel}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.buttonmodal,
                  marginLeft: verticalScale(100)
                }}
                onPress={async () => {
                  setModalVisible(false);
                  await removeItem("token");
                  await removeItem("phonenumber");
                  navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{ name: "AuthLoading" }],
                    })
                  )}}
              >
                <Text style={styles.textStyle}> {LangData?.logout} </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles=StyleSheet.create({
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
})