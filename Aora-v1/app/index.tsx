import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Button from '@/components/Button'

const index = () => {
  return (
    <View style={className`flex-1 bg-black p-5 gap-5 justify-center items-center`}>
      <Image source={require('../assets/images/logo.png')} style={className`h-12 w-40`}/>
      <Image source={require('../assets/images/cards.png')} style={className`h-70 w-80`}/>
      <Text style={className`text-4xl font-semibold text-center text-white`}>
        Discover Endless Possiblities with <Text style={className`text-orange-500`}>Aora</Text>
        </Text>
        <Text style={className`text-gray-300 text-center text-md`}>
            Where Creativity Meets Innovation : Embark on a Journey of Limitless Exploration with Aora
        </Text>
        <Button title='Continue with Email' href='/auth/sign-up'/>
    </View>
  )
}

export default index