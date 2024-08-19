import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { TextInput } from 'react-native-gesture-handler'
import Card from '@/components/Card'

const saved = () => {
  return (
    <View style={className`p-5 flex-1 bg-gray-900 gap-5`}>
      <Text style={className`text-white text-3xl font-semibold`}>Saved Videos</Text>
      <View>
        <TextInput placeholder='Search your saved videos' style={className`p-3 text-lg bg-gray-800 p-3 rounded-lg text-gray-200`}/>
        <Image source={require('../../assets/search.png')} style={className`h-5 w-5 absolute right-5 top-5`}/>
      </View>
      <ScrollView>
        <View>
          <Card 
          icon={require('../../assets/creator-4.jpg')}
          title='Todays best Video'
          creator='Niklas Cristal'
          image={require('../../assets/image-1.jpg')}
          />

          <Card 
          icon={require('../../assets/creator-3.jpg')}
          title='Todays best Video'
          creator='Niklas Cristal'
          image={require('../../assets/image-2.jpg')}
          />

          <Card 
          icon={require('../../assets/creator-2.jpg')}
          title='Todays best Video'
          creator='Niklas Cristal'
          image={require('../../assets/image-3.jpg')}
          />

          <Card 
          icon={require('../../assets/creator-1.jpg')}
          title='Todays best Video'
          creator='Niklas Cristal'
          image={require('../../assets/image-4.jpg')}
          />

        </View>
      </ScrollView>
    </View>
  )
}

export default saved