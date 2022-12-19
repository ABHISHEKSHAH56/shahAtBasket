import { View, Text, Image, Share ,TouchableOpacity} from 'react-native'

export default function ShareComponment(props) {
  
    const onShare = async () => {
          try {
            const result = await Share.share({              
              message: props.data ? props.data :"www.google.com" ,
              title:"Campagins App"
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            alert(error.message);
          }
    }
  return (
    <TouchableOpacity  style={{position: 'absolute',...props.ContainerStyles}} onPress={props.OnPress ? props.OnPress : onShare }>
        <Image source={props.ImgSource} style={{...props.ImgStyle}} resizeMode="contain" />  
    </TouchableOpacity>
  )
}