import { View, Text } from 'react-native'
import React from 'react'

export default function Wrapper({flexDirection = 'row', children}) {
  return (
    <View
      style={{
        flexDirection: flexDirection,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      {children}
    </View>
  );
};