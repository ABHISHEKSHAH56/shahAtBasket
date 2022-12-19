import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from "react-native";
import SearchBox from "../../components/SearchBox";
import { styles } from "./../styles";

export const Search = () => {
    return(
        <View>
            <SearchBox/>
        </View>
    )
}