import React from 'react';
import Madrech from './courseTab/Matrech'
import Student from './courseTab/Student'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();

import { View, Text } from 'react-native'


const CoursesTabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                indicatorStyle: {
                    height: null,
                    top: 0,
                    backgroundColor: null,
                    borderBottomColor: "white",
                    borderBottomWidth: 3,
                },
                activeTintColor: "white",
                inactiveTintColor: '#15457d',
                pressColor: "white",
                style: {
                    backgroundColor: "#4a90e2",
                },
                labelStyle: { fontSize: 16 },
            }}
            activeColor='#f0edf6'
            inactiveColor='#3e2465'
            barStyle={{ backgroundColor: '#000000' }}
        >
            
            <Tab.Screen
                name="מדריך"
                component={Madrech}
            />
            <Tab.Screen
                name="משתתף/ת"
                component={Student}
                options={{ tabBarBadge: 3 }}
            />
        </Tab.Navigator>
    )
}

export default CoursesTabs
