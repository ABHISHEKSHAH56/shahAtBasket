import React from "react";
import {View,StyleSheet} from "react-native";
import { COLORS } from "../constants";
import { moderateScale, verticalScale } from "../constants/scaling";

export default function Line({LineStyle}) {
  return (
    <View style={{...styles.line,...LineStyle}}>
      <View style={{ flex: 1,height:0.5, borderColor:COLORS.grey,borderStyle:'dashed',borderBottomWidth:0.5 }} />
    </View>
  );
}




const styles = StyleSheet.create({
  line: {
    // width:"80%",
    
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    
  },
});
