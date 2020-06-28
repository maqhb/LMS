import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  FlatList
} from "react-native";
import { ListItem} from 'react-native-elements';
import sections from './Dummy';


class Sections extends Component {

    constructor(props){
        super(props);

        this.state={
            students: null,
        }
    }

  render() {
    
    const renderedObject = Object.keys(sections)
    .filter(
    function(k){
        if(sections[k].teacher=="Teacher1"){
        return sections[k].currSection;
        }})    

    return (
      <SafeAreaView style={styles.container}>
          <FlatList
                data={renderedObject}
                keyExtractor={(item,index) => {
                  return index.toString()
                }}
                renderItem={({index,item}) => (
                <ListItem
                    key={index}
                    title={`${sections[item].currSection}`}
                    chevron
                    onPress={()=>{
                    this.props.navigation.navigate("Students",{index: item})}}
                  />
                )}
                />
      </SafeAreaView>
    );
  }
}

export default Sections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});