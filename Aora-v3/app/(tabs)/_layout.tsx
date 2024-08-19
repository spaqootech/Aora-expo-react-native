import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import className from 'twrnc'

const TabsIcon = ({source}) =>{
    return(
        <Image source={source} style={className`h-5 w-5 `}/>
    )
}

const _layout = () => {
  return (
    <Tabs screenOptions={{headerShown:false , tabBarStyle:{backgroundColor:'#232533'},
    tabBarShowLabel:false
    }}>

        <Tabs.Screen name='home' options={{tabBarIcon:()=>(
            <TabsIcon source={require('../../assets/home.png')} />
        )}}/>
        <Tabs.Screen name='profile' options={{tabBarIcon:()=>(
            <TabsIcon source={require('../../assets/profile.png')} />
        )}}/>
        <Tabs.Screen name='create' options={{tabBarIcon:()=>(
            <TabsIcon source={require('../../assets/plus.png')} />
        )}}/>
        <Tabs.Screen name='saved' options={{tabBarIcon:()=>(
            <TabsIcon source={require('../../assets/bookmark.png')} />
        )}}/>

    </Tabs>
  )
}

export default _layout