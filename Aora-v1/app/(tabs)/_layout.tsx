import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import className from 'twrnc'

const TabIcon = ({source})=>{
  return(
    <View>
      <Image  
      resizeMode='contain'
      source={source}  
      style={className`h-6 w-6`}/>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs screenOptions={{tabBarStyle:{backgroundColor:'#000',padding:'1px'}}}>
        <Tabs.Screen name='home' options={{
          title:'Home',
          headerShown:false,
          tabBarIcon : ()=>(
            <TabIcon source={require('../../assets/icons/home.png')}/>
          )
          }}/>
          <Tabs.Screen name='profile' options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon : ()=>(
              <TabIcon source={require('../../assets/icons/profile.png')}/>
            )
            }}/>
            <Tabs.Screen name='create' options={{
              title:'Create',
              headerShown:false,
              tabBarIcon : ()=>(
                <TabIcon source={require('../../assets/icons/plus.png')}/>
              )
              }}/>
              <Tabs.Screen name='saved' options={{
                title:'Saved',
                headerShown:false,
                tabBarIcon : ()=>(
                  <TabIcon source={require('../../assets/icons/bookmark.png')}/>
                )
                }}/>
    </Tabs>
    </>
  )
}

export default TabsLayout