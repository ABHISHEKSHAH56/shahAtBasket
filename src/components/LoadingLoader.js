import { View, Text, StyleSheet,Image, ActivityIndicator } from 'react-native'
import Lottie from 'lottie-react-native';
import { images } from '../constants';
import { moderateScale, scale, verticalScale } from '../constants/scaling';
import { FontFamily } from '../constants/theme';

export default function LoadingLoader({LoadingText}) {
  return (
    <View style={styles.conatainer}>
        <View style={{}}>
          <Lottie source={images.LoaderImg} style={{height: verticalScale(400),width:moderateScale(40)}} autoPlay loop />
        </View>
        <View style={{marginTop: verticalScale(280)}}>
          <Text style={{fontFamily:FontFamily.Regular,color:"#111827",fontSize: scale(16), fontWeight:"500"}}>{LoadingText}</Text>
        </View>     
    </View>
  )
}

const styles = StyleSheet.create({
    conatainer:{
        flex:1,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        zIndex:2
    }
})

