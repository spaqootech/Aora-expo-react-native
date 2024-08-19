import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
const Post = ({title , creator , icon ,postImage}) => {
  return (
    <View style={className`gap-3`}>
        
        <View style={className`flex-row justify-between items-center`}>
            <View style={className`flex-row gap-3 items-center justify-center`}>
            <Image source={icon} style={className`h-10 w-10 rounded-xl`}/>
            <View>
            <Text style={className`text-white text-lg font-semibold`}>{title}</Text>
            <Text style={className`text-white`}>{creator}</Text>
        </View>
            </View>
        <Image source={require('../assets/menu.png')} style={className`h-8 w-2 rounded-xl`}/>
        </View>

        <Image source={postImage} style={className`h-50 w-87 rounded-xl`}/>

    </View>
  )
}

export default Post