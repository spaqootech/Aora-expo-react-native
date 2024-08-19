import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import InputWithLabel from '@/components/InputWithLabel'
import Button from '@/components/Button'
import { Link } from 'expo-router'

const signIn = () => {
  return (
    <View style={className`bg-gray-900 flex-1 justify-center gap-5 p-5`}>
      <Image source={require('../../assets/logo.png')} style={className`h-12 w-40`}/>
      <Text style={className`text-3xl font-semibold text-white`}>Sign In</Text>
      <InputWithLabel label='Email' placeholder='Your Email'/>
      <InputWithLabel label='Password' placeholder='Your Password'/>
      <Button title='Sign In' href='/home'/>
      <Text style={className`text-center text-white text-lg text-gray-300`}>Don't have an Account 
        <Link href='/auth/signUp' style={className`text-orange-500 font-semibold`}> Sign Up</Link>
      </Text>
    </View>
  )
}

export default signIn