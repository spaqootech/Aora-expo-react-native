import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
import Button from '@/components/Button'

const index = () => {
  return (
    <View style={className`flex-1 justify-center items-center bg-gray-900 p-5 gap-5`}>
      <Image source={require('../assets/logo.png')} style={className`h-12 w-40`}/>
      <Image source={require('../assets/cards.png')} style={className`h-80 w-80`}/>
      <Text style={className`text-3xl font-semibold text-center text-white`}>
        Discover Endless Possiblities with 
            <Text style={className`text-orange-500`}>Aora 
            <Image source={require('../assets/path.png')} 
             style={className`absolute w-15 h-3 bottom-0 left-0`}/>
            </Text>
        </Text>
        <Text style={className`text-gray-400 text-md text-center`}>
            Where Creativity Meets Innovation : Embark on a Journey of Limitless Exploration with Aora
        </Text>
        <Button title='Continue with Email' href='/auth/signUp'/>
    </View>
  ) 
}

export default index