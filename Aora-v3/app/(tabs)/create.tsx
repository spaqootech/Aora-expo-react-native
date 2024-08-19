import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import InputWithLabel from '@/components/InputWithLabel'
import Button from '@/components/Button'

const create = () => {
  return (
    <View style={className`p-5 gap-5 flex-1 bg-[#161622]`}>
      <Text style={className`text-2xl font-semibold text-white`}>Upload Video</Text>
      <InputWithLabel label='Video Title' placeholder='Give your video a catchy title'/>

      <View>
        <Text style={className`text-gray-400 text-lg`}>Upload Video</Text>
        <View style={className`bg-[#1E1E2D] h-50 rounded-2xl flex-row justify-center items-center mt-1`}>
            <Image source={require('../../assets/upload.png')} style={className`h-10 w-10`}/>
        </View>
      </View>

      <View>
        <Text style={className`text-gray-400 text-lg`}>Thumbnail Image</Text>
        <View style={className`bg-[#1E1E2D] p-3 rounded-2xl flex-row justify-center items-center gap-3 mt-1`}>
            <Image source={require('../../assets/upload.png')} style={className`h-5 w-5`}/>
            <Text style={className`text-gray-300`}>Choose a file</Text>
        </View>
      </View>

      <InputWithLabel label='AI Prompt' placeholder='The Ai prompt of your video'/>
      <Button title='Submit & Publish' href='/profile'/>
    </View>
  )
}

export default create