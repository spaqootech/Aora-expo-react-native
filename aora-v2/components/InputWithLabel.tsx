import { View, Text, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'

const InputWithLabel = ({label , placeholder}) => {
  return (
    <View>
    <Text style={className`text-gray-300 text-lg`}>{label}</Text>
    <TextInput 
     style={className`text-lg text-gray-300 p-3 bg-gray-800 rounded-lg mt-1`} 
      placeholder={placeholder}/>
  </View>
  )
}

export default InputWithLabel