import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import className from 'twrnc'
const TabImage = ({source}) => {
    return(
        <Image source={source} style={className`h-6 w-6`}/>
    )
}
const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown:false ,
        tabBarLabelStyle:{display:'none'},
     tabBarStyle:{backgroundColor:'black',borderColor:'black' ,paddingBottom:12}}}>
     <Tabs.Screen name='home' options={{tabBarIcon:()=>(
         <TabImage source={require('../../assets/home.png')}/>
     )}} />
     <Tabs.Screen name='profile' options={{tabBarIcon:()=>(
         <TabImage source={require('../../assets/profile.png')}/>
     )}} />
     <Tabs.Screen name='create' options={{tabBarIcon:()=>(
         <TabImage source={require('../../assets/plus.png')}/>
     )}} />
     <Tabs.Screen name='saved' options={{tabBarIcon:()=>(
         <TabImage source={require('../../assets/bookmark.png')}/>
     )}} />
    </Tabs>
  )
}

export default TabsLayout