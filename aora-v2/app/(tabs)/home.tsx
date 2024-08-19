import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Card from '@/components/Card'

const home = () => {
  return (
    <View style={className`bg-gray-900 flex-1`}>
        
    <ScrollView>
        
        <View style={className`bg-gray-900 flex-1 gap-5`}>
            <View style={className`flex-row justify-between items-center p-5 pb-0`}>
                <View>
                    <Text style={className`text-gray-300`}>Welcome Back</Text>
                    <Text style={className`text-white font-semibold text-2xl`}>jsmastery</Text>
                </View>
                <Image source={require('../../assets/logo-small.png')} style={className`h-8 w-7`}/>
            </View>
    
            {/* search */}
            <View style={className`px-5`}>
                <TextInput style={className`text-gray-300 bg-gray-700 p-3 text-lg rounded-lg`} placeholder='Search for a video topic'/>
                <Image source={require('../../assets/search.png')} style={className`h-5 w-5 absolute top-4 right-10`}/>
            </View>
            {/* search */}
            <Text style={className`text-gray-300 p-5 pt-0`}>Trending Videos</Text>
    
            {/* image cards */}
            <View>
                
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={className`flex-row gap-3`}>
                <Image 
                 source={require('../../assets/image-1.jpg')} 
                  style={className`h-60 w-40 rounded-xl shadow-xl`}/>
                  
                <Image 
                 source={require('../../assets/image-2.jpg')} 
                  style={className`h-60 w-40 rounded-xl shadow-xl`}/>
                  
                <Image 
                 source={require('../../assets/image-3.jpg')} 
                  style={className`h-60 w-40 rounded-xl shadow-xl`}/>
                  
                <Image 
                 source={require('../../assets/image-4.jpg')} 
                  style={className`h-60 w-40 rounded-xl shadow-xl`}/>
            </View>
            </ScrollView>
            </View>
            {/* image cards */}
    
            {/* dotes */}
            <View style={className`flex-row justify-center items-center gap-1`}>
                <View style={className`p-1 bg-orange-500 rounded-full`}></View>
                <View style={className`p-1 bg-gray-700 rounded-full`}></View>
                <View style={className`p-1 bg-gray-700 rounded-full`}></View>
                <View style={className`p-1 bg-gray-700 rounded-full`}></View>
            </View>
            {/* dotes */}
    
            {/* posts */}
            <Card 
             icon={require('../../assets/creator-4.jpg')}
             title='Women walk 1'
             creator='Spaqoo1'
             image={require('../../assets/image-1.jpg')}
             />
            <Card 
             icon={require('../../assets/creator-1.jpg')}
             title='Women walk 2'
             creator='Spaqoo2'
             image={require('../../assets/image-2.jpg')}
             />
            <Card 
             icon={require('../../assets/creator-2.jpg')}
             title='Women walk 3'
             creator='Spaqoo3'
             image={require('../../assets/image-3.jpg')}
             />
            <Card 
             icon={require('../../assets/creator-3.jpg')}
             title='Women walk 4'
             creator='Spaqoo4'
             image={require('../../assets/image-4.jpg')}
             />
            {/* posts */}
        </View>
        </ScrollView>
    </View>
  )
}

export default home