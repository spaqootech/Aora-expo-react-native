import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import InputWithIcon from '@/components/InputWithIcon'
import Post from '@/components/Post'
const saved = () => {
  return (
    <View style={className`flex-1 bg-[#161622] p-5`}>
      <Text style={className`text-white text-3xl font-semibold`}>Saved Videos</Text>
      <InputWithIcon placeholder='Search your saved videos'/>
 <ScrollView showsVerticalScrollIndicator={false}>
    <View style={className`flex-col gap-3 mt-3`}>
    <Post 
      creator='spaqii'
      icon={require('../../assets/creator-4.jpg')}
      postImage={require('../../assets/image-1.jpg')}
      title='New feeds '
      />
      <Post 
      creator='spaqii'
      icon={require('../../assets/creator-3.jpg')}
      postImage={require('../../assets/image-2.jpg')}
      title='New feeds '
      />
      <Post 
      creator='spaqii'
      icon={require('../../assets/creator-2.jpg')}
      postImage={require('../../assets/image-3.jpg')}
      title='New feeds '
      />
      <Post 
      creator='spaqii'
      icon={require('../../assets/creator-1.jpg')}
      postImage={require('../../assets/image-4.jpg')}
      title='New feeds '
      />
    </View>
 </ScrollView>
    </View>
  )
}

export default saved