import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '../constants/scaling';
import {COLORS, images} from '../constants';

export default function Wrapper({
    navigation,
  children,
  isleft,
  isright,
  title,
  leftPress,
  RightPress,
  rightImg,
  leftImg
}) {
    
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: scale(10),
      }}>
      <View
        style={{
          height: verticalScale(600),
          width: '100%',
          paddingVertical: verticalScale(100),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {isleft ? (
          <TouchableOpacity onPress={leftPress ? leftPress : () => {}}>
            <Image
              source={leftImg}
              style={{
                height: verticalScale(200),
                width: scale(20),
              }}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <View
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {title ? (
            <Text
              style={{
                color: '#000000',
                fontWeight: '500',
                textTransform: 'capitalize',
              }}>
              {title}
            </Text>
          ) : (
            <Image
              source={images.Logo}
              style={{
                height: verticalScale(500),
                width: scale(80),
              }}
            />
          )}
        </View>
        {isright ? (
          <TouchableOpacity
            onPress={RightPress ? RightPress : () => {}}
            style={{position: 'absolute', right: 0}}>
            <Image
              source={rightImg}
              style={{
                alignSelf: 'flex-end',
                height: verticalScale(200),
                width: scale(20),
              }}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
      {children}
    </View>
  );
}
