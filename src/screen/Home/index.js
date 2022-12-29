import {View, Text, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SearchBox} from '../../components/SearchBox';
import Wrapper from '../../components/wrapper';
import {images, SIZES} from '../../constants';
import Slider from './componment/Slider';
import {getTheProduct} from '../../API/urls';
import {scale, verticalScale} from '../../constants/scaling';
import  Icon  from 'react-native-vector-icons/Ionicons';
import ProductCard from './componment/ProductCard';






export default function HomeScreen({navigation}) {
  const [ProductData, setProductData] = useState([]);
  const [showLoader, setshowLoader] = useState(false);
  useEffect(() => {
    
    fetchData();
   
  }, []);

  const fetchData = async () => {
    await getTheProduct()
      .then(res => {
        // console.log("after fetching ",res.data)
        setProductData(res.data.categoreys.data);
        console.log('after fetching ', ProductData);
        
      })
      .catch(err => console.log(err));
  };
  
  return (
    <Wrapper
      isleft={true}
      leftImg={images.hamburgerMenu}
      isright={true}
      rightImg={images.Notifications}
      RightPress={() => console.log('notification pressed')}
      leftPress={() => navigation.toggleDrawer()}>
      <SearchBox />
      {/* image_Slider */}
      {/* <Slider /> */}

      {/* top product */}
     
      <FlatList
        data={ProductData}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Slider />
        } 
        keyExtractor={(item)=>item.id}
        renderItem={({item,index})=>{
          const {attributes}=item
          const imgurl=attributes.image.data.attributes.url 
          console.log(typeof imgurl)         
          return(
          <>
          <View style={{height:300}}>
            <Image source={{uri:imgurl}} style={{height:300,width:SIZES.width}} resizeMode="contain"  />
            <View style={{position:'absolute',top:0,left:0}}>
            <View style={{flexDirection:'row',marginVertical:verticalScale(200)}}>
              <Icon name="caret-forward-outline" size={20} color="green" />
              <Text style={{fontSize:16,color:'#000000',fontWeight:'500'}}>{attributes.name} </Text>
            </View>
            </View>
          </View>
          <FlatList
            data={attributes.products.data}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=><ProductCard data={item} />}
          
          
          
          />

          </>
        )}}

        ListEmptyComponent={
          <View style={{marginBottom:verticalScale(100),justifyContent:'center',alignItems:'center'}}>        
          <Image source={{uri:"https://shahbasket-strapi.s3.ap-south-1.amazonaws.com/Footer_3_5a70cb9f66.png"}} style={{height:verticalScale(1800),width:SIZES.width,borderRadius:scale(10)}} resizeMode="contain"  /> 
          </View>
        }
      
      
      
      
      
      />
      
        

       

       



     
    </Wrapper>
  );
}
