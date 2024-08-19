import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import InputWithLabel from '@/components/InputWithLabel'
import Button from '@/components/Button'
const create = () => {
  return (
    <View style={className`flex-1 p-5 bg-gray-900 gap-5`}>
      <Text style={className`text-white text-3xl font-semibold`}>Upload Video</Text>
      <InputWithLabel label='Video Title' placeholder='Give your video a catchy title'/>

      <View>
        <Text style={className`text-lg text-gray-300`}>Upload Video</Text>
        <View style={className`bg-gray-800 h-40 rounded-xl mt-2 flex-row justify-center items-center`}>
          <Image source={require('../../assets/upload.png')} style={className`h-20 w-20`}/>
        </View>
      </View>

      <View>
        <Text style={className`text-lg text-gray-300`}>Thumbnail Image</Text>
        <View style={className`bg-gray-800 p-3 gap-2 rounded-xl mt-2 flex-row justify-center items-center`}>
          <Image source={require('../../assets/upload.png')} style={className`h-6 w-6`}/>
          <Text style={className`text-gray-300 text-lg`}>Choose a file</Text>
        </View>
      </View>

      <InputWithLabel label='AI Prompt' placeholder='the Ai prompt of your video'/>
      <Button title='Submit & Publish' href='/profile'/>
    </View>
  )
}

export default create