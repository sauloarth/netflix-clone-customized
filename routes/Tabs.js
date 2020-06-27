import React from 'react'
import { View, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons'
import Home from '../screen/Home'
import { More } from '../screen/More'

const Tab = createBottomTabNavigator()

export const Tabs = (props) => {
    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    activeBackgroundColor: 'black',
                    style: {
                        backgroundColor: '#1a1718',
                        borderTopColor: 'transparent',
                    }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name='home' size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Screen1"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name='perm-media' size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Screen2"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Feather name='download' size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="More"
                    component={More}
                    options={{
                        tabBarLabel: 'More',
                        tabBarIcon: ({ color, size }) => (
                            <Feather name='menu' size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Screen4"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name='search1' size={size} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </>
    )

}
