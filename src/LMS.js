import React,{Component} from 'react';
import {Text,View,FlatList} from 'react-native';
import { ListItem} from 'react-native-elements';
import sections from './Dummy'
export default class LMS extends Component{

    constructor(props){
        super(props)

        this.state={
            students: null,
            index: props.route.params.index,
        }
        
    }

    componentDidUpdate(){
        this.setState({students: sections[props.route.params.index]});
    }
    
    render(){
        return(
            <>
            <View>
        <Text style={{alignSelf: 'center',borderWidth: 1,margin: 10,padding: 5}}>{sections[this.props.route.params.index].currSection}</Text>
        <FlatList
                data={sections[this.props.route.params.index].students}
                keyExtractor={(item,index) => {         
                  return index.toString()}}
                renderItem={({ item }) => (
                  <ListItem
                    key={item.id}
                    leftAvatar={{size:"small",rounded:true, source:  { uri: `${item.img}` } }}              
                    title={`${item.name}`}
                    subtitle={`${item.reg}`}
                    chevron
                  />
                )}
                />
                </View>
                </>
        )
    }
}