import React, {useEffect, useState} from 'react';
import { Email } from '../../credentianal';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  TextInput,
  Image,
  ScrollViewComponent,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getItem, setItem} from '../../API/APIhelper';
import Button from '../../components/Button';
import Wrapper from '../../components/wrapper';
import {images, SIZES} from '../../constants';
import {scale, verticalScale} from '../../constants/scaling';
import {FontFamily} from '../../constants/theme';
import { addTheUserKey } from '../../redux/actions/main';
import LoadingLoader from '../../components/LoadingLoader';
import { updatetheUSer } from '../../API/urls';
import types from '../../redux/types';

function TextInputcontainer({title,editable,icons,keyboardType,value,onChange,maxLength,contentType,Errormsg}) {
  return (
    <View style={styles.TextInputContainer}>
      <View style={styles.MobileContainer}>
        <View>
          <Text
            style={{
              fontFamily: FontFamily.Medium,
              color: '#868D9A',
              fontWeight: '400',
              fontSize: scale(12),
            }}>
            {title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              // marginTop: 4,
              height: verticalScale(350),
              padding: 0,
              margin: 0,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight:scale(20)
            }}>
            <Image source={icons} style={{ width:scale(20),height:verticalScale(200)}}/>
          </View>
          <View>
            {
              editable?
              <TextInput value={value}
                style={{
                  height: verticalScale(350),
                  width: SIZES.width-scale(110),
                  fontSize: scale(16),
                  color: 'grey',
                  padding: 0,
                  margin: 0,
                  paddingLeft: scale(3),
                  fontWeight:'bold'

                }}
              
              />
              :
              <TextInput
              maxLength={maxLength}
              textContentType={contentType}             
              keyboardType={keyboardType}
              value={value} 
              onChangeText={(text)=>onChange(text)}
              style={{
                height: verticalScale(350),
                width: SIZES.width-scale(110),
                fontSize: scale(16),
                color: '#000000',
                padding: 0,
                margin: 0,
                paddingLeft: scale(3),
                fontWeight:'bold'
              }}
              
              
            />
            }
          </View>
        </View>
        <View>
      <Text style={{color: "red",marginVertical:verticalScale(60)}}>
          {Errormsg}
      </Text>
      </View>
      </View>
    
    </View>
  );
}

const Addresss = ({navigation,route}) => {
  const isBack = route.params?.isBack;
  const {LangData, UserData} = useSelector(state => state.lang);  
  const [showloader, setshowloader] = useState(false)
  const [AddressInput, setAddressInput] = useState({
    streetAddress:UserData?.Address?.streetAddress ?? "",
    city:UserData?.Address?.city ?? "",
    state:"DELHI",
    pincode:UserData?.Address?.pincode ?? "",
    country:"India"

  })
  const [AddressInputErr, setAddressInputErr] = useState({
    streetAddress:"",
    city:"",
    pincode:""
  })
  const dispatch=useDispatch()
 
  

  const checker=()=>{
    
    setAddressInputErr({
      streetAddress:"",
      city:"",
      pincode:""

    })
    console.log(AddressInput,AddressInputErr)
    if(AddressInput.streetAddress.length<10) {
      setAddressInputErr({AddressInputErr,streetAddress:  `Street Address length  can't be less than 10 `})
      return false;
    }
    if(AddressInput.city.length<5) {
      setAddressInputErr({AddressInputErr,city:  `City Address length  can't be less than 5 `})
      return false;
    }
    if(!AddressInput.pincode.match("^[1-9][0-9]{5}$")) {
      setAddressInputErr({AddressInputErr,pincode:"Pincode must be 6 digit & valid "})
    }

    return true

  }

  const handleFlow=async()=>{
    if(checker())
    { setshowloader(true)
      
      await updatetheUSer({data:{Address:AddressInput}},UserData.UserId).then((res)=>{
        dispatch({
          type:types.USER_DATA,
          payload:res.data.attributes
        })
        setItem("UserDetails",res.data.attributes)

      })
      console.log(UserData)
      if(isBack)
      {
        ToastAndroid.show("Your address has updated! ",ToastAndroid.SHORT)
        navigation.goBack()
      }
      else navigation.navigate("App")
      setshowloader(false)
    }

  }


 

 
  if(showloader) return <LoadingLoader />
  return (
    <ScrollView style={{backgroundColor:'#fff'}} showsVerticalScrollIndicator={false}>
    <Wrapper
      >
      <View style={{flex: 0.8}}>
        <View style={styles.profilebodytable}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#000000'}}>            
            Enter Your Address
          </Text>
        </View>

        <TextInputcontainer
          title={"Street Address/ floor Number"}
          icons={images.street}
          value={AddressInput.streetAddress}
          keyboardType="ascii-capable"
          maxLength={50}
          onChange={(x)=>setAddressInput({...AddressInput,streetAddress:x})}
          contentType="name"
          Errormsg={AddressInputErr.streetAddress}
          
          />
          <TextInputcontainer
          title={"Nearby place / city "}
          icons={images.city}
          value={AddressInput.city}
          maxLength={50}
          keyboardType="ascii-capable"
          onChange={(x)=>setAddressInput({...AddressInput,city:x})}
          contentType="name"
          Errormsg={AddressInputErr.city}
          
          />
         <TextInputcontainer
          title={"State"}
          icons={images.delhi}
          value={"DELHI"}
          keyboardType="ascii-capable"
          editable={true}

          
          />
          <TextInputcontainer
          title={"Pincode"}
          icons={images.pincode}
          value={AddressInput.pincode}
          maxLength={6}
          keyboardType="numeric"
          onChange={(x)=>setAddressInput({...AddressInput,pincode:x})}
          contentType="postalCode"
          Errormsg={AddressInputErr.pincode}
          
          />
      </View>

      <View style={{flex: 0.2, justifyContent: 'flex-start'}}>
        <Button          
          buttonText={"Continue"}
          Press={handleFlow}
        />
      </View>
    </Wrapper>
    </ScrollView>
  );
};

export default Addresss;

const styles = StyleSheet.create({
  profilebodytable: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    width: '90%',
    marginVertical: verticalScale(100),
  },

  TextInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical:verticalScale(100)
  },
  MobileContainer: {
    padding: scale(10),
    height: verticalScale(700),
    borderWidth: 0.55,
    borderRadius: scale(8),
    flex: 1,
    borderColor: '#B6BAC3',
    backgroundColor: '#F9FAFB',
  },
});
