import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../../components/wrapper'
import { SearchBox } from '../../components/SearchBox'
import { images } from '../../constants'

export default function ShopScreen() {
  return (
    <Wrapper
      isleft={true}
      leftImg={images.hamburgerMenu}
      isright={true}
      rightImg={images.Notifications}
      RightPress={()=>console.log("notification pressed")}
      leftPress={()=>navigation.toggleDrawer()}
    
    >
    <SearchBox />
      
    </Wrapper>
  )
}