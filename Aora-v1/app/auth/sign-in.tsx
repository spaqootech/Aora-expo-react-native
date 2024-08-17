import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import TextInputWithLabel from '@/components/TextInputWithLabel'
import Button from '@/components/Button'
import { Link } from 'expo-router'

const signIn = () => {
  return (
    <View style={className`flex-1 p-5 bg-black justify-center gap-5`}>
        <Image source={require('../../assets/images/logo.png')} style={className`h-12 w-40`}/>
      <Text style={className`text-white text-3xl font-semibold`}>Sign Up</Text>
      <TextInputWithLabel label='Email' placeholder='your email'/>
      <TextInputWithLabel label='Password' placeholder='your password'/>
      <Button href='/home' title='Sign In'/>
      <Text style={className`text-gray-400 text-center`}>
        Don't have an account? 
        <Link href='/auth/sign-up' style={className`text-orange-500 font-semibold`}> Sign Up</Link>
      </Text>
    </View>
  )
}

export default signIn