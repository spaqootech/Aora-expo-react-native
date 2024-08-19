import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'

const Card = ({icon , title , creator ,image}) => {
  return (
    
    <View style={className`p-5 pt-0 flex-col gap-3`}>
    <View style={className`flex-row justify-between items-center`}>
        <View style={className`flex-row justify-start items-center gap-2`}>
        <Image source={icon} style={className`h-7 w-7 rounded-lg`}/>
        <View>
            <Text style={className`text-md text-white font-semibold`}>{title}</Text>
            <Text style={className`text-md text-white `}>{creator}</Text>
        </View>
        </View>
        <Image source={require('../assets/menu.png')} style={className`h-8 w-2`}/>
    </View>
    <Image source={image} style={className`w-[325px] h-50 rounded-xl`}/>
</View>
  )
}

export default Card