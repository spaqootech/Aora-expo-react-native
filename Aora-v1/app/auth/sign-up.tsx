import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import TextInputWithLabel from '@/components/TextInputWithLabel'
import Button from '@/components/Button'
import { Link } from 'expo-router'

const signUp = () => {
  return (
    <View style={className`flex-1 p-5 bg-black justify-center gap-5`}>
        <Image source={require('../../assets/images/logo.png')} style={className`h-12 w-40`}/>
      <Text style={className`text-white text-3xl font-semibold`}>Sign Up</Text>
      <TextInputWithLabel label='Username' placeholder='your unique username'/>
      <TextInputWithLabel label='Email' placeholder='your email'/>
      <TextInputWithLabel label='Password' placeholder='your password'/>
      <Button href='/auth/sign-in' title='Sign Up'/>
      <Text style={className`text-gray-400 text-center`}>
        Already have an account? 
        <Link href='/auth/sign-in' style={className`text-orange-500 font-semibold`}> Login</Link>
      </Text>
    </View>
  )
}

export default signUp