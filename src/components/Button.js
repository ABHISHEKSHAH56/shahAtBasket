import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'
import { scale, verticalScale } from '../constants/scaling'
export default function Button({Press,disable,buttonText,containerStyle}) {
  return (
    <TouchableOpacity
        style={{...style.buttonConatiner, backgroundColor: disable ? COLORS.disable:COLORS.primary,...containerStyle}}
        onPress={Press}
    >
         <Text style={style.textStyle}> {buttonText} </Text>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({
    buttonConatiner:{
        alignItems:'center',
        justifyContent:'center',
        height:verticalScale(550),
        borderRadius:scale(10),
        minWidth:scale(200),
        marginVertical:verticalScale(200)
    },
    textStyle:{
        color:'#fff',
        textTransform:'capitalize',
        fontWeight:'500',
        fontSize:SIZES.font
    }

})