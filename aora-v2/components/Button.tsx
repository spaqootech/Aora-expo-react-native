import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import className from 'twrnc'
const Button = ({title , href}) => {
  return (
    <Link href={href} style={className`bg-orange-500 p-3 text-lg font-semibold rounded-lg w-[365px] text-center`}>
    {title}
    </Link>
  )
}

export default Button