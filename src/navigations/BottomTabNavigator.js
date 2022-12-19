// import { View, Text,Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { scale, verticalScale } from '../constants/scaling';
// import { images } from '../constants';
// import MarketingScreen from '../screen/MarketingScreen';
// import MyLeads from '../screen/MyLeads';
// import CreateLead from '../screen/CreateLeads';
// import { getItem, setItem } from '../API/APIhelper';
// import TermsConditionComponent from '../constants/ModalComponent';
// import { CommonActions } from '@react-navigation/native';

// const Tab = createBottomTabNavigator();

// export default function BottomNavigator({navigation}) {
//   const [modalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     const item=async()=>await getItem("Terms&Connections").then((res)=>{
//       console.log(res)
//       if(!res) setModalVisible(true)
//       else setModalVisible(false)

//     }).catch((err)=>{
//       console.log(err)
//       setModalVisible(true)
//     })
//     item()
    
//   }, [])


  





//   function IconComponment({Img,isFocused,name}){
//     return (
//       <View style={{       
//         alignItems:'center'
//       }}>
//         <Image source={Img} 
//             resizeMode = 'contain'
//             style={{
//               width : scale(25),
//               height : verticalScale(300),
//               tintColor: isFocused ?"#7E41FF":"#868D9A",             
              
//             }}
//         />
//         <View>
//           <Text style={{
//             fontSize:14,
//             fontWeight:'500',
//             color:isFocused ? "#7E41FF":"#868D9A"
//           }} >{name}</Text>
//         </View>
//       </View>
//     )
//   }

//   return (
//     <>
//     <TermsConditionComponent
//           modalVisible={modalVisible}
//           PressHandller={async()=>{
//             setModalVisible(false)
//             await setItem("Terms&Connections","Accepted")           

//           }}
//           onRequestClose={()=>{    
           
//             setModalVisible(false)
//             navigation.dispatch(
//               CommonActions.reset({
//                 index: 0,
//                 routes: [{ name: "App" }],
//               })
//             );
//           }}
//         />
//     <Tab.Navigator
        
//       activeColor='#7E41FF'
//       inactiveColor='#868D9A'  
//       initialRouteName='MyLeads'
//       screenOptions={{
//         headerShown:false,
//         tabBarStyle:{
//           backgroundColor:'#ffff',
//           height:verticalScale(700)
//         },
//         tabBarItemStyle:{
          
//         }

//       }}
      
      
      
//       >
        
//       <Tab.Screen 
//           name="Marketing"  
//           component={MarketingScreen}          
//           options={{ 
//             tabBarShowLabel:false,           
//             tabBarIcon: ({focused})=> <IconComponment isFocused={focused} Img={images.marketingtab}  name="Marketing" />
            
//           }}
//       />
//       <Tab.Screen 
//           name="MyLeads" 
//           component={MyLeads}
//           options={{ 
//             tabBarShowLabel:false,
//             tabBarIcon: ({focused})=> <IconComponment isFocused={focused} Img={images.myLeadtab}  name="My Leads" />,
//             headerShown:false
            
//           }}
          
//        />
//       <Tab.Screen 
//           name="Create Lead" 
//           component={CreateLead}          
//           options={{
//             tabBarShowLabel:false,
//             tabBarIcon: ({focused})=> <IconComponment isFocused={focused} Img={images.createLeadtab} name="Create Lead"  />
//           }}
//       />
//     </Tab.Navigator>
//     </>
//   )
// }