import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'

const InputWithIcon = ({placeholder}) => {
  return (
  <View>
    <TextInput placeholder={placeholder} 
     style={className`p-3 text-lg bg-[#1E1E2D] rounded-lg text-gray-300 pr-12`}/>
    
    <Image source={require('../assets/search.png')} 
     style={className`h-5 w-5 absolute top-5 right-5`}/>
    
    </View>
  )
}

export default InputWithIcon