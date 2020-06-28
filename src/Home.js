import React,{Component} from 'react';
import {Button,View} from 'react-native';
import Tabs from './Tabs';
import Sections from './Sections';

export default class Home extends Component{

    render(){
        return(
            <>
            <View style={{flex: 1,justifyContent: 'center',alignSelf:'center',width: 150}}>
            <Button  title="Go to Teacher's Portal" onPress={()=>{
                this.props.navigation.navigate("Sections");
            }}></Button>
            </View>
            </>
        );
    }

}