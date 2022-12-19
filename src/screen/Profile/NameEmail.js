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
} from 'react-native';
import {useSelector} from 'react-redux';
import {getItem} from '../../API/APIhelper';
import Button from '../../components/Button';
import Wrapper from '../../components/wrapper';
import {images, SIZES} from '../../constants';
import {scale, verticalScale} from '../../constants/scaling';
import {FontFamily} from '../../constants/theme';

function TextInputcontainer({title,icons,keyboardType,value,onChange,maxLength,contentType}) {
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
            <TextInput
              maxLength={maxLength}
              textContentType={contentType}             
              keyboardType={keyboardType}
              value={value} // clearButtonMode="always"
              onChangeText={(text)=>onChange(text)}
              style={{
                height: verticalScale(350),
                width: SIZES.width-scale(110),
                fontSize: scale(16),
                fontFamily: FontFamily.Regular,
                color: '#111827',
                padding: 0,
                margin: 0,
                paddingLeft: scale(3),
              }}
              
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const NameEmail = ({navigation}) => {
  const {LangData, LangError} = useSelector(state => state.lang);
 const [Name, setName] = useState("")
 const [email, setemail] = useState("")

 const handleFlow=()=>{
    
 }


 

 

  return (
    <Wrapper>
      <View style={{flex: 0.8}}>
        <View style={styles.profilebodytable}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#000000'}}>            
            Enter Your Details
          </Text>
        </View>

        <TextInputcontainer
          title={"Enter Your Name"}
          icons={images.idcard}
          value={Name}
          keyboardType="ascii-capable"
          maxLength={26}
          onChange={(x)=>setName(x)}
          contentType="name"
          
          />
         <TextInputcontainer
          title={"Enter your email -(optional)"}
          icons={images.email}
          value={email}
          keyboardType="email-pad"
          onChange={(x)=>setemail(x)}
          contentType="emailAddress"
          
          />
      </View>

      <View style={{flex: 0.2, justifyContent: 'flex-start'}}>
        <Button
          disable={Name.length >2 ? undefined :true}
          buttonText={"Continue"}
          Press={Name.length >2?handleFlow:()=>{}}
        />
      </View>
    </Wrapper>
  );
};

export default NameEmail;

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
