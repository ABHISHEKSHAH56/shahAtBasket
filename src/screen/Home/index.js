import { View, Text } from 'react-native'
import React from 'react'
import { SearchBox } from '../../components/SearchBox'
import Wrapper from '../../components/wrapper'
import { images } from '../../constants'

export default function HomeScreen({navigation}) {
  
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