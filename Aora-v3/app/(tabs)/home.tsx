import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import InputWithIcon from '@/components/InputWithIcon'
import Post from '@/components/Post'

const home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        
    <View style={className`flex-1 bg-[#161622] gap-5 p-5`}>
        
        <View style={className`flex-row justify-between items-center`}>
            <View>
                <Text style={className`text-gray-300`}>Welcome Back</Text>
                <Text style={className`text-white text-2xl font-semibold`}>Spaqoo</Text>
            </View>
            <Image source={require('../../assets/logo-small.png')} style={className`h-8 w-7`}/>
        </View>
        
        <InputWithIcon placeholder='Search for a video topic' />

        <Text style={className`text-gray-400`}>Treanding videos</Text>

        {/* Images horizontal */}
        <View>
            
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={className`flex-row gap-3`}>
            <Image source={require('../../assets/image-1.jpg')} 
             style={className`h-60 w-40 rounded-lg `}/>
             
            <Image source={require('../../assets/image-2.jpg')} 
             style={className`h-60 w-40 rounded-lg `}/>
             
            <Image source={require('../../assets/image-3.jpg')} 
             style={className`h-60 w-40 rounded-lg `}/>
             
            <Image source={require('../../assets/image-4.jpg')} 
             style={className`h-60 w-40 rounded-lg `}/>
        </View>
        </ScrollView>
        </View>
        {/* Images horizontal */}


        {/* dotes */}
        <View style={className`flex-row justify-center items-center gap-1`}>
            <View style={className`p-1 rounded-full bg-gray-800`}></View>
            <View style={className`p-1 rounded-full bg-[#FFA101]`}></View>
            <View style={className`p-1 rounded-full bg-gray-800`}></View>
            <View style={className`p-1 rounded-full bg-gray-800`}></View>
        </View>
        {/* dotes */}

        <Post title='Post 1' creator='spaqoo' 
        icon={require('../../assets/creator-1.jpg')}
        postImage={require('../../assets/image-1.jpg')}
        />
        <Post title='Post 2' creator='devo' 
        icon={require('../../assets/creator-2.jpg')}
        postImage={require('../../assets/image-2.jpg')}
        />
        <Post title='Post 3' creator='jogyanahn' 
        icon={require('../../assets/creator-3.jpg')}
        postImage={require('../../assets/image-3.jpg')}
        />
        <Post title='Post 4' creator='riganw' 
        icon={require('../../assets/creator-4.jpg')}
        postImage={require('../../assets/image-4.jpg')}
        />

    </View>
    </ScrollView>
  )
}

export default home