import * as React from 'react';
import { Dimensions, Image, ImageBackground, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { dataList } from '../../../constants/localData';
import { scale, verticalScale } from '../../../constants/scaling';



function RenderItem({data}){
    console.log(data)
    return(
       <Image source={{uri:data.img}} style={{height:verticalScale(1800)}} resizeMode="contain"  />
            
       
    )
}

function Slider() {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ marginVertical:verticalScale(100) }}>
            <Carousel
                loop
                style={{
                    borderRadius:scale(20),
                }}
                width={width-scale(35)}
                height={verticalScale(1800)}
                autoPlay={true}
                data={dataList}
                scrollAnimationDuration={1500}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({item})=><RenderItem data={item} key={item.userId} />}
            />
        </View>
    );
}

export default Slider;