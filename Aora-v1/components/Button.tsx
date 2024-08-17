import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import className from 'twrnc'

const Button = ({href , title}) => {
  return (
    <View>
        <Link href={href} style={className`p-4 w-[350px] font-semibold text-center bg-orange-500 rounded-md text-lg`}>
        {title}
        </Link>
    </View>
  )
}

export default Button