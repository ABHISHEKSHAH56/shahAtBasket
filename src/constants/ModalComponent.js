// import { View, Text, Modal,StyleSheet } from 'react-native'
// import React from 'react'
// import { images } from '.';
// import { moderateScale, scale, verticalScale } from './scaling';
// import Button from '../components/Button';
// import ShareComponment from '../screen/MarketingScreen/componment/ShareComponment';

// export default function TermsConditionComponent({modalVisible,PressHandller,onRequestClose}) {
//   return (
//     <Modal
//         style={{ backgroundColor: "rgb(0,0,0,0.8)" }}
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={onRequestClose}
//       >
//         <View style={style.centeredView}>
//             <View style={style.modalView}>
//                 <ShareComponment
//                     ContainerStyles={{top:verticalScale(100),right:scale(20)}}                    
//                     ImgSource={images.Cross}
//                     ImgStyle={{height:verticalScale(200),width:scale(20)}}
//                     OnPress={onRequestClose}                   
                
//                 />
//                 <View style={style.modalHeading}>
//                     <Text style={{fontSize:16,color:'#000000',fontWeight:'500'}}>Terms And Conditions</Text>
//                 </View>
//                 <View>
//                     <Text style={{marginVertical:scale(10)}}>
//                         Lorem ipsum dolor sit amet consectur, teturing adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </Text>
//                     <Text style={{marginVertical:scale(10)}}>
//                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                     </Text>
//                     <Text style={{marginVertical:scale(10)}}>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Excepteur sint occaecat cupidatat non proident
//                     </Text>
//                 </View>

//                 <View style={{flexDirection:'row',justifyContent:'center'}}>
//                     <Button 
//                         buttonText={"Agree"}
//                         Press={PressHandller}                   
//                     />
//                 </View>
                


//             </View>

//         </View>
//       </Modal>
//   )
// }


// const style=StyleSheet.create({
//     centeredView: {
//         backgroundColor: "rgba(0, 0, 0, 0.8)",
//         opacity: 0.9,
//         flex: 1,
//         justifyContent: "center",
//       },
//       modalView: {
//         marginHorizontal: moderateScale(20),
//         backgroundColor: "#ffffff",
//         borderRadius: scale(12),
//         padding: scale(20),
//         height: verticalScale(5400),
//       },
//       modalHeading:{
//         marginVertical:verticalScale(150),
//         alignItems:'center'
//       }
// })