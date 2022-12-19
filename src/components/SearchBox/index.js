import React, { Component } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { images } from "../../constants";
import { scale, verticalScale } from "../../constants/scaling";
export const SearchBox = ({
  handleText,
  placeholder="Search your fruits & veggi",
  handleSubmit,
  handleCross,
  cross,
  value,
}) => {
  let iconColor = "white";
  if (cross || value) {
    iconColor = "#cacaca";
  }
  return (
    <View style={[styles.container, { width: "100%" }]}>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image source={images.settings} style={{height:verticalScale(200),width:scale(20)}} />
        <TextInput
          returnKeyType="search"
          onChangeText={(text) => {
            handleText(text);
          }}
          value={value}
          editable={true}
          placeholder={placeholder}
          style={[styles.input, { color: "black" }]}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    flexShrink: 1,
    flexWrap: "wrap",
    width: "80%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#D3D8DF",
    height: 40,
    opacity:0.9,

    backgroundColor: "white",
  },
  placeholderStyle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
    color: "red",
  },
  input: {
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    width: "70%",
    fontFamily: "Inter",
    fontSize: 12,
  },
});
