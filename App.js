import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import Tabs from './src/Tabs';
import Students from './src/LMS'
const Stack = createStackNavigator();


export default class App extends Component{
  render(){
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{ title: 'Home',
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'black'},
       }} />      
       <Stack.Screen name="Tabs" 
       component={Tabs}
        options={{ title: 'LMS',
        headerTitleAlign: 'center',
       }} />
      <Stack.Screen name="Students" 
       component={Students}
        options={{ title: 'LMS',
        headerTitleAlign: 'center',
       }} />
  </Stack.Navigator>
      
    </NavigationContainer>
  );
}


}