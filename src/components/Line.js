import React from "react";
import {View,StyleSheet} from "react-native";
import { moderateScale, verticalScale } from "../constants/scaling";

export default function Line({LineStyle}) {
  return (
    <View style={{...styles.line,...LineStyle}}>
      <View style={{ flex: 1, height: 1, backgroundColor: "#D3D3D3" }} />
    </View>
  );
}




const styles = StyleSheet.create({
  line: {
    // width:"80%",
    marginTop: verticalScale(100),
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: moderateScale(10) ,
    // color: '#6B7280'
  },
});
