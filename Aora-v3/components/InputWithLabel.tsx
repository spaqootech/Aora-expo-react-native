import { View, Text, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
const InputWithLabel = ({label , placeholder}) => {
  return (
    <View>
              <Text style={className`text-lg text-gray-400 mb-1`}>{label}</Text>
              <TextInput placeholder={placeholder} 
               style={className`p-3 text-lg text-gray-200 bg-[#1E1E2D] rounded-lg`}/>
    </View>
  )
}

export default InputWithLabel