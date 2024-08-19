import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Card from '@/components/Card'

const profile = () => {
  return (
    <View style={className`flex-1 bg-gray-900`}>
      <View style={className`p-5`}>
        <View style={className`flex-row justify-end items-center`}>
          <Image source={require('../../assets/logout.png')} style={className`h-7 w-7`}/>
        </View>
        <View style={className`flex-col justify-center items-center gap-3`}>
        <Image source={require('../../assets/creator-4.jpg')} style={className`h-12 w-12 rounded-xl border border-orange-500`}/>
        <Text style={className`text-2xl font-semibold text-white`}>jsmastry</Text>
          <View style={className`flex-row justify-center items-center gap-3`}>
            <View>
              <Text style={className`text-white text-lg font-semibold`}>10</Text>
              <Text style={className`text-white text-gray-300`}>Posts</Text>
            </View>
            <View>
              <Text style={className`text-white text-lg font-semibold`}>1.2l</Text>
              <Text style={className`text-white text-gray-300`}>Views</Text>
            </View>
          </View>
          
        </View>
      </View>
     
     <ScrollView>
      <View>
      <Card  icon={require('../../assets/creator-2.jpg')}
      title='Todo new Videos on trending'
      creator='Spaqoo'
      image={require('../../assets/image-1.jpg')}
      />
       <Card  icon={require('../../assets/creator-3.jpg')}
      title='Todo new Videos on trending'
      creator='Spaqoo'
      image={require('../../assets/image-2.jpg')}
      />
       <Card  icon={require('../../assets/creator-4.jpg')}
      title='Todo new Videos on trending'
      creator='Spaqoo'
      image={require('../../assets/image-3.jpg')}
      />
       <Card  icon={require('../../assets/creator-1.jpg')}
      title='Todo new Videos on trending'
      creator='Spaqoo'
      image={require('../../assets/image-4.jpg')}
      />
      </View>
     </ScrollView>
    </View>
  )
}

export default profile