import { View, Text, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'

const TextInputWithLabel = ({label , placeholder}) => {
  return (
    <View>
        <Text style={className`text-gray-300 text-lg font-semibold`}>{label}</Text>
        <TextInput placeholder={placeholder} style={className`text-lg p-3 rounded-lg text-gray-400 bg-gray-900`}/>
    </View>
  )
}

export default TextInputWithLabel