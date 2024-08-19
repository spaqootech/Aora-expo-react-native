import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import InputWithLabel from '@/components/InputWithLabel'
import Button from '@/components/Button'
import { Link } from 'expo-router'

const signUp = () => {
  return (
    <View style={className`bg-gray-900 flex-1 justify-center gap-5 p-5`}>
      <Image source={require('../../assets/logo.png')} style={className`h-12 w-40`}/>
      <Text style={className`text-3xl font-semibold text-white`}>Sign Up</Text>
      <InputWithLabel label='Username' placeholder='Your unique username'/>
      <InputWithLabel label='Email' placeholder='Your Email'/>
      <InputWithLabel label='Password' placeholder='Your Password'/>
      <Button title='Sign Up' href='/auth/signIn'/>
      <Text style={className`text-center text-white text-lg text-gray-300`}>Already have an Account 
        <Link href='/auth/signIn' style={className`text-orange-500 font-semibold`}> Login</Link>
      </Text>
    </View>
  )
}

export default signUp