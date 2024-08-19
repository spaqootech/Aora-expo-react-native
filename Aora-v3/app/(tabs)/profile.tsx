import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Post from '@/components/Post'

const profile = () => {
  return (
    <View style={className`bg-[#161622] p-5 flex-1`}>

        <View style={className`flex-row justify-end items-end`}>
            <Image source={require('../../assets/logout.png')} style={className`h-5 w-6`}/>
        </View>


        <View style={className`flex-col justify-center items-center gap-3 mb-5`}>
            <Image source={require('../../assets/creator-1.jpg')} style={className`h-15 w-15 rounded-lg`}/>
            <Text style={className`text-xl font-semibold text-white`}>spaqoo</Text>
            <View style={className`flex-row justify-center items-center gap-5`}>
                <View>
                    <Text style={className`text-lg font-semibold text-white`}>10</Text>
                    <Text style={className`text-md text-gray-300`}>Post</Text>
                </View>
                <View>
                    <Text style={className`text-lg font-semibold text-white`}>1.3k</Text>
                    <Text style={className`text-md text-gray-300`}>Views</Text>
                </View>
            </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>          
        <View style={className`flex-col gap-5`}>
            
            <Post creator='spaqoo dev' 
            postImage={require('../../assets/image-4.jpg')}
            title='New post of the day'
            icon={require('../../assets/creator-4.jpg')}
            />
            
            <Post creator='spaqoo dev' 
            postImage={require('../../assets/image-3.jpg')}
            title='New post of the day'
            icon={require('../../assets/creator-3.jpg')}
            />
            
            <Post creator='spaqoo dev' 
            postImage={require('../../assets/image-2.jpg')}
            title='New post of the day'
            icon={require('../../assets/creator-2.jpg')}
            />
            
            <Post creator='spaqoo dev' 
            postImage={require('../../assets/image-1.jpg')}
            title='New post of the day'
            icon={require('../../assets/creator-1.jpg')}
            />
            </View>
        </ScrollView>


    </View>
  )
}

export default profile