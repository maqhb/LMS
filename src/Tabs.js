import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from './Dashboard';
import Classwork from './Classwork';
// import LMS from './LMS';
import Sections from './Sections';
import React,{ Component } from 'react';
const Tab = createMaterialBottomTabNavigator();

export default class Tabs extends Component {
    render(){
  return (
      <>
    <Tab.Navigator
       initialRouteName="Dashboard"
       shifting={true}
       activeColor="white"
       inactiveColor="lightgrey"
    >
      <Tab.Screen
        name="Classwork"
        component={Classwork}
        options={{
          tabBarLabel: 'Classwork',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
          tabBarColor: '#9c27b0'
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarColor: '#2196f3'
        }}
      />
      <Tab.Screen
        name="LMS"
        component={Sections}
        options={{
          tabBarLabel: 'Students',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          tabBarColor: '#e91e63'
        }}
      />
    </Tab.Navigator>



    </>
  );
}
}