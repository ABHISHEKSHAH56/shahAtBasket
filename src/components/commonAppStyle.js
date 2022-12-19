import {StyleSheet, Dimensions} from 'react-native';
import { scale } from '../constants/scaling';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  }
  function hp(percentage) {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
  }
  const styles = StyleSheet.create({
    MainAppContainer: {
        flex:1,
        backgroundColor: "#fff",
        paddingHorizontal: scale(20),
        borderWidth:5
    }
  });
  
  export default styles;