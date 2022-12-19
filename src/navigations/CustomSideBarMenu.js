import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {images} from '../constants';
import {moderateScale, scale, verticalScale} from '../constants/scaling';
import Line from '../components/Line';
import {FontFamily} from '../constants/theme';
import LogoutComponment from '../screen/Profile/LogoutComponment';

function DraweItems(props) {
  const [focus, setfocus] = useState(false)
  return (
    <TouchableOpacity
      onPressIn={()=>setfocus(true)}
      onPressOut={()=>setfocus(false)}
      onPress={props.onPress}
      style={{
        flexDirection: 'row',
        marginVertical: verticalScale(30),
        paddingHorizontal: scale(20),
        minHeight: verticalScale(400),
        alignItems: 'center',
        backgroundColor: focus?'rgba(126, 65, 255, 0.35)':"#ffff",
        borderRadius: moderateScale(25),
      }}>
      <Image
        source={props.images}
        style={{
          height: verticalScale(200),
          width: scale(20),
          marginRight: scale(20),
          
        }}
      />
      <Text
        style={{
          color:focus?"#ffff":'#000000',
          fontWeight: '500',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default function CustomSideBarMenu({navigation}) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={{flex: 1, marginTop: 20, paddingHorizontal: scale(5)}}>
      <DrawerContentScrollView>
        <View style={{alignItems: 'center'}}>
          <Image
            source={images.Logo}
            resizeMode="contain"
            style={{height: verticalScale(1600), width: scale(300)}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: scale(10),
            alignItems:"center"
          }}>
          <View style={styles.swithBlock}>
            <Image
              source={images.user}
              style={{tintColor:'#000000'}}
            />

            <Text style={styles.contacttext}>Abhishek</Text>
          </View>
          <View style={styles.swithBlock}>
            <Image source={images.phone} style={{tintColor: '#000000',height:verticalScale(180),width:scale(18)}} />
            <Text style={styles.contacttext}>+91 8076367467</Text>
          </View>
        </View>
        <Line />

        {/* items */}

        <DraweItems
          onPress={()=>navigation.navigate("Home")}
          title={"Home"}
          images={images.home}
        
        />
        <DraweItems
          onPress={()=>navigation.navigate("Shop")}
          title={"Shop"}
          images={images.search}
        
        />
        <DraweItems
          onPress={()=>{}}
          title={"Order"}
          images={images.orders}
        
        />
        <DraweItems
          onPress={()=>navigation.navigate("Profile")}
          title={"Settings"}
          images={images.settings}
        
        />
        <DraweItems
          onPress={()=>{
            navigation.toggleDrawer()
            setModalVisible(true)
          }}
          title={"Logout"}
          images={images.logout}
        
        />
        <LogoutComponment 
          setModalVisible={setModalVisible}
          modalVisible={ modalVisible}

        
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  swithBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contacttext: {
    fontWeight: '500',
    fontSize: 12,
    marginLeft: 8,
    color: '#000000',
  },
});
