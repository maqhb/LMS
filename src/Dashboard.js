import React,{Component} from 'react';
import {Text,View} from 'react-native';

export default class Dashboard extends Component{
    render(){
        return(
            <>
            <View style={{flex: 1,justifyContent: 'center',alignSelf:'center',width: 150}}>
            <Text>This is Dashboard</Text>
            </View>
            </>
        );
    }

}