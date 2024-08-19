import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
import Button from '@/components/Button'

const index = () => {
  return (
    <View style={className`bg-[#161622] flex-1 flex-col justify-center items-center gap-5 p-5`}>
        <Image source={require('../assets/logo.png')} style={className`h-12 w-40`}/>
        <Image source={require('../assets/cards.png')} style={className`h-70 w-70`}/>
        <Text style={className`text-3xl font-semibold text-center text-white`}>
            Discover endless Possiblities with 
            <Text style={className`text-[#FF8E01]`}> Aora
                <Image source={require('../assets/path.png')} style={className`h-3 w-15 absolute bottom-0 right-1`}/>
            </Text>
        </Text>
        <Text style={className`text-gray-300 text-center px-5`}>
        Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
        </Text>
        <Button href='/auth/signUp' title='Continue with Google'/>
    </View>
  )
}

export default index