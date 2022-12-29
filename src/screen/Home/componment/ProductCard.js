import {View, Text, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { scale, verticalScale } from '../../../constants/scaling';
import { COLORS } from '../../../constants';
import Line from '../../../components/Line';








export function ProductDetails({item,isPressed,onPress}) {
    //  const [Pressed, setPressed] = useState(false)
    const isSelected=isPressed==item.id
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: verticalScale(200),
          width: scale(70),
          backgroundColor: isSelected?COLORS.primary60: COLORS.lightGrey,
          marginRight: scale(5),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: scale(5)
        }}>
        <Text
          style={{
            fontSize:11,
            color: isSelected?"#FFF": '#000',
          }}>
          {`${item?.attributes?.Qty}  ${item?.attributes?.Measurment}`}{' '}
        </Text>
      </TouchableOpacity>
    );
  }
  
  export default function ProductCard({data}) {
    const [detailsSelected, setdetailsSelected] = useState()
    const [RateOfProduct, setRateOfProduct] = useState(data?.attributes?.product_details.data[0]?.attributes.Rate)
   
    const {attributes}=data
    let EnglishName=attributes?.Name
    EnglishName=EnglishName.split("(")[0]
    return (
      <>
      <View
        style={{
          flexDirection: 'row',
          zIndex: 10,
          backgroundColor: "#fff",
          height: verticalScale(1400),
          marginVertical: verticalScale(100),
          borderRadius: scale(10)
        }}>
          <View
          style={{
            flex: 0.4,
            padding: verticalScale(50),
            backgroundColor: "#ffffff",
            borderRadius: scale(10),
            justifyContent: 'center'
          }}>
          <Image
            source={{uri: attributes.product_Images.data[0].attributes.url }}
            style={{
              height: verticalScale(1000),
            }}
            resizeMode="contain"
          />
          
        </View>
        
  
        <View
          style={{
            flex: 0.6,
            paddingVertical: scale(5),
          }}>
          <View>
            <Text
              style={{
                color: '#000000',
                fontWeight: '500',
                fontSize:16
              }}>
              {attributes?.Name}
            </Text>
          </View>
          <View style={{flexWrap:'wrap' ,marginVertical:verticalScale(100),flexDirection:"row"}}>
  
                {
                  attributes.product_details.data.map((item)=><ProductDetails
                  key={item.id}
                    item={item}
                    onPress={()=>{
                      setRateOfProduct(item.attributes.Rate)
                      setdetailsSelected(item.id)
                    }}
                    isPressed={detailsSelected}
                  
                  />)
                }
                
          </View>
          <View style={{flexDirection:'row',marginBottom:verticalScale(50),justifyContent:'space-between'}}>          
                <View style={{flexDirection:'row'}}>
                <Text  style={{color:'#000000',textDecorationLine:'line-through'}}>{'\u20B9'} {RateOfProduct*3/2}</Text>   
                <Text style={{color:'#000000',marginLeft:scale(5)}}>{'\u20B9'} {RateOfProduct}</Text>
                </View>
                <TouchableOpacity 
              style={{
                backgroundColor: COLORS.error,
                width:scale(80),
                height:verticalScale(250),
                borderRadius:scale(10),
                justifyContent:'center',
                alignItems:'center'
              }}>
              <Text style={{
                color:"#ffff",
                fontSize:10,
                fontWeight:"500"
              }}>Add </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingRight:scale(10)}}>         
            <Text numberOfLines={4} style={{fontSize:8}}>{attributes.description}</Text>
          </View>
          <View style={{marginVertical:verticalScale(200)}}>
          <Line />
          </View>
          
         
  
          
        </View>
        
        
      </View>
      
      </>
    );
  }