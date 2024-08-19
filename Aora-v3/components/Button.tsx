import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import className from 'twrnc'
const Button = ({title ,href}) => {
  return (
  <Link href={href} style={className`bg-[#FF8C00] text-lg font-semibold w-90 p-3 text-center rounded-lg`}>
    {title}
    </Link>
  )
}

export default Button