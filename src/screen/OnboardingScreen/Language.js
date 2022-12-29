import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ToastAndroid, Image} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../constants/scaling';
import {COLORS, FontFamily} from '../../constants/theme';

import {RadioButton} from 'react-native-paper';
import {getItem, setItem} from '../../API/APIhelper';
import {getLan} from '../../redux/actions/main';
import {useSelector} from 'react-redux';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Line from '../../components/Line';
import {images} from '../../constants';

const Language = ({route, navigation}) => {
  const isBack = route.params?.isBack;
  const [value, setValue] = React.useState('en');
  const {LangError} = useSelector(state => state.lang);

  useEffect(() => {
    const item = async () => {
      const val = await getItem('selectedlng');
      console.log(val);
      setValue(val);
    };
    item();
  }, []);

  const handleFlow = async () => {
    await setItem('selectedlng', value);
    await getLan(value);
    if (LangError) {
      ToastAndroid.show(LangError, ToastAndroid.SHORT);
      console.log(LangError);
    } else {
      if (isBack) {
        ToastAndroid.show(
          `App language has been changed to ${
            value == 'hi' ? 'Hindi' : 'English'
          }`,
          ToastAndroid.SHORT,
        );
        navigation.navigate('App', {isBack: 'Profile'});
      } else {
        navigation.navigate('PhoneAuthScreen');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 0.3, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Image
          source={images.Logo}
          style={{width: scale(120), height: verticalScale(1200)}}
        />
      </View>

      <View style={{flex:0.4}}>
        <View style={styles.heading2}>
          <Text style={styles.textHeading2}>
            {' '}
            {value == 'hi' ? 'App की भाषा चुने ' : 'Choose app language'}
          </Text>
        </View>
        <View style={styles.inputContainer2}>
          <View>
            <RadioButton.Group
              onValueChange={async newValue => {
                setValue(newValue);
                //console.log(newValue)
                //await AsyncStorage.setItem("selectedlng", newValue).then((res)=>console.log(res)).catch((err)=>console.log(err))
              }}
              value={value}>
              <RadioButton.Item
                color={'#7A42F4'}
                label="English"
                value="en"
                style={styles.radio}
              />
              <Text style={styles.subtitle}>English (Default) </Text>
              <Line />
              <RadioButton.Item
                color={'#7A42F4'}
                label="हिंदी"
                value="hi"
                style={styles.radio}
              />
              <Text style={styles.subtitle}>Hindi</Text>
              <Line />
            </RadioButton.Group>
          </View>
        </View>
      </View>


      <View style={{flex:0.3}}>
          <Button
            Press={handleFlow}
            buttonText={
              isBack
                ? value == 'hi'
                  ? 'परिवर्तनों को सुरक्षित करें'
                  : 'Save Changes'
                : value == 'hi'
                ? 'जारी रखें'
                : 'Continue'
            }
          />
      </View>

      
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  
  inputContainer2: {
    marginTop: verticalScale(300),
    flex: 0.4,
    justifyContent: 'center',
    // marginBottom: 30,
  },
  heading2: {
    flex: 0.3,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  textHeading2: {
    fontFamily: FontFamily.Medium,
    fontWeight: '600',
    fontSize: scale(24),
    color: '#111827',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subtitle: {   
    fontFamily: FontFamily.Regular,
    color: '#6B7280',
    textAlign: 'left',
    fontWeight: '400',
    paddingHorizontal:scale(20)
  },
  radiocontainer: {
    // marginTop: 50,
    width: '100%',
  },
  radio: {
    width: '100%',
    height: verticalScale(450),
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',   
    paddingHorizontal: scale(20)
  },
});
