import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import { Image, View } from 'react-native';
import { images, SIZES } from '../constants';
import { scale, verticalScale } from '../constants/scaling';
import HomeScreen from '../screen/Home';
import ProfileScreen from '../screen/Profile';
import EditProfile from '../screen/Profile/EditProfile';
import ShopScreen from '../screen/shop';
import CustomSideBarMenu from './CustomSideBarMenu';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const LogoTitle = () => (
    <View
      style={{
        flex: 1,
        width: SIZES.width-140,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={images.Logo} style={{width:scale(50),height:verticalScale(600)}} />
    </View>
  );
  return (
    <>
      <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props => <CustomSideBarMenu {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen}  />
        <Drawer.Screen name="Shop" component={ShopScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />       
      </Drawer.Navigator>
    </>
  );
};
export default DrawerNavigator;

// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

// const styles = StyleSheet.create({
//   sideMenuProfileIcon: {
//     resizeMode: 'contain',
//     width: moderateScale(88),
//     height: verticalScale(1000),
//   },
//   iconStyle: {
//     width: 15,
//     height: 15,
//     marginHorizontal: 5,
//   },
//   customItem: {
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   swithBlock: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // marginVertical: 30
//   },
//   contacttext: {
//     fontWeight: '500',
//     fontSize: 12,
//     marginLeft: 8,
//     fontFamily: FontFamily.Regular,
//     color: '#111827',
//   },
// });
